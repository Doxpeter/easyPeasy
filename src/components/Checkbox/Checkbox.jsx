import { Switch } from "@mui/material";

export function Checkbox(props) {
  return (
    <div className="mt-2 mb-4 md:w-1/2 lg:w-3/5 m-auto ">
      <p className="label mt-7 mb-2">{props.heading}</p>
      <div className="flex justify-between items-center bg-slate-200 shadow rounded-md h-12">
        <h4 className="mx-4 font-Raleway text-[9px] md:text-sm font-light">
          {props.settings}
        </h4>
        {/* toggle component */}
        <div className="px-2">
          <Switch size="medium" color="warning" />
        </div>
      </div>
    </div>
  );
}
