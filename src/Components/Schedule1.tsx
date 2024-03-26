import React from "react";
import Image from "next/image";

const Schedule1 = () => {
  const imagePaths = [
    "/img/i1.png",
    "/img/i2.png",
    "/img/i3.png",
    "/img/i4.png",
    "/img/i5.png",
    "/img/i6.png",
  ];
  return (
    <>
      <div className="relative py-5">
        <div className="container">
          <div className="mx-auto w-fit max-w-[192px]">
            <Image
              src="/img/logo.png"
              alt="avs"
              width={192}
              height={74}
              className="object-cover"
            />
          </div>
          <h1 className="text-center text-blue text-4xl font-semibold leading-normal my-6">
            Break the insomnia cycle tonight
          </h1>
          <p className="text-start md:text-center text-[#5E616C] text-2xl font-normal leading-normal mt-[54px]">
            Book a telehealth appointment with a sleep clinician
            <span className="text-[#5E616C] text-2xl font-medium leading-normal underline">
              covered by your insurance
            </span>
          </p>
          <div className="mt-10 text-center">
            <button className="rounded-[100px] bg-orange hover:opacity-[0.7] duration-500 text-white text-[22px] font-extrabold leading-normal py-4 text-center w-full max-w-[328px]">
              BOOK ONLINE
            </button>
          </div>
          <p className="text-center text-blue text-xl font-medium mt-7">
            or call (734) 584-0133 to <br /> book an appointment
          </p>
          <p className="text-center text-slate text-lg font-normal mt-[47px]">
            We accept most insurance plans
          </p>
          <div className="grid grid-cols-3 gap-3 mt-10">
            {imagePaths.map((path, index) => (
              <div key={index} className="">
                <Image
                  src={path}
                  alt={`Image ${index + 1}`}
                  width={90}
                  height={46}
                  className="object-cover mx-auto"
                />
              </div>
            ))}
          </div>
          <p className="text-center text-slate text-lg font-normal mt-6">
            + more
          </p>
        </div>
      </div>
    </>
  );
};

export default Schedule1;
