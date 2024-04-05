import React from "react";
import Image from "next/image";
import check from "../../../public/img/check.svg";
import Header from "@/Components/Shared/Header";
import Continue from "@/Components/Buttons/Continue";

interface Schedule6Props {
  nextStep: () => void;
  previousStep: () => void;
}
const treatmentOptions = [
  {
    text: "Fall asleep faster",
    imageSrc: "/img/right.png",
    width: 33,
    height: 33,
  },
  {
    text: "Stay asleep longer",
    imageSrc: "/img/right.png",
    width: 33,
    height: 33,
  },
  {
    text: "Get more deep sleep",
    imageSrc: "/img/right.png",
    width: 33,
    height: 33,
  },
  {
    text: "Sleep well consistently",
    imageSrc: "/img/right.png",
    width: 33,
    height: 33,
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
                className="text-blue text-start text-2xl font-medium leading-normal inline-flex w-[310px] items-center mb-3"
              >
                <Image
                  src={check}
                  alt="arrow"
                  width={width}
                  height={height}
                  className="mr-2"
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
            <Continue onClick={nextStep} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Schedule6;
