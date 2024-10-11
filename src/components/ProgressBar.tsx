import React from 'react';

export default function ProgressBar({ progress }: { progress: number }) {
  return (
    <div className="bg-slate-100 dark:bg-secondary-dark h-4 mt-6 p-1 rounded-full">
      <div
        className={`bg-slate-800 h-full rounded-full`}
        style={{ width: progress * 20 + '%' }}
      ></div>
    </div>
  );
}
