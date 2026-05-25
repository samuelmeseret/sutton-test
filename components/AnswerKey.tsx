import React, { useMemo } from 'react';
import { Question } from '../types';

interface AnswerKeyProps {
  questions: Question[];
  onBack: () => void;
  themeToggle?: React.ReactNode;
}

const AnswerKey: React.FC<AnswerKeyProps> = ({ questions, onBack, themeToggle }) => {
  const grouped = useMemo(() => {
    const acc: Record<string, Question[]> = {};
    for (const q of questions) {
      (acc[q.section] = acc[q.section] || []).push(q);
    }
    return acc;
  }, [questions]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <header className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 px-4 py-4 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto flex justify-between items-center gap-3">
          <h1 className="font-bold text-slate-800 dark:text-slate-100">Answer Key</h1>
          <div className="flex items-center gap-3">
            <button
              onClick={onBack}
              className="bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-100 px-4 py-2 rounded-lg font-semibold text-sm transition-colors"
            >
              Back
            </button>
            {themeToggle}
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto w-full px-4 py-8 space-y-8">
        <p className="text-slate-500 dark:text-slate-400">
          All {questions.length} questions with their correct answers and explanations.
        </p>

        {(Object.entries(grouped) as [string, Question[]][]).map(([section, sectionQuestions]) => (
          <section key={section} className="space-y-4">
            <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100 border-l-4 border-blue-500 pl-3">
              {section}
            </h2>
            <div className="space-y-4">
              {sectionQuestions.map((q, idx) => (
                <div
                  key={q.id}
                  className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden"
                >
                  <div className="p-5 border-b border-slate-100 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/40">
                    <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                      Question {idx + 1}
                    </span>
                    <p className="font-semibold text-slate-800 dark:text-slate-100 mt-1">{q.text}</p>
                  </div>
                  <div className="p-5 space-y-3">
                    <div className="flex flex-wrap gap-2">
                      {q.options.map(option => {
                        const isCorrect = option === q.correctAnswer;
                        return (
                          <span
                            key={option}
                            className={`px-3 py-1 rounded-full text-sm font-medium border ${
                              isCorrect
                                ? 'bg-green-50 border-green-200 text-green-800 dark:bg-green-900/30 dark:border-green-800/50 dark:text-green-200'
                                : 'bg-slate-50 border-slate-200 text-slate-600 dark:bg-slate-900/40 dark:border-slate-700 dark:text-slate-300'
                            }`}
                          >
                            {isCorrect && (
                              <span className="mr-1 font-bold">✓</span>
                            )}
                            {option}
                          </span>
                        );
                      })}
                    </div>
                    <div className="bg-green-50 dark:bg-green-900/30 p-3 rounded-lg border border-green-100 dark:border-green-800/50">
                      <span className="text-xs font-bold text-green-600 dark:text-green-300 uppercase">
                        Correct Answer
                      </span>
                      <p className="text-green-900 dark:text-green-100 font-medium mt-1">
                        {q.correctAnswer}
                      </p>
                    </div>
                    <div className="bg-slate-50 dark:bg-slate-900/40 p-4 rounded-lg text-sm text-slate-600 dark:text-slate-300">
                      <span className="font-bold text-slate-700 dark:text-slate-200">Explanation:</span>{' '}
                      {q.explanation}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default AnswerKey;
