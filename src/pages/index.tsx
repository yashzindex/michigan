import Image from "next/image";
import { Inter } from "next/font/google";

import Main from "@/pages/Main";
import Schedule1 from "@/pages/Schedule1";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      {/* <Main /> */}
      <Schedule1 />
    </>
  );
}
