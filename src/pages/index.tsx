
import { Inter } from "next/font/google";
import Schedule1 from "@/pages/Schedule1";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Schedule1 />
    </>
  );
}
