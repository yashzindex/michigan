import React, { useState } from "react";
import Image from "next/image";
import Header from "@/Components/Header";

interface Schedule4Props {
  nextStep: () => void;
  previousStep: () => void;
}
const sleepOptions = [
  { id: "lessThan1Month", label: "Less than 1 month", value: "lessThan1Month" },
  { id: "1-3months", label: "1 - 3 months", value: "1-3months" },
  { id: "3-6months", label: "3 - 6 months", value: "3-6months" },
  { id: "6-12months", label: "6 - 12 months", value: "6-12months" },
  {
    id: "Morethan12months",
    label: "More than 12 months",
    value: "Morethan12months",
  },
];
const Schedule4: React.FC<Schedule4Props> = ({ nextStep, previousStep }) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (option: string) => {
    setSelectedOption(option);
  };
  return (
    <>
      <div className="relative py-5">
        <div className="container">
          <Header previousStep={previousStep} />
          {/* <div className="w-full bg-[#EBF6FA] rounded-full h-2.5 mt-4">
            <div
              className="bg-orange h-2.5 rounded-full"
              style={{ width: "45%" }}
            ></div>
          </div> */}
          <h1 className="text-center text-blue text-[25px] font-semibold mt-6">
            How long have you been experiencing sleep issues?
          </h1>
          <div className="mt-8">
            {sleepOptions.map((option) => (
              <div key={option.id} className="my-3 relative">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id={option.id}
                    value={option.value}
                    checked={selectedOption === option.value}
                    onChange={() => handleOptionChange(option.value)}
                  />
                  <label className="form-check-label" htmlFor={option.id}>
                    {option.label}
                  </label>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <button
              className="rounded-[20px] disabled:opacity-[0.3] bg-orange hover:opacity-[0.7] duration-500 text-white text-[22px] font-bold leading-normal py-4 text-center w-full max-w-[328px]"
              onClick={nextStep}
              disabled={!selectedOption}
            >
              NEXT
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Schedule4;
