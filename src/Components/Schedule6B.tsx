import React from "react";
import Image from "next/image";
const Schedule6B = () => {
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
          <div className="text-blue text-[25px] font-semibold">
            Unfortunately, we’re unable to help you at this time
          </div>
          <p className="text-slate text-2xl font-medium">
            CBT-I can still be effective for clients with sleep apnea and
            restless leg syndrome, but it does not treat these conditions. CBT-I
            is also not indicated for clients with bipolar disorder or substance
            use abuse. Please consult your primary care provider for other
            treatment options.
          </p>
        </div>
      </div>
    </>
  );
};

export default Schedule6B;
