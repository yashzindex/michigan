import React, { useState } from "react";
import Header from "@/Components/Shared/Header";
import rightarrow from "../../public/img/rightarrow.svg";
import Image from "next/image";
import Lock from "../../../public/img/Lock.svg";
import Continue from "@/Components/Buttons/Continue";

interface Schedule10Props {
  nextStep: () => void;
  previousStep: () => void;
}
const Schedule10: React.FC<Schedule10Props> = ({ nextStep, previousStep }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [detailsEntered, setDetailsEntered] = useState(false);
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setter: React.Dispatch<React.SetStateAction<string>>,
    setError: React.Dispatch<React.SetStateAction<string>>
  ) => {
    const { value, name } = e.target;
    setter(value);
    // Validate the field
    if (name === "firstName" && value.trim() === "") {
      setError("First name is required");
      // setDetailsEntered(false); // Set detailsEntered to false if there's an error
    } else if (name === "lastName" && value.trim() === "") {
      setError("Last name is required");
      // setDetailsEntered(false); // Set detailsEntered to false if there's an error
    } else if (name === "email" && !/^\S+@\S+\.\S+$/.test(value)) {
      setError("Please enter a valid email address");
      // setDetailsEntered(false); // Set detailsEntered to false if there's an error
    } else if (name === "phoneNumber" && !/^\d{10}$/.test(value)) {
      setError("Please enter a valid 10-digit phone number");
      setDetailsEntered(false); // Set detailsEntered to false if there's an error
    } else {
      setError("");
      setDetailsEntered(true); // Set detailsEntered to true if there are no errors
    }
  };

  const handleSubmit = () => {
    // Check if all necessary fields are filled
    if (
      firstName !== "" &&
      lastName !== "" &&
      email !== "" &&
      phoneNumber !== "" &&
      firstNameError === "" &&
      lastNameError === "" &&
      emailError === "" &&
      phoneNumberError === ""
    ) {
      // setDetailsEntered(true);
      nextStep();
    } else {
      setDetailsEntered(false);
    }
  };
  return (
    <>
      <div className="relative py-5">
        <div className="container">
          <Header previousStep={previousStep} />
          <h1 className="text-blue text-[25px] font-semibold text-center mt-8">
            Confirming your appointment
          </h1>
          <form action="">
            <div className="form mt-10 flex flex-col gap-4">
              <div className="flex flex-col">
                <label
                  htmlFor="First name"
                  className="text-slate text-lg font-bold"
                >
                  First name
                </label>
                <input
                  type="text"
                  className="text-slate text-lg font-normal p-[15.5px] mt-2 border-[1px] border-[#5E616C] focus:outline-none rounded-[10px]"
                  value={firstName}
                  name="firstName"
                  onChange={(e) =>
                    handleInputChange(e, setFirstName, setFirstNameError)
                  }
                />
                {firstNameError && (
                  <p className="text-red-500">{firstNameError}</p>
                )}
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="Last name"
                  className="text-slate text-lg font-bold"
                >
                  Last name
                </label>
                <input
                  type="text"
                  className="text-slate text-lg font-normal p-[15.5px] mt-2 border-[1px] border-[#5E616C] focus:outline-none rounded-[10px]"
                  value={lastName}
                  name="lastName"
                  onChange={(e) =>
                    handleInputChange(e, setLastName, setLastNameError)
                  }
                />
                {lastNameError && (
                  <p className="text-red-500">{lastNameError}</p>
                )}
              </div>
              <div className="flex flex-col">
                <label htmlFor="Email" className="text-slate text-lg font-bold">
                  Email
                </label>
                <input
                  type="email"
                  className="text-slate text-lg font-normal p-[15.5px] mt-2 border-[1px] border-[#5E616C] focus:outline-none rounded-[10px]"
                  value={email}
                  name="email"
                  onChange={(e) =>
                    handleInputChange(e, setEmail, setEmailError)
                  }
                />
                {emailError && <p className="text-red-500">{emailError}</p>}
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="Phone number"
                  className="text-slate text-lg font-bold"
                >
                  Phone number
                </label>
                <input
                  type="number"
                  className="text-slate text-lg font-normal p-[15.5px] mt-2 border-[1px] border-[#5E616C] focus:outline-none rounded-[10px]"
                  value={phoneNumber}
                  name="phoneNumber"
                  onChange={(e) =>
                    handleInputChange(e, setPhoneNumber, setPhoneNumberError)
                  }
                />
                {phoneNumberError && (
                  <p className="text-red-500">{phoneNumberError}</p>
                )}
              </div>
            </div>
          </form>
          <div className="mt-10 text-center">
            <Continue onClick={handleSubmit} disabled={!detailsEntered} />
          </div>
          <p className="flex justify-center items-center text-slate text-xs mt-10">
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
    </>
  );
};

export default Schedule10;
