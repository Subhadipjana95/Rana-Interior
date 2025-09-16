import React from 'react'
import ProcessStep from './ProcessStep'
import ProcessConnector from './ProcessConnector'
import { processSteps } from '../data/processSteps'

const ProcessSection = () => {
  return (
    <section id="Process" className="how-it-works p-0 text-black bg-[var(--color-background)]">
      <div className="container py-[60px] px-5 flex justify-between items-start gap-10">
        <h1 className="text-[3rem] pl-5 mt-[23px] leading-none text-left flex-none w-[300px] font-bold">
          How We Create
        </h1>
        
        <div className="process-steps flex justify-start items-center flex-wrap max-w-[920px] -mt-2.5">
          {processSteps.map((step, index) => (
            <React.Fragment key={index}>
              <ProcessStep step={step} />
              {index < processSteps.length - 1 && <ProcessConnector />}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProcessSection
