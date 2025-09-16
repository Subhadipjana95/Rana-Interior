import React from 'react'

const ProcessStep = ({ step }) => {
  return (
    <div className="process-step flex flex-col items-center text-center w-[120px] mx-2.5">
      <div className="step-icon w-[100px] h-[100px] rounded-full mb-4 flex justify-center items-center transition-transform duration-300 hover:scale-110">
        <img 
          src={step.icon}
          alt={step.alt}
          className="w-full h-full"
        />
      </div>
      <p className="step-title text-base font-medium leading-tight text-[var(--color-text)] max-w-[120px]">
        {step.title}
      </p>
    </div>
  )
}

export default ProcessStep
