import { DuplicateIcon } from "@heroicons/react/outline";

export function PassBox() {
  return (
    <div className="flex justify-center">
      <div className="w-full mt-7 md:w-1/2 lg:w-3/5">
        <label htmlFor="password" className="label">
          generated password
        </label>
        <form className="flex items-center pr-4 md:pr-6  w-full bg-slate-200 shadow rounded-md">
          <input
            className="appearance-none flex-1 outline-none w-3/5 bg-transparent rounded placeholder-gray-300 leading-tight py-4 font-Raleway text-center tracking-wide text-base"
            type="text"
            id="password"
            autoComplete="off"
            placeholder=""
          />
          <DuplicateIcon className="w-7 h-7 text-gray-500" />
        </form>
      </div>
    </div>
  );
}
