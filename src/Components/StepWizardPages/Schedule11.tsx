import React, { useState } from "react";
import Header from "@/Components/Shared/Header";
import Lock from "../../../public/img/Lock.svg";
import rightarrow from "../../../public/img/rightarrow.svg";
import Image from "next/image";
import SelfPay from "@/Components/Buttons/SelfPay";
import Continue from "../Buttons/Continue";
import Link from "next/link";
import animation from "@/../../public/img/animation.svg";
import down from "@/../../public/img/down.svg";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
interface Schedule11Props {
  nextStep: () => void;
  previousStep: () => void;
}

const Schedule11: React.FC<Schedule11Props> = ({ nextStep, previousStep }) => {
  const [insuranceProvider, setInsuranceProvider] = useState("");
  const [insuranceMemberID, setInsuranceMemberID] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState<Date | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  // Function to handle the change in the select input
  const handleInsuranceProviderChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setInsuranceProvider(e.target.value);
  };

  // Function to handle the change in the insurance member ID input
  const handleInsuranceMemberIDChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setInsuranceMemberID(e.target.value);
  };

  // Function to handle the change in the date of birth input
  const handleDateOfBirthChange = (date: Date | null) => { // Add type annotation for date parameter
    setDateOfBirth(date);
  };

  // Function to check if the form is valid
  const isFormValid = () => {
    return (
      insuranceProvider !== "" &&
      insuranceMemberID.trim() !== "" &&
      dateOfBirth !== null // Check if dateOfBirth is not null
    );
  };
  const handleContinue = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      nextStep();
    }, 2000);
  };
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    const year = date.getFullYear().toString().slice(-2);
    return `${month}/${day}/${year}`;
  };
  return (
    <>
      {isLoading ? (
        <Loder />
      ) : (
        <div className="relative py-5">
          <div className="container">
            <Header previousStep={previousStep} />
            <h1 className="text-blue text-2xl font-semibold text-center mt-8">
              Checking your coverage
            </h1>
            <form action="">
              <div className="relative mt-9">
                <label className="text-slate text-lg font-bold text-start  sm:text-center">
                  Insurance Provider
                </label>
                <div className="relative">
                  <select
                    value={insuranceProvider}
                    onChange={handleInsuranceProviderChange}
                    className="block relative appearance-none w-full border border-[#5E616C] text-slate py-5 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:bg-white focus:border-[#5E616C] mt-2"
                  >
                    <option className="text-slate" value="Michigan Medicare">
                      Michigan Medicare
                    </option>
                    <option className="text-slate" value="With options">
                      With options
                    </option>
                  </select>
                  <Image
                    src="/img/down.svg"
                    alt="down"
                    width={20}
                    height={20}
                    className="absolute right-4 top-[50%]  translate-y-[-50%] "
                  />
                </div>
              </div>
              <div className="flex flex-col mt-5">
                <label
                  htmlFor="Insurance Member ID"
                  className="text-slate text-lg font-bold"
                >
                  Insurance Member ID
                </label>
                <input
                  type="text"
                  value={insuranceMemberID}
                  onChange={handleInsuranceMemberIDChange}
                  className="text-slate text-lg font-normal p-[15.5px] mt-2 border-[1px] border-[#5E616C] focus:outline-none rounded-[10px]"
                />
              </div>
              <div className="flex flex-col mt-5">
                <label
                  htmlFor="Date of Birth"
                  className="text-slate text-lg font-bold"
                >
                  Date of Birth
                </label>
                <DatePicker
                  selected={dateOfBirth}
                  onChange={handleDateOfBirthChange}
                  maxDate={new Date()}
                  placeholderText="MM/dd/yyyy"
                  dateFormat="MM/dd/yyyy" // Set the desired date format
                  className="w-full text-slate text-lg font-normal p-[15.5px] mt-2 border-[1px] border-[#5E616C] focus:outline-none rounded-[10px]"
                />
              </div>
            </form>
            {/*_____ continue button _____*/}
            <div className="mt-10 text-center">
              <button
                className="mx-auto flex justify-center items-center rounded-[20px] disabled:opacity-[0.3] bg-orange hover:opacity-[0.7] duration-500 text-white text-[22px] font-bold 
               leading-normal py-[22px] text-center w-full max-w-[328px] mt-5"
                onClick={handleContinue} // Call handleContinue instead of nextStep directly
                disabled={!isFormValid()}
              >
                CONTINUE
                <Image
                  src={rightarrow}
                  alt="rightarrow"
                  width={33}
                  height={33}
                  className="ml-2"
                />
              </button>
            </div>
            <div className="flex items-center my-7">
              <hr className="flex-grow h-[3px] bg-[#5e616c7f] mr-4" />
              <span className="text-slate text-2xl font-semibold text-center">
                OR
              </span>
              <hr className="flex-grow h-[3px] bg-[#5e616c7f] ml-4" />
            </div>
            <div className="text-center">
              <SelfPay />
            </div>
            <p className="flex justify-center items-center text-slate text-xs mt-[54px]">
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
      )}
    </>
  );
};
const Loder = () => {
  return (
    <>
      <div className="relative py-5">
        <div className="container">
          <Link href="/">
            <div className="mx-auto w-fit max-w-[192px] main-logo">
              <Image
                src="/img/logo.png"
                alt="avs"
                width={192}
                height={74}
                className="object-cover"
              />
            </div>
          </Link>
          <h1 className="text-blue text-2xl font-semibold text-center mt-[60px] px-10 sm:px-0">
            Calculating your estimated cost
          </h1>
          <div className="relative h-fit w-fit mt-[85px] mx-auto">
            <div className="bg-transparent rounded-full w-[200px] h-[200px] border-[20px] border-sky"></div>
            <div className="absolute top-0 right-0 animate-spin">
              <Image src={animation} alt="animation" height={200} width={200} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Schedule11;
