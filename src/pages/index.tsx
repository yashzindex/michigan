import Image from "next/image";
import { Inter } from "next/font/google";
import Schedule1 from "@/Components/Schedule1";
import Schedule2 from "@/Components/Schedule2";
import Schedule3 from "@/Components/Schedule3";
import Schedule5 from "@/Components/Schedule5";
import Schedule6 from "@/Components/Schedule6";
import Schedule7 from "@/Components/Schedule7";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Schedule1 />
      <Schedule2 />
      <Schedule3 />
      <Schedule5 />
      <Schedule6 />
      <Schedule7 />
    </>
  );
}
