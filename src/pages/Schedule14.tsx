import React from "react";
import Image from "next/image";
import Link from "next/link";
const Schedule14 = () => {
  return (
    <>
      <div className="relative">
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
          <h1 className="text-blue text-2xl font-semibold text-center mt-[-32px]">
            Your appointment has been confirmed
          </h1>
          <p className="text-blue text-xl font-normal max-sm:px-5 sm:text-center mt-7">
            You’ll receive an email and SMS confirmation very shortly
          </p>
          <div className="flex items-center sm:justify-center gap-5 bg-sky py-5 px-[10px] rounded-[20px] mt-7">
            <div className="rounded-full overflow-hidden h-[100px] w-[100px]">
              <Image
                src="/img/lady.png"
                alt="lady"
                className="w-[100px] h-[100px] max-w-full rounded-full"
                width={100}
                height={100}
              />
            </div>
            <div className="content">
              <h3 className="text-blue text-[15px] font-semibold">
                Your appointment
              </h3>
              <p className="text-blue text-lg font-normal">Tue, March 26</p>
              <p className="text-blue text-lg font-normal">
                3:00pm - 3:55pm with
              </p>
              <p className="text-slate text-lg font-medium">Deirdre Conroy</p>
            </div>
          </div>
          <div className="mt-[54px] text-slate text-xl font-normal sm:text-center">
            Feel free to call us at <br /> (734) 584-0133 or email us at <br />
            clinic@michigansleepcenter.org <br /> if you have any questions.
          </div>
          <div className="mt-[145px] text-center mb-[46px]">
            <Link href="/">
              <button className="mx-auto flex justify-center items-center rounded-[20px] disabled:opacity-[0.3] bg-orange hover:opacity-[0.7] duration-500 text-white text-[22px] font-bold leading-normal py-[22px] text-center w-full max-w-[328px] mt-11">
                BACK TO HOMEPAGE
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Schedule14;
