import React, { useState } from "react";
import Image from "next/image";
import Header from "@/Components/Shared/Header";
import Link from "next/link";
interface Person {
  id: number;
  name: string;
  role: string;
  imagePath: string;
}

const Schedule2 = () => {
  const fakeData: Person[] = [
    { id: 1, name: "Deidre Conroy, ", role: "PhD", imagePath: "/img/s21.png" },
    { id: 2, name: "Arthur Smith,", role: "LCSW", imagePath: "/img/s22.png" },
    { id: 3, name: "Chris Kobesko,", role: "LPC", imagePath: "/img/s23.png" },
    { id: 4, name: "Deidre Conroy, ", role: "PhD", imagePath: "/img/s21.png" },
    { id: 5, name: "Arthur Smith,", role: "LCSW", imagePath: "/img/s22.png" },
    { id: 6, name: "Chris Kobesko,", role: "LPC", imagePath: "/img/s23.png" },
  ];
  const [showAllClinicians, setShowAllClinicians] = useState(false);

  const toggleClinicians = () => {
    setShowAllClinicians(!showAllClinicians);
  };
  return (
    <>
      <div className="relative py-5">
        <div className="container">
          <div className="relative">
            <Link href="/">
              <div className="mx-auto w-fit max-w-[192px] main-logo cursor-pointer">
                <Image
                  src="/img/logo.png"
                  alt="avs"
                  width={192}
                  height={74}
                  className="object-cover"
                />
              </div>
            </Link>
            <Link href="/">
              <div className="absolute top-[17px] left-0 cursor-pointer">
                <div className="bg-sky h-10 w-10 rounded-full flex items-center justify-center">
                  <Image
                    src="/img/leftarrow.png"
                    alt="arrow"
                    width={18}
                    height={12}
                  />
                </div>
              </div>
            </Link>
          </div>
          <h1 className="text-blue text-3xl font-semibold text-center mt-[-24px]">
            Our sleep clinicians specialize in CBT-I*
          </h1>
          <div className="relative mt-[44px]">
            <div className="grid grid-cols-3 gap-5">
              {showAllClinicians
                ? fakeData.map((person) => (
                    <div
                      key={person.id}
                      className="relative w-fit mx-auto transition-all"
                    >
                      <div className="w-[97px] h-[97px] rounded-full">
                        <Image
                          src={person.imagePath}
                          alt={person.name}
                          width={97}
                          height={97}
                          className="object-cover rounded-full"
                        />
                      </div>
                      <h4 className="text-slate text-[15px] font-normal text-center mt-[10px]">
                        {person.name} <br />
                        {person.role}
                      </h4>
                    </div>
                  ))
                : fakeData.slice(0, 3).map((person) => (
                    <div
                      key={person.id}
                      className="relative w-fit mx-auto transition-all"
                    >
                      <div className="w-[97px] h-[97px] rounded-full">
                        <Image
                          src={person.imagePath}
                          alt={person.name}
                          width={97}
                          height={97}
                          className="object-cover rounded-full"
                        />
                      </div>
                      <h4 className="text-slate text-[15px] font-normal text-center mt-[10px]">
                        {person.name} <br />
                        {person.role}
                      </h4>
                    </div>
                  ))}
            </div>
          </div>
          <p
            className="w-fit mx-auto text-center hover:underline hover:underline-blue text-slate hover:text-blue text-lg font-normal mt-6 cursor-pointer"
            onClick={toggleClinicians}
          >
            {showAllClinicians ? "- less" : "+ more"}
          </p>
          <p className="text-start sm:text-center text-[#5E616C] text-2xl font-normal leading-[28px] mt-[41px]">
            Answer a few questions to see if CBT-I can be effective for your
            condition
          </p>
          <Link href="/Main" className="duration-500">
            <div className="mt-10 text-center">
              <button className="rounded-[20px] bg-orange hover:opacity-[0.7] duration-500 text-white text-[22px] font-extrabold leading-normal py-[22px] text-center w-full max-w-[328px]">
                NEXT
              </button>
            </div>
          </Link>
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
