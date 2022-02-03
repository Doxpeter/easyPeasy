import { useState } from "react";

export function RangeSlider() {
  const [length, setLength] = useState(0);

  const handleChange = (e) => {
    let passLength = e.target.value;
    setLength(passLength);
  };

  return (
    <div className="w-full flex justify-center">
      <div className="w-full mt-4 md:w-1/2 lg:w-3/5 flex-col ">
        <label htmlFor="range" className="label">
          password length
        </label>
        <div className="flex items-center justify-center space-x-2 md:px-4 w-full h-12 rounded-md shadow bg-slate-200 ">
          <input
            type="range"
            id="range"
            min="0"
            max="32"
            value={length}
            onInput={handleChange}
            className="block w-10/12 lg:w-[95%] h-[2px] appearance-none rounded-md bg-orange-100 outline-none border-[1px] border-orange-300 range"
          />
          <div className="font-Raleway w-6">{length}</div>
        </div>
      </div>
    </div>
  );
}
