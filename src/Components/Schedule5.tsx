import React from "react";
import Image from "next/image";
import rightarrow from "../../public/img/rightarrow.svg";
const Schedule5 = () => {
  return (
    <>
      <div className="relative py-5">
        <div className="container">
          <div className="relative mt-6">
            <div className="mx-auto w-fit max-w-[192px]">
              <Image
                src="/img/logo.png"
                alt="avs"
                width={192}
                height={74}
                className="object-cover"
              />
            </div>
            <div className="absolute top-[17px] left-0">
              <div className="bg-sky h-10 w-10 rounded-full flex items-center justify-center">
                <Image
                  src="/img/leftarrow.png"
                  alt="arrow"
                  width={18}
                  height={12}
                />
              </div>
            </div>
          </div>
          <h1 className="text-blue text-[25px] font-semibold text-center mt-8">
            Medical Disclaimer
          </h1>
          <p className="text-start md:text-center text-blue text-2xl font-normal mt-[21px]">
            Sleep therapy via CBT-I is an effective treatment for insomnia, but
            is <span className="underline capitalize">NOT</span> going to treat
            the following conditions:
          </p>
          <div className="relative flex flex-col justify-start sm:justify-center mt-6">
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
          <div className="relative flex flex-col mt-[21px]">
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
            <button className="mx-auto flex justify-center items-center rounded-[20px] bg-orange hover:opacity-[0.7] duration-500 text-white text-[22px] font-bold leading-normal py-4 text-center w-full max-w-full">
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
          <p className="text-center mt-[22px] text-lg font-medium text-blue underline">
            No, I don’t want treatment
          </p>
        </div>
      </div>
    </>
  );
};

export default Schedule5;
