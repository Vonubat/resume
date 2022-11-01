import React from 'react';

function Languages() {
  return (
    <div className="flex flex-col max-w-[450px] mx-2 my-2">
      <h2 className="font-bold leading-loose text-2xl text-slate-600 uppercase">
        Languages
      </h2>
      <div className="flex justify-between">
        <span>English - B1</span>
        <span>Russian - Native Speaker</span>
      </div>
    </div>
  );
}

export default Languages;
