import React from "react";
import Schedule1 from "@/Components/Schedule1";
import Schedule2 from "@/Components/Schedule2";
import Schedule3 from "@/Components/Schedule3";
import Schedule5 from "@/Components/Schedule5";
import Schedule6 from "@/Components/Schedule6";
import Schedule7 from "@/Components/Schedule7";
import Schedule6B from "@/pages/Schedule6B";
import StepWizard from "react-step-wizard";
import { useState } from "react";
import Image from "next/image";
import rightarrow from "/public/img/rightarrow.svg";
import Schedule4 from "@/Components/Schedule4";
import Schedule8 from "@/Components/Schedule8";

interface stepProps {
  nextStep: () => void;
  previousStep: () => void;
  goToStep: () => void;
}
const Main = () => {
  const totalSteps = 8;
  const startingStep = 3;
  const [currentStep, setCurrentStep] = useState(1);
  const [progress, setProgress] = useState(
    ((startingStep - 1) / totalSteps) * 100
  );
  const nextStep = () => {
    setCurrentStep(currentStep + 1);
    setProgress(((currentStep - 1) / totalSteps) * 100);
  };
  const previousStep = () => {
    setCurrentStep(currentStep - 1);
    setProgress(((currentStep - 2) / totalSteps) * 100);
  };
  const goToStep = () => {
    setCurrentStep(currentStep);
  };

  return (
    <>
      <StepWizard initialStep={1}>
        <Schedule1 nextStep={nextStep} />
        <Schedule2 nextStep={nextStep} previousStep={previousStep} />
        <Schedule3 nextStep={nextStep} previousStep={previousStep} />
        <Schedule4 nextStep={nextStep} previousStep={previousStep} />
        <Schedule5
          nextStep={nextStep}
          previousStep={previousStep}
          goToStep={goToStep}
          setCurrentStep={setCurrentStep}
        />
        <Schedule6 nextStep={nextStep} previousStep={previousStep} />
        <Schedule7 nextStep={nextStep} previousStep={previousStep} />
        <Schedule8 nextStep={nextStep} previousStep={previousStep} />
      </StepWizard>
    </>
  );
};

export default Main;
