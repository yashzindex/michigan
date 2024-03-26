import React from "react";
import Image from "next/image";
import rightarrow from "../../public/img/rightarrow.svg";
import Lock from "../../public/img/Lock.svg";

const Schedule7 = () => {
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
            Who’s your health insurance provider?
          </h1>
          <div className="relative mt-9">
            <label className="text-slate text-lg font-bold">
              Insurance Provider
            </label>
            <select className="block appearance-none w-full border border-[#5E616C] text-slate py-3 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:bg-white focus:border-[#5E616C] mt-2">
              <option className="text-slate">Michigan Medicare</option>
              <option className="text-slate">With options</option>
            </select>
          </div>
          <div className="mt-10 text-center">
            <button className="mx-auto flex justify-center items-center rounded-[20px] bg-orange hover:opacity-[0.7] duration-500 text-white text-[22px] font-bold leading-normal py-4 text-center w-full max-w-full mt-5">
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
          <div className="my-7">
            <p className="text-slate text-2xl font-semibolds">OR</p>
          </div>
          <div className=" text-center">
            <button className="mx-auto flex justify-center items-center rounded-[20px] bg-orange hover:opacity-[0.7] duration-500 text-white text-[22px] font-bold leading-normal py-4 text-center w-full max-w-full">
              CONTINUE WITH SELF-PAY
              <Image
                src={rightarrow}
                alt="rightarrow"
                width={30}
                height={30}
                className="ml-2"
              />
            </button>
          </div>
          <p className="inline-flex mx-auto text-center text-slate text-xs items-center mt-48">
            <Image
              src={Lock}
              alt="lock"
              width={24}
              height={24}
              className="mr-1"
            />
            All information you shared is secure and confidential.
          </p>
        </div>
      </div>
    </>
  );
};

export default Schedule7;
