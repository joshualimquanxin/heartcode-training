'use client';

import React, { ChangeEvent, useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import quizData from '@/data/data.json';
import Results from '@/components/Results';
import QuizOption from '@/components/QuizOption';
import Button from '@/components/Button';
import ProgressBar from '@/components/ProgressBar';

export default function QuizPage() {
  const params = useParams();
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answerChoice, setAnswerChoice] = useState('');
  const [score, setScore] = useState(0);
  const [correct, setCorrect] = useState(false);
  const [wrong, setWrong] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [buttonChange, setButtonChange] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);
  const [error, setError] = useState(false);

  const filteredQuiz = quizData.quizzes.filter(
    quiz => quiz.title.toLowerCase() === params.category
  );
  const answer = filteredQuiz[0]?.questions[questionIndex].answer;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setAnswerChoice(event.target.value);
  };

  const isCorrect = (option: string) => {
    if (option === answer) {
      setScore(currScore => currScore + 1);
      return true;
    }
    setWrong(true);
    return false;
  };

  const handleAnswerSubmit = () => {
    if (answerChoice != '') {
      setCorrect(isCorrect(answerChoice));
      setButtonChange(true);
      setDisabled(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  const handleNextQuestion = () => {
    if (questionIndex < filteredQuiz[0].questions.length - 1) {
      setQuestionIndex(currIndex => currIndex + 1);
      setAnswerChoice('');
      setCorrect(false);
      setWrong(false);
      setButtonChange(false);
      setDisabled(false);
    } else {
      setQuizFinished(true);
      setQuestionIndex(0);
    }
  };

  return quizFinished === false ? (
    <div className="min-h-screen bg-gradient-to-br from-slate-200 via-slate-400 to-slate-600 dark:from-slate-600 dark:via-slate-800 dark:to-slate-950 p-8">
        <div>
      {filteredQuiz.map((quiz, idx) => {
        return (
          <div
            key={idx}
            className="flex flex-col gap-10 pt-8 px-6 lg:grid lg:grid-cols-2 md:px-16 lg:px-32"
          >
            <div>
              <p className="text-sm text-slate-600 dark:text-slate-300 italic mb-3 md:text-xl">
                Question {questionIndex + 1} of {quiz.questions.length}
              </p>
              <h2 className="text-xl font-medium md:text-4xl">
                {quiz.questions[questionIndex].question}
              </h2>
              
              {buttonChange ? (
                    <ProgressBar progress={questionIndex + 1} />
                ) : (
                    <ProgressBar progress={questionIndex} />
                )}
            </div>
            <div>
              <ul className="flex flex-col gap-3 dark:text-slate-950">
                {quiz.questions[questionIndex].options.map((option, idx) => {
                  return (
                    <QuizOption
                      key={idx}
                      option={option}
                      selectedOption={answerChoice}
                      answer={answer}
                      id={idx}
                      selected={answerChoice === option}
                      correct={answer === option && correct}
                      wrong={wrong}
                      disabled={disabled}
                      handleChange={handleChange}
                      
                    />
                  );
                })}
              </ul>
              <div className='text-slate-900'>
                {buttonChange ? (
                    <Button text="Next Question" handleClick={handleNextQuestion} />
                ) : (
                    <Button text="Submit Answer" handleClick={handleAnswerSubmit} />
                )}
                {error && (
                    <span className="flex gap-3 justify-center items-center mt-3 w-full">
                    <Image src='/icon-error.svg' width={24} height={24} alt="error" />
                    <p className="text-error">Please select an answer</p>
                    </span>
                )}
                </div>
            </div>
          </div>
        );
      })}
    </div>
    </div>
  ) : (
    <Results
      score={score}
      icon={filteredQuiz[0].icon}
      quizType={filteredQuiz[0].title}
    />
  );
}
