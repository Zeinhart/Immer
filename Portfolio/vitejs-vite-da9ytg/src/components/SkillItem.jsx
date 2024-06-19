import React from 'react';

const SkillItem = ({ title, details }) => {
  return (
    <ol className="flex flex-col md:flex-row relative border-l border-stone-300">
      <li className="mb-10 ml-4">
        <div className="absolute w-3 h-3 bg-stone-400 rounded-full mt-1.5 -left-1.5 border-white " />
        <p className=" flex flex-wrap gap-4 flex-row items-center justify-start text-xs ms:text-sm">
          <span className="text-lg font-semibold text[#001b5e]">{title}</span>
          <span className="my-1 text-sm font-formal leading-none text-stone-500">
            {details}
          </span>
        </p>
      </li>
    </ol>
  );
};

export default SkillItem;
