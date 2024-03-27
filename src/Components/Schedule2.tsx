import React from "react";
import Image from "next/image";
interface Person {
  id: number;
  name: string;
  role: string;
  imagePath: string;
}
interface Schedule2Props {
  nextStep: () => void;
  previousStep: () => void;
}
const Schedule2: React.FC<Schedule2Props> = ({ nextStep, previousStep }) => {
  const fakeData: Person[] = [
    { id: 1, name: "Deidre Conroy, ", role: "PhD", imagePath: "/img/s21.png" },
    { id: 2, name: "Arthur Smith,", role: "LCSW", imagePath: "/img/s22.png" },
    { id: 3, name: "Chris Kobesko,", role: "LPC", imagePath: "/img/s23.png" },
  ];
  return (
    <>
      <div className="relative py-5">
        <div className="container">
          <div className="relative">
            <div className="mx-auto w-fit max-w-[192px]">
              <Image
                src="/img/logo.png"
                alt="avs"
                width={192}
                height={74}
                className="object-cover"
              />
            </div>
            <div className="absolute top-[17px] bottom-auto left-0">
              <div
                className="bg-sky h-10 w-10 rounded-full flex items-center justify-center"
                onClick={previousStep}
              >
                <Image
                  src="/img/leftarrow.png"
                  alt="arrow"
                  width={18}
                  height={12}
                />
              </div>
            </div>
          </div>
          <h1 className="text-blue text-3xl font-semibold text-center mt-6">
            Our sleep clinicians specialize in CBT-I*
          </h1>
          <div className="relative mt-[44px]">
            <div className="grid grid-cols-3 gap-5">
              {fakeData.map((person) => (
                <div key={person.id} className="relative w-fit mx-auto">
                  <div className="w-[97px] h-[97px] rounded-full">
                    <Image
                      src={person.imagePath}
                      alt={person.name}
                      width={97}
                      height={97}
                      className="object-cover rounded-full"
                    />
                  </div>
                  <h4 className="text-slate text-[15px] font-normal">
                    {person.name} <br />
                    {person.role}
                  </h4>
                </div>
              ))}
            </div>
          </div>
          <p className="text-center underline underline-blue text-blue text-lg font-normal mt-6">
            + more
          </p>
          <p className="text-start md:text-center text-[#5E616C] text-2xl font-normal leading-normal mt-[41px]">
            Answer a few questions to see if CBT-I can be effective for your
            condition
          </p>
          <div className="mt-10 text-center">
            <button
              className="rounded-[20px] bg-orange hover:opacity-[0.7] duration-500 text-white text-[22px] font-extrabold leading-normal py-4 text-center w-full max-w-[328px]"
              onClick={nextStep}
            >
              NEXT
            </button>
          </div>
          <p className="text-center text-slate text-sm font-normal mt-10">
            *CBT-I, or Cognitive Behavioral Therapy for Insomnia, is the gold
            standard treatment for adult insomnia recommended by the American
            Academy of Sleep Medicine and American College of Physicians{" "}
          </p>
        </div>
      </div>
    </>
  );
};

export default Schedule2;
