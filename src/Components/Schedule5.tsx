import React from "react";
import Image from "next/image";
import rightarrow from "../../public/img/rightarrow.svg";
import Link from "next/link";
import Header from "@/Components/Header";

interface Schedule5Props {
  nextStep: () => void;
  previousStep: () => void;
  goToStep: () => void;
  setCurrentStep: any;
}
const Schedule5: React.FC<Schedule5Props> = ({
  nextStep,
  previousStep,
  setCurrentStep,
}) => {
  const goToStep = ({ arg }: any) => {
    setCurrentStep(arg);
    console.log("arg");
  };
  return (
    <>
      <div className="relative py-5">
        <div className="container">
          <Header previousStep={previousStep} />
          {/* <div className="w-full bg-[#EBF6FA] rounded-full h-2.5 mt-4">
            <div
              className="bg-orange h-2.5 rounded-full"
              style={{ width: "45%" }}
            ></div>
          </div> */}
          <h1 className="text-blue text-[25px] font-semibold text-center mt-8">
            Medical Disclaimer
          </h1>
          <p className="text-start md:text-center text-blue text-2xl font-normal mt-[21px]">
            Sleep therapy via CBT-I is an effective treatment for insomnia, but
            is <span className="underline capitalize">NOT</span> going to treat
            the following conditions:
          </p>
          <div className="relative w-fit flex flex-col sm:mx-auto mt-6">
            <div className="inline-flex mt-2 w-fit text-start">
              <Image src="/img/mines.png" alt="minus" width={37} height={41} />
              <span className="ml-2 text-blue text-2xl font-normal">
                Sleep apnea
              </span>
            </div>
            <div className="inline-flex mt-2 w-fit text-start">
              <Image src="/img/mines.png" alt="minus" width={37} height={41} />
              <span className="ml-2 text-blue text-2xl font-normal">
                Restless leg syndrome
              </span>
            </div>
          </div>
          <p className="text-start md:text-center text-blue text-2xl font-normal mt-[21px]">
            CBT-I is also <span className="underline capitalize">NOT</span>
            suitable for clients with the following conditions:
          </p>
          <div className="relative w-fit flex flex-col sm:mx-auto mt-[21px]">
            <div className="inline-flex mt-2 w-fit text-start">
              <Image src="/img/cancle.png" alt="minus" width={37} height={41} />
              <span className="ml-2 text-blue text-2xl font-normal">
                Bipolar disorder
              </span>
            </div>
            <div className="inline-flex mt-2 w-fit text-start">
              <Image src="/img/cancle.png" alt="minus" width={37} height={41} />
              <span className="ml-2 text-blue text-2xl font-normal">
                Substance use abuse
              </span>
            </div>
          </div>
          <div className="mt-10 text-center">
            <button
              className="mx-auto flex justify-center items-center rounded-[20px] bg-orange hover:opacity-[0.7] duration-500 text-white text-[22px] font-bold leading-normal py-4 text-center w-full max-w-[328px]"
              onClick={nextStep}
            >
              CONTINUE
              <Image
                src={rightarrow}
                alt="rightarrow"
                width={37}
                height={41}
                className="ml-2"
              />
            </button>
          </div>
          <Link href="/Schedule6B">
            <p className="text-center mt-[22px] text-lg font-medium text-blue underline">
              No, I don’t want treatment
            </p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Schedule5;
