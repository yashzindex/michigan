import React from "react";
interface ProgressbarProps {
  currentStep: number;
  totalSteps: number;
}
const Progressbar: React.FC<ProgressbarProps> = ({
  currentStep,
  totalSteps,
}) => {
  const progress = (currentStep / totalSteps) * 100;

  return (
    <>
      <div className="progress-bar">
        <div className="container">
          <div className="w-full bg-[#EBF6FA] rounded-full h-2.5 mt-4">
            <div
              className="bg-orange h-2.5 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Progressbar;
