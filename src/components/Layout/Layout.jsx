import Head from "next/head";
import { Header } from "../Header/Header";

export function Layout() {
  return (
    <div className="bg-[#FFFFFE]">
      <Head>
        <title>easyPeasy --password generator</title>
        <link
          rel="icon"
          href="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/285/key_1f511.png"
        />
      </Head>

      {/* header */}
      <Header />
    </div>
  );
}
