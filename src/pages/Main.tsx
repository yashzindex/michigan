import React, { useEffect } from "react";
import Schedule3 from "@/Components/StepWizardPages/Schedule3";
import Schedule5 from "@/Components/StepWizardPages/Schedule5";
import Schedule6 from "@/Components/StepWizardPages/Schedule6";
import Schedule7 from "@/Components/StepWizardPages/Schedule7";
import { useState } from "react";
import Schedule4 from "@/Components/StepWizardPages/Schedule4";
import Schedule8 from "@/Components/StepWizardPages/Schedule8";
import StepWizard from "react-step-wizard";
import Progressbar from "@/Components/Shared/Progressbar";
import Schedule9 from "@/Components/StepWizardPages/Schedule9";
import Schedule10 from "@/Components/StepWizardPages/Schedule10";
import Schedule11 from "@/Components/StepWizardPages/Schedule11";
import Schedule13 from "@/Components/StepWizardPages/Schedule13";
interface stepProps {
  nextStep: () => void;
  previousStep: () => void;
}
const Main = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 10;
  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };
  const previousStep = () => {
    setCurrentStep(currentStep - 1);
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
        <Schedule9 nextStep={nextStep} previousStep={previousStep} />
        <Schedule10 nextStep={nextStep} previousStep={previousStep} />
        <Schedule11 nextStep={nextStep} previousStep={previousStep} />
        <Schedule13 nextStep={nextStep} previousStep={previousStep} />
      </StepWizard>
    </>
  );
};

export default Main;
