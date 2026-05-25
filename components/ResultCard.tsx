import React from 'react';
import { QuizState, Question } from '../types';

interface ResultCardProps {
  state: QuizState;
  questions: Question[];
  onRestart: () => void;
}

const ResultCard: React.FC<ResultCardProps> = ({ state, questions, onRestart }) => {
  const incorrectIds = state.history.filter(h => !h.isCorrect).map(h => h.questionId);
  const percentage = Math.round((state.score / questions.length) * 100);

  return (
    <div className="max-w-4xl mx-auto w-full px-4 py-8">
      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl overflow-hidden mb-8 text-center p-10 border border-slate-100 dark:border-slate-700">
        <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-2">Exam Complete!</h2>
        <p className="text-slate-500 dark:text-slate-400 mb-8">Here is how you performed on the Midterm Review.</p>

        <div className="flex justify-center items-center mb-8">
            <div className="relative">
                <svg className="w-40 h-40 transform -rotate-90">
                    <circle cx="80" cy="80" r="70" stroke="currentColor" strokeWidth="10" fill="transparent" className="text-slate-100 dark:text-slate-700" />
                    <circle cx="80" cy="80" r="70" stroke="currentColor" strokeWidth="10" fill="transparent" className={percentage >= 70 ? "text-green-500" : "text-amber-500"} strokeDasharray={440} strokeDashoffset={440 - (440 * percentage) / 100} />
                </svg>
                <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center">
                    <span className="text-4xl font-extrabold text-slate-800 dark:text-slate-100">{percentage}%</span>
                    <span className="text-sm text-slate-500 dark:text-slate-400 font-medium">{state.score} / {questions.length}</span>
                </div>
            </div>
        </div>

        <button
            onClick={onRestart}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-bold shadow-lg transition-transform transform hover:scale-105"
        >
            Try Again
        </button>
      </div>

      {incorrectIds.length > 0 && (
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 px-2 border-l-4 border-red-500 pl-3">Review Incorrect Answers</h3>
          {incorrectIds.map(id => {
            const question = questions.find(q => q.id === id);
            const historyItem = state.history.find(h => h.questionId === id);
            if (!question) return null;

            return (
              <div key={id} className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
                <div className="p-5 border-b border-slate-100 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/40">
                    <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">{question.section}</span>
                    <p className="font-semibold text-lg text-slate-800 dark:text-slate-100 mt-1">{question.text}</p>
                </div>
                <div className="p-5 grid gap-4 md:grid-cols-2">
                    <div className="bg-red-50 dark:bg-red-900/30 p-3 rounded-lg border border-red-100 dark:border-red-800/60">
                        <span className="text-xs font-bold text-red-500 dark:text-red-300 uppercase">You Selected</span>
                        <p className="text-red-900 dark:text-red-100 font-medium mt-1">{historyItem?.userAnswer}</p>
                    </div>
                    <div className="bg-green-50 dark:bg-green-900/30 p-3 rounded-lg border border-green-100 dark:border-green-800/60">
                        <span className="text-xs font-bold text-green-500 dark:text-green-300 uppercase">Correct Answer</span>
                        <p className="text-green-900 dark:text-green-100 font-medium mt-1">{question.correctAnswer}</p>
                    </div>
                </div>
                <div className="px-5 pb-5">
                    <div className="bg-slate-50 dark:bg-slate-900/40 p-4 rounded-lg text-sm text-slate-600 dark:text-slate-300">
                        <span className="font-bold text-slate-700 dark:text-slate-200">Explanation:</span> {question.explanation}
                    </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ResultCard;