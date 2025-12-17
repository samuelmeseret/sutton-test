import React, { useState, useEffect } from 'react';
import { questions as sourceQuestions } from './data/questions';
import { QuizState, Question } from './types';
import QuizCard from './components/QuizCard';
import ResultCard from './components/ResultCard';

const INITIAL_STATE: QuizState = {
  currentQuestionIndex: 0,
  score: 0,
  showResults: false,
  history: [],
  isReviewMode: false,
  round: 1,
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

const App: React.FC = () => {
  const [gameState, setGameState] = useState<QuizState>(INITIAL_STATE);
  const [started, setStarted] = useState(false);
  const [activeQuestions, setActiveQuestions] = useState<Question[]>([]);
  // Store questions that were answered incorrectly in the current round
  const [nextRoundQuestions, setNextRoundQuestions] = useState<Question[]>([]);
  // Track IDs of questions we have already recorded in history (for scoring purposes)
  const [recordedQuestionIds, setRecordedQuestionIds] = useState<Set<number>>(new Set());

  // Initialize with shuffled questions
  useEffect(() => {
    setActiveQuestions(shuffleArray(sourceQuestions));
  }, []);

  const handleStart = () => {
    setActiveQuestions(shuffleArray(sourceQuestions));
    setNextRoundQuestions([]);
    setRecordedQuestionIds(new Set());
    setGameState(INITIAL_STATE);
    setStarted(true);
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

      // We only show results if it's the end of the batch AND there are no questions for the next round
      // Note: We check nextRoundQuestions.length, but we must also account for the *current* question
      // which might have just been added to the queue above.
      
      // Wait: setNextRoundQuestions is async. We can't read it immediately.
      // We know if we just missed this one (!isCorrect).
      const willHaveNextRound = nextRoundQuestions.length > 0 || !isCorrect;

      if (isEndOfBatch) {
        if (willHaveNextRound) {
           // We will handle the transition in a useEffect or logic block below, 
           // but for state update, just mark index as finished for a moment or handle transition now?
           // Easiest is to set a flag or let the render cycle handle the empty question.
           return {
             ...prev,
             score: newScore,
             history: newHistory,
             // We'll trigger the round transition effect if index overflows
             currentQuestionIndex: nextIndex 
           };
        } else {
           // No more incorrect questions!
           return {
             ...prev,
             score: newScore,
             history: newHistory,
             showResults: true
           };
        }
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
    if (started && !gameState.showResults && gameState.currentQuestionIndex >= activeQuestions.length) {
      if (nextRoundQuestions.length > 0) {
        // Start Review Round
        setActiveQuestions(shuffleArray(nextRoundQuestions));
        setNextRoundQuestions([]);
        setGameState(prev => ({
          ...prev,
          currentQuestionIndex: 0,
          isReviewMode: true,
          round: prev.round + 1
        }));
      } else {
        // Fallback: Should have been handled in handleAnswer, but safety net
        setGameState(prev => ({ ...prev, showResults: true }));
      }
    }
  }, [gameState.currentQuestionIndex, activeQuestions.length, nextRoundQuestions, started, gameState.showResults]);

  const restartQuiz = () => {
    setActiveQuestions(shuffleArray(sourceQuestions));
    setNextRoundQuestions([]);
    setRecordedQuestionIds(new Set());
    setGameState(INITIAL_STATE);
    setStarted(false);
  };

  const currentQuestion = activeQuestions[gameState.currentQuestionIndex];
  const isLastQuestion = gameState.currentQuestionIndex === activeQuestions.length - 1;

  if (!started) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-slate-100 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-xl overflow-hidden text-center">
            <div className="bg-blue-600 h-2"></div>
            <div className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                </div>
                <h1 className="text-2xl font-bold text-slate-900 mb-2">Midterm Exam Prep 2025</h1>
                <p className="text-slate-500 mb-8">Master your grammar with {sourceQuestions.length} practice questions covering sentence errors, object identification, and syntactical patterns.</p>
                <button 
                    onClick={handleStart}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors shadow-lg shadow-blue-200"
                >
                    Start Quiz
                </button>
            </div>
        </div>
      </div>
    );
  }

  if (gameState.showResults) {
    return (
      <div className="min-h-screen bg-slate-50">
        <header className="bg-white border-b border-slate-200 px-4 py-4 sticky top-0 z-10">
             <div className="max-w-4xl mx-auto flex justify-between items-center">
                 <h1 className="font-bold text-slate-800">Midterm Exam Results</h1>
             </div>
        </header>
        <ResultCard state={gameState} questions={sourceQuestions} onRestart={restartQuiz} />
      </div>
    );
  }

  // Guard clause if activeQuestions is empty or index is out of bounds (transitioning)
  if (!currentQuestion) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="animate-pulse flex flex-col items-center">
           <div className="h-4 w-32 bg-slate-200 rounded mb-4"></div>
           <div className="text-slate-400 font-medium">Loading next round...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <header className={`border-b px-4 py-4 sticky top-0 z-10 transition-colors duration-500 ${gameState.isReviewMode ? 'bg-amber-50 border-amber-200' : 'bg-white border-slate-200'}`}>
         <div className="max-w-2xl mx-auto flex justify-between items-center">
             <div className="flex flex-col">
                 <span className={`text-xs font-bold uppercase ${gameState.isReviewMode ? 'text-amber-600' : 'text-slate-400'}`}>
                    {gameState.isReviewMode ? `Review Round ${gameState.round - 1}` : 'Question'}
                 </span>
                 <span className="font-bold text-slate-800">
                    {gameState.currentQuestionIndex + 1} <span className="text-slate-400 font-normal">/ {activeQuestions.length}</span>
                 </span>
             </div>
             <div className="flex flex-col items-end">
                 <span className="text-xs font-bold text-slate-400 uppercase">Current Score</span>
                 <span className="font-bold text-blue-600">{gameState.score}</span>
             </div>
         </div>
      </header>

      <main className="flex-grow p-4 flex items-center justify-center relative">
        {gameState.isReviewMode && (
            <div className="absolute top-4 bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-semibold shadow-sm animate-in fade-in slide-in-from-top-4">
                Re-attempting Incorrect Answers
            </div>
        )}
        <QuizCard 
            key={`${currentQuestion.id}-${gameState.round}`} // Force re-render on question change or new round
            question={currentQuestion} 
            onAnswer={handleAnswer} 
            isLast={isLastQuestion}
            isReviewMode={gameState.isReviewMode}
        />
      </main>
    </div>
  );
};

export default App;