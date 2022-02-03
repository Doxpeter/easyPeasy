import Head from "next/head";
import { Header } from "../Header/Header";
import { DuplicateIcon } from "@heroicons/react/outline";
import { RangeSlider } from "../RangeSlider/RangeSlider";

export function Layout() {
  return (
    <div className="bg-[#FFFFFE] px-7">
      <Head>
        <title>easyPeasy --password generator</title>
        <link
          rel="icon"
          href="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/285/key_1f511.png"
        />
      </Head>
      {/* header */}
      <Header />

      {/* password box */}
      <div className="flex justify-center">
        <div className="w-full mt-7 md:w-1/2 lg:w-3/5">
          <label for="password" className="label">
            generated password
          </label>
          <form className="flex items-center justify-around w-full bg-slate-200 shadow rounded-md">
            <input
              className="appearance-none outline-none w-3/5 bg-transparent rounded placeholder-gray-300 leading-tight py-4 font-Raleway text-center tracking-wide text-base"
              type="text"
              id="password"
              autoComplete="off"
              placeholder=""
            />
            <DuplicateIcon className="w-7 h-7 text-gray-500" />
          </form>
        </div>
      </div>
      {/* password length bar */}
      <RangeSlider />
    </div>
  );
}
