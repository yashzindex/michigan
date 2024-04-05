import React from "react";
import Header from "@/Components/Shared/Header";
import Lock from "../../../public/img/Lock.svg";
import Image from "next/image";
import Continue from "../Buttons/Continue";
interface Schedule9Props {
  nextStep: () => void;
  previousStep: () => void;
}
const Schedule9: React.FC<Schedule9Props> = ({ nextStep, previousStep }) => {
  return (
    <div>
      <div className="relative py-5">
        <div className="container">
          <Header previousStep={previousStep} />
          <div className="flex items-center sm:justify-center gap-5 bg-sky py-5 px-[10px] rounded-[20px]">
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
                Your selected appointment
              </h3>
              <p className="text-blue text-lg font-normal">Tue, March 26</p>
              <p className="text-blue text-lg font-normal">
                3:00pm - 3:55pm with
              </p>
              <p className="text-slate text-lg font-medium">Deirdre Conroy</p>
            </div>
          </div>
          <h1 className="text-blue text-2xl font-semibold sm:text-center mt-6">
            Please share more details about what you’re hoping to achieve
          </h1>
          <h4 className="text-xl text-slate font-normal mt-[14px] sm:text-center">
            We share this information directly with your clinician, so please be
            thorough.
          </h4>
          <div className="mt-4">
            <textarea
              rows={6}
              name="Goals"
              id="Goals"
              placeholder="What should your clinician know about you and your goals?"
              className="text-lg font-normal text-slate rounded-[10px] border-[1px] border-slate w-full py-[14px] px-3 focus:outline-none"
            ></textarea>
          </div>
          <div className="mt-10 text-center">
            <Continue onClick={nextStep} />
          </div>
          <p className="flex justify-center items-center text-slate text-xs mt-[17px]">
            <Image
              src={Lock}
              alt="lock"
              width={20}
              height={24}
              className="mr-1"
            />
            All information you shared is secure and confidential.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Schedule9;
