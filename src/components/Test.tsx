import React, { useState } from 'react';

const Test = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleInputChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div>
      <div className="flex flex-col items-start gap-4 overflow-hidden rounded-md p-6 shadow-sm shadow-[#00000050]">
        <span className="text-center font-mono text-base font-black uppercase text-neutral-600">
          Please select your gender
        </span>

        <div className="">
          <div className="relative flex h-[50px] w-[50px] items-center justify-center">
            <input
              type="radio"
              id="radio"
              name="gender"
              value="male"
              className="peer z-10 h-full w-full cursor-pointer opacity-0"
              checked={isChecked}
              onChange={handleInputChange}
            />
            <div className={`absolute h-full w-full rounded-full bg-blue-100 p-4 shadow-sm shadow-[#00000050] ring-primary duration-300 ${isChecked ? 'peer-checked:scale-110 peer-checked:ring-2' : ''}`}></div>
            {isChecked && (
              <div className={`absolute -z-10 h-full w-full rounded-full bg-primary opacity-100 scale-100 transition-opacity duration-500 peer-checked:scale-[200%]`}></div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;
