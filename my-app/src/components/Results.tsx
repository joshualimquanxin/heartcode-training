'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import React from 'react';
import { backgroundColor } from '@/lib/utils';
import Button from './Button';

export default function Results({
  score,
  icon,
  quizType,
}: {
  score: number;
  icon: string;
  quizType: string;
}) {
  const router = useRouter();
  return (
    <section className="py-8 px-6 md:px-16 lg:grid lg:grid-cols-2 lg:px-36">
      <div>
        <p className=" text-[2.5rem] md:text-[4rem] font-light md:leading-[100%]">
          Quiz completed
        </p>
        <p className="text-[2.5rem] md:text-[4rem] font-medium mb-10 md:mb-16 md:leading-[100%]">
          You scored...
        </p>
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex flex-col justify-center items-center bg-white dark:bg-secondary-dark p-8 md:p-12 rounded-xl md:rounded-3xl shadow-sm">
          <div className="flex items-center gap-4 md:gap-6">
            {/* <span
              className={`flex items-center ${backgroundColor(
                quizType.toLowerCase()
              )} p-1 rounded-md md:rounded-xl`}
            >
            </span> */}
            <p className="text-lg md:text-[1.75rem] font-medium dark: text-slate-800">{quizType}</p>
          </div>
          <p className="text-[5.5rem] md:text-[9rem] font-medium text-slate-800">{score}</p>
          <p className="text-lg md:text-2xl text-slate-600 dark:text-secondary-dark font-light">
            out of 5
          </p>
        </div>
        <Button text="Play Again" handleClick={() => router.push('/quiz')}></Button>
      </div>
    </section>
  );
}
