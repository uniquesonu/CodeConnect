import React from 'react';

const Loading = () => {
  return (
    <div className="shadow rounded-md p-4 max-w-sm w-full mx-auto">
      <div className="animate-pulse flex flex-col space-x-4">
        <div className="rounded-full bg-slate-700 h-32 w-32 self-center mb-4"></div>
        <div className="flex-1 space-y-6 py-1">
          <div className="h-4 bg-slate-700 rounded"></div>
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-4">
              <div className="h-4 bg-slate-700 rounded col-span-2"></div>
              <div className="h-4 bg-slate-700 rounded col-span-1"></div>
            </div>
            <div className="h-4 bg-slate-700 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
