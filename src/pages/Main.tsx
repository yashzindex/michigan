import React, { useEffect } from "react";
import Schedule1 from "@/pages/Schedule1";
import Schedule2 from "@/pages/Schedule2";
import Schedule3 from "@/Components/Schedule3";
import Schedule5 from "@/Components/Schedule5";
import Schedule6 from "@/Components/Schedule6";
import Schedule7 from "@/Components/Schedule7";
import Schedule6B from "@/pages/Schedule6B";
import { useState } from "react";
import Schedule4 from "@/Components/Schedule4";
import Schedule8 from "@/Components/Schedule8";
import StepWizard from "react-step-wizard";
import Progressbar from "@/Components/Progressbar";
interface stepProps {
  nextStep: () => void;
  previousStep: () => void;
  goToStep: () => void;
}
const Main = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 6;
  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };
  const previousStep = () => {
    setCurrentStep(currentStep - 1);
  };
  const goToStep = () => {
    setCurrentStep(currentStep);
  };
  return (
    <>
      <StepWizard
        initialStep={1}
        nav={<Progressbar currentStep={currentStep} totalSteps={totalSteps} />}
      >
        <Schedule3 nextStep={nextStep} previousStep={previousStep} />
        <Schedule4 nextStep={nextStep} previousStep={previousStep} />
        <Schedule5
          nextStep={nextStep}
          previousStep={previousStep}
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
