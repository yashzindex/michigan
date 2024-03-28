import React from "react";
import Image from "next/image";
import rightarrow from "../../public/img/rightarrow.svg";
import Header from "@/Components/Header";
import Progressbar from "@/Components/Progressbar";

interface Schedule6Props {
  nextStep: () => void;
  previousStep: () => void;
}
const treatmentOptions = [
  {
    text: "Fall asleep faster",
    imageSrc: "/img/right.png",
    width: 40,
    height: 40,
  },
  {
    text: "Stay asleep longer",
    imageSrc: "/img/right.png",
    width: 40,
    height: 40,
  },
  {
    text: "Get more deep sleep",
    imageSrc: "/img/right.png",
    width: 40,
    height: 40,
  },
  {
    text: "Sleep well consistently",
    imageSrc: "/img/right.png",
    width: 40,
    height: 40,
  },
];

const Schedule6: React.FC<Schedule6Props> = ({ nextStep, previousStep }) => {
  return (
    <>
      <div className="relative py-5">
        <div className="container">
          <Header previousStep={previousStep} />
          <h1 className="text-start sm:text-center text-blue text-2xl font-semibold mt-7">
            Our clinicians can help you:
          </h1>
          <div className="relative flex flex-col sm:mx-auto w-fit mt-[27px]">
            {treatmentOptions.map(({ text, imageSrc, width, height }) => (
              <p
                key={text}
                className="text-blue text-start text-2xl font-medium leading-normal inline-flex w-[300px]  items-center mb-3"
              >
                <Image
                  src={imageSrc}
                  alt="arrow"
                  width={width}
                  height={height}
                  className="mr-1"
                />
                {text}
              </p>
            ))}
          </div>
          <p className="text-start sm:text-center text-slate text-[22px] font-medium mt-8">
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
            <button
              className="mx-auto flex justify-center items-center rounded-[20px] bg-orange hover:opacity-[0.7] duration-500 text-white text-[22px] font-bold leading-normal py-4 text-center w-full max-w-[328px]"
              onClick={nextStep}
            >
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
