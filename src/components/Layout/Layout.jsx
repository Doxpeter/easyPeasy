import Head from "next/head";
import { Header } from "../Header/Header";
import { RangeSlider } from "../RangeSlider/RangeSlider";
import { PassBox } from "../PasswordBox/PassBox";

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
      <PassBox />

      {/* password length bar */}
      <RangeSlider />
    </div>
  );
}
