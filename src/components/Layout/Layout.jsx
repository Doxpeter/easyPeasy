import Head from "next/head";
import { Header } from "../Header/Header";
import { RangeSlider } from "../RangeSlider/RangeSlider";
import { PassBox } from "../PasswordBox/PassBox";
import { Checkbox } from "../Checkbox/Checkbox";
import { Button } from "../Button/Button";

export function Layout() {
  return (
    <div className="w-full max-h-screen bg-[#FFFFFE] px-7">
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
      {/* settings */}
      <Checkbox settings="include numbers" heading="settings" />
      <Checkbox settings="include letters" />
      <Checkbox settings="include symbols" />

      {/* generate button */}
      <Button />
    </div>
  );
}
