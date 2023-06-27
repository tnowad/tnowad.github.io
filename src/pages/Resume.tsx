import React from 'react';

export function Resume() {
  const backendResumeUrl = '';
  const frontendResumeUrl = '';

  const downloadResume = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Resume</h2>
        <div className="w-full flex justify-center">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
            <ResumeCard
              title="Backend Developer"
              onClick={() => downloadResume(backendResumeUrl)}
            />
            <ResumeCard
              title="Frontend Developer"
              onClick={() => downloadResume(frontendResumeUrl)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function ResumeCard({ title, onClick }: ResumeCardProps) {
  return (
    <div className="rounded-lg shadow-md p-6">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <button
        onClick={onClick}
        className="text-blue-500 font-semibold py-2 px-4 rounded-md mt-4"
      >
        Download
      </button>
    </div>
  );
}

type ResumeCardProps = {
  title: string;
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
};
