import React, { useState, useEffect } from 'react';
import { questions as sourceQuestions } from './data/questions';
import { QuizState, Question, QuizCategory } from './types';
import QuizCard from './components/QuizCard';
import ResultCard from './components/ResultCard';
import AnswerKey from './components/AnswerKey';
import DarkModeToggle from './components/ui/dark-mode-toggle';

function useDarkMode(): [boolean, (next: boolean) => void] {
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof document === 'undefined') return false;
    return document.documentElement.classList.contains('dark');
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) root.classList.add('dark');
    else root.classList.remove('dark');
    try {
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    } catch {}
  }, [isDark]);

  return [isDark, setIsDark];
}

const INITIAL_STATE: QuizState = {
  currentQuestionIndex: 0,
  score: 0,
  showResults: false,
  history: [],
  isReviewMode: false,
  round: 1,
  mode: 'standard',
  category: 'all',
  currentBatchIndex: 0,
  totalBatches: 1,
  batchAttempts: [],
};

// Fisher-Yates shuffle algorithm
function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

function chunk<T>(arr: T[], size: number): T[][] {
  const out: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    out.push(arr.slice(i, i + size));
  }
  return out;
}

function categoryFilter(category: QuizCategory): Question[] {
  switch (category) {
    case 'grammar':
      return sourceQuestions.filter(q => q.section === 'Sentence Errors' || q.section === 'Grammar Rules');
    case 'poetry':
      return sourceQuestions.filter(q => q.section === 'Poetry');
    case 'all':
    default:
      return sourceQuestions;
  }
}

function batchSizeFor(category: QuizCategory): number {
  return category === 'poetry' ? 7 : 15;
}

const CATEGORY_LABEL: Record<QuizCategory, string> = {
  all: 'All questions',
  grammar: 'Grammar only',
  poetry: 'Poetry only',
};

