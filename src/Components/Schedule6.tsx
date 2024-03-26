import React from "react";
import Image from "next/image";
import rightarrow from "../../public/img/rightarrow.svg";
const Schedule6 = () => {
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
          <h1 className=" text-blue text-2xl font-semibold mt-7">
            Our clinicians can help you:
          </h1>
          <div className="relative flex flex-col mt-[27px]">
            <p className="text-blue text-2xl font-medium leading-normal inline-flex items-center mb-3">
              <Image
                src="/img/right.png"
                alt="arrow"
                width={40}
                height={40}
                className="mr-1"
              />
              Fall asleep faster
            </p>
            <p className="text-blue text-2xl font-medium leading-normal inline-flex items-center mb-3">
              <Image
                src="/img/right.png"
                alt="arrow"
                width={40}
                height={40}
                className="mr-1"
              />
              Stay asleep longer
            </p>
            <p className="text-blue text-2xl font-medium leading-normal inline-flex items-center mb-3">
              <Image
                src="/img/right.png"
                alt="arrow"
                width={40}
                height={40}
                className="mr-1"
              />
              Get more deep sleep
            </p>
            <p className="text-blue text-2xl font-medium leading-normal inline-flex items-center mb-3">
              <Image
                src="/img/right.png"
                alt="arrow"
                width={40}
                height={40}
                className="mr-1"
              />
              Sleep well consistently
            </p>
          </div>
          <p className="text-slate text-[22px] font-medium mt-8">
            Our clinicians specialize in CBT-I, the first-line treatment for
            adult insomnia, endorsed by:
          </p>
          <div className="relative mt-7">
            <Image
              src="/img/ACP.png"
              alt="arrow"
              width={225}
              height={109}
              className="mx-auto"
            />
            <Image
              src="/img/AASM.png"
              alt="arrow"
              width={310}
              height={68}
              className="mx-auto mt-2"
            />
          </div>
          <div className="mt-10 text-center">
            <button className="mx-auto flex justify-center items-center rounded-[20px] bg-orange hover:opacity-[0.7] duration-500 text-white text-[22px] font-bold leading-normal py-4 text-center w-full max-w-[328px]">
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
        </div>
      </div>
    </>
  );
};

export default Schedule6;
