import Head from "next/head";
import { Header } from "../Header/Header";

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
          <form className="w-full">
            <input
              className="shadow bg-slate-100  focus:border-orange-200  appearance-none  rounded w-full  placeholder-gray-300 leading-tight px-3 py-4 mb-4 font-Raleway text-center tracking-wide text-base"
              type="text"
              id="password"
              autoComplete="off"
              placeholder="password"
            />
          </form>
        </div>
      </div>
    </div>
  );
}
