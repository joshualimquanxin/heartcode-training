import React from 'react';
import { handleLetter } from '@/lib/utils';
// import correctIcon from '@/public';
// import incorrectIcon from '../../public/assets/icons/icon-incorrect.svg';
import Image from 'next/image';

export default function QuizOption({
  option,
  selectedOption,
  answer,
  id,
  selected,
  correct,
  wrong,
  disabled,
  handleChange,
}: {
  option: string;
  selectedOption: string;
  answer: string;
  id: number;
  selected: boolean;
  correct: boolean;
  wrong: boolean;
  disabled: boolean;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
}) {
  const letter = handleLetter(id);

  return (
    <li className="group flex items-center text-lg md:text-[1.75rem] font-medium cursor-pointer">
      <input
        type="radio"
        name="choice"
        id={`choice-${id}`}
        value={option}
        className="hidden peer"
        onChange={handleChange}
        disabled={disabled}
        checked={selectedOption === option}
      />
      <label
        className={`${correct ? 'peer-checked:border-success ' : ''} ${
          wrong ? 'peer-checked:border-error ' : 'peer-checked:border-primary '
        }flex items-center bg-white dark:bg-secondary-dark p-3 gap-4 md:gap-8 rounded-xl md:rounded-3xl peer-checked:border-[3px] cursor-pointer w-full`}
        htmlFor={`choice-${id}`}
      >
        <span
          className={`${correct ? 'bg-success ' : ''} ${
            wrong && selected ? 'bg-error ' : ''
          } ${
            selected && !wrong
              ? 'bg-green-200 dark:text-white dark:bg-slate-800 '
              : 'bg-[#7690c4] '
          }flex shrink-0 justify-center items-center dark:text-icon-dark h-10 w-10 md:h-14 md:w-14 rounded-md md:rounded-xl group-hover:bg-light-purple group-hover:text-dark-purple`}
        >
          {letter}
        </span>
        <p>{option}</p>
        {correct ? (
          <Image
            className="ml-auto md:h-8 md:w-8"
            src='/icon-correct.svg'
            width={24}
            height={24}
            alt=""
          />
        ) : null}
        {wrong && answer === option ? (
          <Image
            className="ml-auto md:h-8 md:w-8"
            src='/icon-correct.svg'
            width={24}
            height={24}
            alt=""
          />
        ) : null}
        {wrong && selected ? (
          <Image
            className="ml-auto md:h-8 md:w-8"
            src='/icon-incorrect.svg'
            width={24}
            height={24}
            alt=""
          />
        ) : null}
      </label>
    </li>
  );
}
