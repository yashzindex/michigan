import React, { useState } from "react";
import Image from "next/image";
import Header from "@/Components/Header";
import Progressbar from "@/Components/Progressbar";
import Link from "next/link";
interface Schedule3Props {
  nextStep: () => void;
  previousStep: () => void;
}
const sleepIssues = [
  { id: "cantFallAsleep", label: "Can’t fall asleep", name: "cantFallAsleep" },
  { id: "cantStayAsleep", label: "Can’t stay asleep", name: "cantStayAsleep" },
  {
    id: "wakeUpMultipleTimes",
    label: "Wake up multiple times",
    name: "wakeUpMultipleTimes",
  },
  { id: "stressfulDreams", label: "Stressful dreams", name: "stressfulDreams" },
  { id: "noDeepSleep", label: "No deep sleep", name: "noDeepSleep" },
];

const Schedule3: React.FC<Schedule3Props> = ({ nextStep, previousStep }) => {
  const [selections, setSelections] = useState<{ [key: string]: boolean }>({
    cantFallAsleep: false,
    cantStayAsleep: false,
    wakeUpMultipleTimes: false,
    stressfulDreams: false,
    noDeepSleep: false,
  });

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setSelections((prevSelections) => ({
      ...prevSelections,
      [name]: checked,
    }));
  };

  const isAnyCheckboxSelected = () => {
    return Object.values(selections).some((value) => value);
  };
  return (
    <>
      <div className="relative py-5">
        <div className="container">
          <div className="relative">
            <div className="mx-auto w-fit max-w-[192px] main-logo">
              <Image
                src="/img/logo.png"
                alt="avs"
                width={192}
                height={74}
                className="object-cover"
              />
            </div>
            <Link href="/Schedule2">
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
          <h1 className="text-center text-blue text-[25px] font-semibold mt-[31px]">
            What sleep issues are you currently experiencing?
          </h1>
          <p className="text-slate text-xl font-normal text-center mt-3">
            Select all that apply
          </p>
          <div className="relative mt-6">
            {sleepIssues.map((issue) => (
              <div key={issue.id} className="my-3 relative">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id={issue.id}
                    name={issue.name}
                    checked={selections[issue.name]}
                    onChange={handleCheckboxChange}
                  />
                  <label className="form-check-label" htmlFor={issue.id}>
                    {issue.label}
                  </label>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <button
              className="rounded-[20px] disabled:opacity-[0.3] bg-orange hover:opacity-[0.7] duration-500 text-white text-[22px] font-bold leading-normal py-4 text-center w-full max-w-[328px]"
              onClick={nextStep}
              disabled={!isAnyCheckboxSelected()}
            >
              NEXT
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Schedule3;
