import React, { useState } from 'react';
import { Question } from '../types';

interface QuizCardProps {
  question: Question;
  onAnswer: (isCorrect: boolean, userAnswer: string) => void;
  isReviewMode?: boolean;
  isLast?: boolean;
  lastButtonLabel?: string;
}

const QuizCard: React.FC<QuizCardProps> = ({ question, onAnswer, isReviewMode = false, isLast = false, lastButtonLabel }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const handleSelect = (option: string) => {
    if (hasSubmitted) return;
    setSelectedOption(option);
  };

  const handleSubmit = () => {
    if (!selectedOption || hasSubmitted) return;
    setHasSubmitted(true);
    // Auto-advance removed to allow manual review
  };

  const handleNext = () => {
     if (selectedOption) {
        onAnswer(selectedOption === question.correctAnswer, selectedOption);
     }
  }

  return (
    <div className="bg-white dark:bg-slate-800 shadow-lg rounded-xl overflow-hidden max-w-2xl w-full mx-auto border border-slate-200 dark:border-slate-700">
      <div className="bg-blue-600 dark:bg-blue-700 px-6 py-4">
        <div className="flex justify-between items-center text-blue-50">
          <span className="text-sm font-semibold uppercase tracking-wider opacity-80">{question.section}</span>
          <span className="text-xs bg-blue-700 dark:bg-blue-900 px-2 py-1 rounded">Q{question.id}</span>
        </div>
        <h2 className="text-xl font-bold text-white mt-2 leading-relaxed">{question.text}</h2>
      </div>

      <div className="p-6 space-y-3">
        {question.options.map((option, idx) => {
          let optionClass = "w-full text-left px-5 py-4 rounded-lg border-2 transition-all duration-200 font-medium text-slate-700 dark:text-slate-200 flex justify-between items-center ";

          if (hasSubmitted) {
            if (option === question.correctAnswer) {
              optionClass += "bg-green-50 border-green-500 text-green-800 dark:bg-green-900/30 dark:border-green-500 dark:text-green-200";
            } else if (option === selectedOption && option !== question.correctAnswer) {
              optionClass += "bg-red-50 border-red-500 text-red-800 dark:bg-red-900/30 dark:border-red-500 dark:text-red-200";
            } else {
              optionClass += "border-slate-100 dark:border-slate-700 opacity-50";
            }
          } else {
            if (selectedOption === option) {
              optionClass += "border-blue-600 bg-blue-50 text-blue-700 dark:bg-blue-900/40 dark:border-blue-400 dark:text-blue-200 shadow-sm";
            } else {
              optionClass += "border-slate-100 dark:border-slate-700 hover:border-blue-200 dark:hover:border-blue-700 hover:bg-slate-50 dark:hover:bg-slate-700/60";
            }
          }

          return (
            <button
              key={idx}
              onClick={() => handleSelect(option)}
              disabled={hasSubmitted}
              className={optionClass}
            >
              <span>{option}</span>
              {hasSubmitted && option === question.correctAnswer && (
                <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              )}
              {hasSubmitted && option === selectedOption && option !== question.correctAnswer && (
                 <svg className="w-6 h-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              )}
            </button>
          );
        })}
      </div>

      {!hasSubmitted && (
        <div className="px-6 pb-6">
          <button
            onClick={handleSubmit}
            disabled={!selectedOption}
            className={`w-full py-3 rounded-lg font-bold text-white transition-colors duration-200 ${selectedOption ? 'bg-blue-600 hover:bg-blue-700 shadow-md' : 'bg-slate-300 dark:bg-slate-700 cursor-not-allowed'}`}
          >
            Check Answer
          </button>
        </div>
      )}

      {hasSubmitted && (
        <div className="px-6 pb-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
          <div className={`p-4 rounded-lg ${selectedOption === question.correctAnswer ? 'bg-green-50 border border-green-200 dark:bg-green-900/30 dark:border-green-800/60' : 'bg-slate-50 border border-slate-200 dark:bg-slate-900/40 dark:border-slate-700'}`}>
            <h3 className={`font-bold mb-1 ${selectedOption === question.correctAnswer ? 'text-green-800 dark:text-green-200' : 'text-slate-800 dark:text-slate-100'}`}>
              {selectedOption === question.correctAnswer ? 'Correct!' : 'Incorrect'}
            </h3>
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
              <span className="font-semibold text-slate-800 dark:text-slate-100">Explanation: </span>
              {question.explanation}
            </p>
            <button onClick={handleNext} className="mt-4 w-full bg-slate-800 dark:bg-slate-700 text-white py-2 rounded-lg hover:bg-slate-900 dark:hover:bg-slate-600 transition-colors">
                 {isLast ? (isReviewMode ? "Finish Round" : (lastButtonLabel ?? "Finish Quiz")) : "Next Question"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizCard;