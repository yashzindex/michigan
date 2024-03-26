import React from "react";
import Image from "next/image";
const Schedule3 = () => {
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
          <h1 className="text-center text-blue text-[25px] font-semibold mt-6">
            What sleep issues are you currently experiencing?
          </h1>
          <p className="text-slate text-xl font-normal text-center mt-3">
            Select all that apply
          </p>
          <div className="relative"></div>
        </div>
      </div>
    </>
  );
};

export default Schedule3;
