import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
const Schedule1 = () => {
  const [showAllImages, setShowAllImages] = useState(false);
  const imagePaths = [
    "/img/i1.png",
    "/img/i2.png",
    "/img/i3.png",
    "/img/i4.png",
    "/img/i5.png",
    "/img/i6.png",
    "/img/i1.png",
    "/img/i2.png",
    "/img/i3.png",
    "/img/i4.png",
    "/img/i5.png",
    "/img/i6.png",
  ];
  const toggleImages = () => {
    setShowAllImages(!showAllImages);
  };
  return (
    <>
      <div className="relative py-5">
        <div className="container">
          <div className="mx-auto w-fit max-w-[192px] main-logo">
            <Image
              src="/img/logo.png"
              alt="avs"
              width={192}
              height={74}
              className="object-cover"
            />
          </div>
          <h1 className="text-center text-blue text-4xl font-semibold leading-[40px] mt-[-24px] mb-6">
            Break the insomnia cycle tonight
          </h1>
          <p className="text-start md:text-center text-[#5E616C] text-2xl font-normal leading-normal mt-[54px]">
            Book a telehealth appointment with a sleep clinician &nbsp;
            <span className="text-[#5E616C] text-2xl font-medium leading-normal underline hover:text-blue duration-500">
              covered by your insurance
            </span>
          </p>
          <div className="mt-12 text-center">
            <Link href="/Schedule2">
              <button className="rounded-[100px] bg-orange hover:opacity-[0.7] duration-500 text-white text-[22px] font-extrabold leading-normal py-4 text-center w-full max-w-[328px]">
                BOOK ONLINE
              </button>
            </Link>
          </div>
          <p className="text-center text-blue text-xl font-medium mt-7">
            or call
            <span className="hover:underline duration-500 mx-1">
              (734) 584-0133
            </span>
            to <br /> book an appointment
          </p>
          <p className="text-center text-slate text-lg font-normal mt-[47px]">
            We accept most insurance plans
          </p>
          <div className="grid grid-cols-3 gap-3 mt-10 items-center">
            {showAllImages
              ? imagePaths.map((path, index) => (
                  <div key={index} className="transition-all">
                    <Image
                      src={path}
                      alt={`Image ${index + 1}`}
                      width={90}
                      height={50}
                      className="object-contain mx-auto w-full max-w-[90px] h-full max-h-[50px]"
                    />
                  </div>
                ))
              : imagePaths.slice(0, 6).map((path, index) => (
                  <div key={index} className="transition-all">
                    <Image
                      src={path}
                      alt={`Image ${index + 1}`}
                      width={90}
                      height={50}
                      className="object-contain mx-auto w-full max-w-[90px] h-full max-h-[50px]"
                    />
                  </div>
                ))}
          </div>
          <p
            className="w-fit mx-auto text-center text-slate text-lg font-normal mt-6 hover:text-blue hover:underline duration-500"
            onClick={toggleImages}
          >
            {showAllImages ? "- less" : "+ more"}
          </p>
        </div>
      </div>
    </>
  );
};

export default Schedule1;