const App: React.FC = () => {
  const [gameState, setGameState] = useState<QuizState>(INITIAL_STATE);
  const [started, setStarted] = useState(false);
  const [configuring, setConfiguring] = useState(false);
  const [showAnswerKey, setShowAnswerKey] = useState(false);
  const [isDark, setIsDark] = useDarkMode();
  const [activeQuestions, setActiveQuestions] = useState<Question[]>([]);
  // Pool of questions actually quizzed (used as denominator for scoring)
  const [pool, setPool] = useState<Question[]>(sourceQuestions);
  // Pre-split batches for batched mode (empty in standard mode)
  const [batches, setBatches] = useState<Question[][]>([]);
  // Store questions that were answered incorrectly in the current round
  const [nextRoundQuestions, setNextRoundQuestions] = useState<Question[]>([]);
  // Track IDs of questions we have already recorded in history (for scoring purposes)
  const [recordedQuestionIds, setRecordedQuestionIds] = useState<Set<number>>(new Set());
  // True between batches while the user decides to advance or retry
  const [awaitingBatchDecision, setAwaitingBatchDecision] = useState(false);

  // Config-screen state
  const [selectedCategory, setSelectedCategory] = useState<QuizCategory>('all');
  const [useBatches, setUseBatches] = useState<boolean>(true);
  const [batchSizeInput, setBatchSizeInput] = useState<string>(String(batchSizeFor('all')));

  // Initialize with shuffled questions
  useEffect(() => {
    setActiveQuestions(shuffleArray(sourceQuestions));
  }, []);

  const openConfig = () => {
    setSelectedCategory('all');
    setUseBatches(true);
    setBatchSizeInput(String(batchSizeFor('all')));
    setConfiguring(true);
  };

  const handleCategoryChange = (category: QuizCategory) => {
    setSelectedCategory(category);
    const max = categoryFilter(category).length;
    const parsed = parseInt(batchSizeInput, 10);
    if (!Number.isFinite(parsed) || parsed < 1) {
      setBatchSizeInput(String(Math.min(batchSizeFor(category), max)));
    } else if (parsed > max) {
      setBatchSizeInput(String(max));
    }
  };

  const startStandard = (category: QuizCategory) => {
    const filtered = categoryFilter(category);
    const shuffled = shuffleArray(filtered);
    setPool(filtered);
    setBatches([]);
    setActiveQuestions(shuffled);
    setNextRoundQuestions([]);
    setRecordedQuestionIds(new Set());
    setAwaitingBatchDecision(false);
    setGameState({
      ...INITIAL_STATE,
      mode: 'standard',
      category,
      totalBatches: 1,
    });
    setConfiguring(false);
    setStarted(true);
  };

  const startBatched = (category: QuizCategory, size: number) => {
    const filtered = categoryFilter(category);
    const split = chunk(shuffleArray(filtered), size);
    setPool(filtered);
    setBatches(split);
    setActiveQuestions(split[0] ?? []);
    setNextRoundQuestions([]);
    setRecordedQuestionIds(new Set());
    setAwaitingBatchDecision(false);
    setGameState({
      ...INITIAL_STATE,
      mode: 'batched',
      category,
      currentBatchIndex: 0,
      totalBatches: split.length,
      batchAttempts: [],
    });
    setConfiguring(false);
    setStarted(true);
  };

  const handleStartFromConfig = () => {
    const filtered = categoryFilter(selectedCategory);
    if (!useBatches) {
      startStandard(selectedCategory);
      return;
    }
    const parsed = parseInt(batchSizeInput, 10);
    if (!Number.isFinite(parsed) || parsed < 1 || parsed > filtered.length) return;
    startBatched(selectedCategory, parsed);
  };

  const handleNextBatch = () => {
    const nextBatchIndex = gameState.currentBatchIndex + 1;
    setActiveQuestions(batches[nextBatchIndex]);
    setNextRoundQuestions([]);
    setAwaitingBatchDecision(false);
    setGameState(prev => ({
      ...prev,
      currentQuestionIndex: 0,
      isReviewMode: false,
      round: 1,
      currentBatchIndex: nextBatchIndex,
    }));
  };

  const handleRetryBatch = () => {
    setActiveQuestions(shuffleArray(batches[gameState.currentBatchIndex]));
    setNextRoundQuestions([]);
    setAwaitingBatchDecision(false);
    setGameState(prev => ({
      ...prev,
      currentQuestionIndex: 0,
      isReviewMode: false,
      round: 1,
    }));
  };

  const handleAnswer = (isCorrect: boolean, userAnswer: string) => {
    const currentQ = activeQuestions[gameState.currentQuestionIndex];

    // If incorrect, add to the next round queue
    if (!isCorrect) {
      setNextRoundQuestions(prev => [...prev, currentQ]);
    }

    setGameState(prev => {
      // Only update Score and History if this is the FIRST time seeing this question
      // This ensures the final result card reflects the true exam performance
      let newScore = prev.score;
      let newHistory = prev.history;

      if (!recordedQuestionIds.has(currentQ.id)) {
        newScore = isCorrect ? prev.score + 1 : prev.score;
        newHistory = [
          ...prev.history,
          {
            questionId: currentQ.id,
            userAnswer,
            isCorrect
          }
        ];
        setRecordedQuestionIds(ids => new Set(ids).add(currentQ.id));
      }

      // Calculate navigation
      const nextIndex = prev.currentQuestionIndex + 1;
      const isEndOfBatch = nextIndex >= activeQuestions.length;

      // setNextRoundQuestions is async so we can't read it here.
      // But we know if the just-answered question was wrong (!isCorrect).
      const willHaveNextRound = nextRoundQuestions.length > 0 || !isCorrect;

      if (isEndOfBatch) {
        if (willHaveNextRound) {
           // Round-transition useEffect will handle setting up the next review round within this batch.
           return {
             ...prev,
             score: newScore,
             history: newHistory,
             currentQuestionIndex: nextIndex
           };
        }
        // Batch cleared on this pass.
        if (prev.mode === 'batched' && prev.currentBatchIndex + 1 < prev.totalBatches) {
          // Advance to next batch in the round-transition useEffect (it sees index overflow).
          return {
            ...prev,
            score: newScore,
            history: newHistory,
            currentQuestionIndex: nextIndex
          };
        }
        // Standard mode finished, or last batch cleared.
        return {
          ...prev,
          score: newScore,
          history: newHistory,
          showResults: true,
          batchAttempts: prev.mode === 'batched'
            ? [...prev.batchAttempts, prev.round]
            : prev.batchAttempts
        };
      }

      return {
        ...prev,
        score: newScore,
        history: newHistory,
        currentQuestionIndex: nextIndex,
      };
    });
  };

  // Effect to handle round transitions when index exceeds bounds
  useEffect(() => {
    if (started && !gameState.showResults && !awaitingBatchDecision && gameState.currentQuestionIndex >= activeQuestions.length) {
      if (nextRoundQuestions.length > 0) {
        // Start Review Round within the current batch
        setActiveQuestions(shuffleArray(nextRoundQuestions));
        setNextRoundQuestions([]);
        setGameState(prev => ({
          ...prev,
          currentQuestionIndex: 0,
          isReviewMode: true,
          round: prev.round + 1
        }));
      } else if (gameState.mode === 'batched' && gameState.currentBatchIndex + 1 < gameState.totalBatches) {
        // Batch cleared — pause for user decision (advance or retry)
        setAwaitingBatchDecision(true);
        setGameState(prev => ({
          ...prev,
          batchAttempts: [...prev.batchAttempts, prev.round]
        }));
      } else {
        // Safety net: standard mode done, or last batch cleared
        setGameState(prev => ({
          ...prev,
          showResults: true,
          batchAttempts: prev.mode === 'batched'
            ? [...prev.batchAttempts, prev.round]
            : prev.batchAttempts
        }));
      }
    }
  }, [gameState.currentQuestionIndex, activeQuestions.length, nextRoundQuestions, started, gameState.showResults, gameState.mode, gameState.currentBatchIndex, gameState.totalBatches, batches, awaitingBatchDecision]);

  const restartQuiz = () => {
    setActiveQuestions(shuffleArray(sourceQuestions));
    setPool(sourceQuestions);
    setBatches([]);
    setNextRoundQuestions([]);
    setRecordedQuestionIds(new Set());
    setAwaitingBatchDecision(false);
    setSelectedCategory('all');
    setUseBatches(true);
    setBatchSizeInput(String(batchSizeFor('all')));
    setGameState(INITIAL_STATE);
    setConfiguring(false);
    setStarted(false);
  };

  const currentQuestion = activeQuestions[gameState.currentQuestionIndex];
  const isLastQuestion = gameState.currentQuestionIndex === activeQuestions.length - 1;
  const isLastBatch = gameState.currentBatchIndex + 1 >= gameState.totalBatches;
  const lastButtonLabel = gameState.mode === 'batched' && !isLastBatch && !gameState.isReviewMode
    ? 'Finish Batch'
    : undefined;

  const themeToggle = (
    <DarkModeToggle checked={isDark} onCheckedChange={setIsDark} />
  );

  if (showAnswerKey) {
    return (
      <AnswerKey
        questions={sourceQuestions}
        onBack={() => setShowAnswerKey(false)}
        themeToggle={themeToggle}
      />
    );
  }

  if (!started && configuring) {
    const topicOptions: QuizCategory[] = ['all', 'grammar', 'poetry'];
    const topicCount = categoryFilter(selectedCategory).length;
    const parsedSize = parseInt(batchSizeInput, 10);
    const sizeValid = Number.isFinite(parsedSize) && parsedSize >= 1 && parsedSize <= topicCount;
    const canStart = !useBatches || sizeValid;
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white dark:bg-slate-800 rounded-2xl shadow-xl overflow-hidden text-center relative">
            <div className="absolute top-4 right-4 z-10">{themeToggle}</div>
            <div className="bg-blue-600 h-2"></div>
            <div className="p-8">
                <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">Set Up Quiz</h1>
                <p className="text-slate-500 dark:text-slate-400 mb-6">Pick a topic and choose whether to split it into batches.</p>

                <div className="text-left mb-6">
                  <span className="text-xs font-bold uppercase text-slate-500 dark:text-slate-400">Topic</span>
                  <div className="mt-2 space-y-2">
                    {topicOptions.map(opt => {
                      const count = categoryFilter(opt).length;
                      const isSelected = selectedCategory === opt;
                      return (
                        <button
                          key={opt}
                          onClick={() => handleCategoryChange(opt)}
                          className={`w-full font-bold py-3 px-4 rounded-lg transition-colors shadow-sm text-left flex justify-between items-center border ${
                            isSelected
                              ? 'bg-blue-600 hover:bg-blue-700 text-white border-blue-600'
                              : 'bg-white dark:bg-slate-700 hover:bg-slate-50 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-100 border-slate-200 dark:border-slate-600'
                          }`}
                        >
                          <span>{CATEGORY_LABEL[opt]}</span>
                          <span className="text-xs font-normal opacity-90">{count} questions</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="text-left mb-4">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={useBatches}
                      onChange={(e) => setUseBatches(e.target.checked)}
                      className="w-4 h-4 accent-blue-600"
                    />
                    <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">Split into batches</span>
                  </label>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 ml-7">
                    {useBatches
                      ? 'Each batch must be cleared with every answer correct before moving on.'
                      : 'Play all questions in one continuous run, then review any misses at the end.'}
                  </p>
                </div>

                {useBatches && (
                  <div className="text-left mb-6">
                    <label htmlFor="batchSize" className="text-xs font-bold uppercase text-slate-500 dark:text-slate-400">
                      Questions per batch
                    </label>
                    <input
                      id="batchSize"
                      type="number"
                      min={1}
                      max={topicCount}
                      value={batchSizeInput}
                      onChange={(e) => setBatchSizeInput(e.target.value)}
                      className="mt-2 w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                      Between 1 and {topicCount}.
                    </p>
                  </div>
                )}

                <button
                  onClick={handleStartFromConfig}
                  disabled={!canStart}
                  className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-slate-300 dark:disabled:bg-slate-600 disabled:cursor-not-allowed text-white font-bold py-3 px-6 rounded-lg transition-colors shadow-md"
                >
                  Start Quiz
                </button>
                <button
                    onClick={() => setConfiguring(false)}
                    className="w-full mt-4 text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 font-semibold py-2 transition-colors"
                >
                    ← Back
                </button>
            </div>
        </div>
      </div>
    );
  }

  if (!started) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white dark:bg-slate-800 rounded-2xl shadow-xl overflow-hidden text-center relative">
            <div className="absolute top-4 right-4 z-10">{themeToggle}</div>
            <div className="bg-blue-600 h-2"></div>
            <div className="p-8">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/40 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-blue-600 dark:text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                </div>
                <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">Midterm Exam Prep 2025</h1>
                <p className="text-slate-500 dark:text-slate-400 mb-8">Master your grammar with {sourceQuestions.length} practice questions covering sentence errors, object identification, and syntactical patterns.</p>
                <button
                    onClick={openConfig}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors shadow-lg shadow-blue-200"
                >
                    Start Quiz
                </button>
                <button
                    onClick={() => setShowAnswerKey(true)}
                    className="w-full mt-3 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-blue-600 dark:text-blue-300 font-semibold py-3 px-6 rounded-lg transition-colors border border-blue-200 dark:border-blue-900/60"
                >
                    View Answer Key
                </button>
            </div>
        </div>
      </div>
    );
  }

  if (gameState.showResults) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
        <header className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 px-4 py-4 sticky top-0 z-10">
             <div className="max-w-4xl mx-auto flex justify-between items-center gap-3">
                 <h1 className="font-bold text-slate-800 dark:text-slate-100">Midterm Exam Results</h1>
                 <div className="flex items-center gap-3">
                   <button
                      onClick={() => setShowAnswerKey(true)}
                      className="bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-100 px-4 py-2 rounded-lg font-semibold text-sm transition-colors"
                   >
                      Answer Key
                   </button>
                   {themeToggle}
                 </div>
             </div>
        </header>
        <ResultCard state={gameState} questions={pool} onRestart={restartQuiz} />
      </div>
    );
  }

  if (awaitingBatchDecision) {
    const justCleared = gameState.currentBatchIndex + 1;
    const remaining = gameState.totalBatches - justCleared;
    const roundsTaken = gameState.batchAttempts[gameState.batchAttempts.length - 1] ?? 1;
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white dark:bg-slate-800 rounded-2xl shadow-xl overflow-hidden text-center relative">
            <div className="absolute top-4 right-4 z-10">{themeToggle}</div>
            <div className="bg-emerald-500 h-2"></div>
            <div className="p-8">
                <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/40 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-emerald-600 dark:text-emerald-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                  Batch {justCleared} cleared
                </h1>
                <p className="text-slate-500 dark:text-slate-400 mb-2">
                  {roundsTaken === 1 ? 'Perfect on the first pass.' : `Took ${roundsTaken} rounds to clear.`}
                </p>
                <p className="text-slate-500 dark:text-slate-400 mb-8">
                  {remaining} batch{remaining === 1 ? '' : 'es'} left.
                </p>
                <button
                    onClick={handleNextBatch}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors shadow-md"
                >
                    Next batch
                </button>
                <button
                    onClick={handleRetryBatch}
                    className="w-full mt-3 bg-blue-50 dark:bg-blue-900/40 hover:bg-blue-100 dark:hover:bg-blue-900/60 text-blue-700 dark:text-blue-200 font-bold py-3 px-6 rounded-lg transition-colors border border-blue-200 dark:border-blue-800"
                >
                    Retry this batch
                </button>
            </div>
        </div>
      </div>
    );
  }

  // Guard clause if activeQuestions is empty or index is out of bounds (transitioning)
  if (!currentQuestion) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex items-center justify-center">
        <div className="animate-pulse flex flex-col items-center">
           <div className="h-4 w-32 bg-slate-200 dark:bg-slate-700 rounded mb-4"></div>
           <div className="text-slate-400 dark:text-slate-500 font-medium">Loading next round...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex flex-col">
      <header className={`border-b px-4 py-4 sticky top-0 z-10 transition-colors duration-500 ${gameState.isReviewMode ? 'bg-amber-50 border-amber-200 dark:bg-amber-950/40 dark:border-amber-900/60' : 'bg-white border-slate-200 dark:bg-slate-800 dark:border-slate-700'}`}>
         <div className="max-w-2xl mx-auto flex justify-between items-center gap-4">
             <div className="flex flex-col">
                 <span className={`text-xs font-bold uppercase ${gameState.isReviewMode ? 'text-amber-600 dark:text-amber-300' : 'text-slate-400 dark:text-slate-500'}`}>
                    {gameState.mode === 'batched'
                      ? `Batch ${gameState.currentBatchIndex + 1} / ${gameState.totalBatches}${gameState.isReviewMode ? ` · Review Round ${gameState.round - 1}` : ''}`
                      : (gameState.isReviewMode ? `Review Round ${gameState.round - 1}` : 'Question')}
                 </span>
                 <span className="font-bold text-slate-800 dark:text-slate-100">
                    {gameState.currentQuestionIndex + 1} <span className="text-slate-400 dark:text-slate-500 font-normal">/ {activeQuestions.length}</span>
                 </span>
             </div>
             <div className="flex items-center gap-4">
                 <div className="flex flex-col items-end">
                     <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase">Current Score</span>
                     <span className="font-bold text-blue-600 dark:text-blue-300">{gameState.score}</span>
                 </div>
                 {themeToggle}
             </div>
         </div>
      </header>

      <main className="flex-grow p-4 flex items-center justify-center relative">
        {gameState.isReviewMode && (
            <div className="absolute top-4 bg-amber-100 text-amber-800 dark:bg-amber-900/60 dark:text-amber-100 px-4 py-2 rounded-full text-sm font-semibold shadow-sm animate-in fade-in slide-in-from-top-4">
                Re-attempting Incorrect Answers
            </div>
        )}
        <QuizCard
            key={`${currentQuestion.id}-${gameState.round}-${gameState.currentBatchIndex}`}
            question={currentQuestion}
            onAnswer={handleAnswer}
            isLast={isLastQuestion}
            isReviewMode={gameState.isReviewMode}
            lastButtonLabel={lastButtonLabel}
        />
      </main>
    </div>
  );
};

export default App;
