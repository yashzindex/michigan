import React from "react";
import Image from "next/image";
import minus from "../../../public/img/minus.svg";
import cross from "../../../public/img/cross.svg";
import Link from "next/link";
import Header from "@/Components/Shared/Header";
import Progressbar from "@/Components/Shared/Progressbar";
import Continue from "@/Components/Buttons/Continue";

interface Schedule5Props {
  nextStep: () => void;
  previousStep: () => void;
  setCurrentStep: any;
}
const Schedule5: React.FC<Schedule5Props> = ({
  nextStep,
  previousStep,
  setCurrentStep,
}) => {
  return (
    <>
      <div className="relative py-5">
        <div className="container">
          <Header previousStep={previousStep} />
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
              <Image src={minus} alt="minus" width={30} height={30} />
              <span className="ml-2 text-blue text-2xl font-normal">
                Sleep apnea
              </span>
            </div>
            <div className="inline-flex mt-2 w-fit text-start">
              <Image src={minus} alt="minus" width={30} height={30} />
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
              <Image src={cross} alt="minus" width={30} height={30} />
              <span className="ml-2 text-blue text-2xl font-normal">
                Bipolar disorder
              </span>
            </div>
            <div className="inline-flex mt-2 w-fit text-start">
              <Image src={cross} alt="minus" width={30} height={30} />
              <span className="ml-2 text-blue text-2xl font-normal">
                Substance use abuse
              </span>
            </div>
          </div>
          <div className="mt-10 text-center">
            <Continue onClick={nextStep} />
          </div>
          <Link href="/Schedule6B">
            <p className="text-center mt-[22px] text-lg font-medium text-blue underline hover:opacity-[0.7]">
              No, I don’t want treatment
            </p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Schedule5;
