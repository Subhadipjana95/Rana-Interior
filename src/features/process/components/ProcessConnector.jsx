import React from 'react'

const ProcessConnector = () => {
  return (
    <div 
      className="step-connector w-[50px] h-0.5 mr-1.5 mb-[50px] self-center"
      style={{
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='100' height='2' xmlns='http://www.w3.org/2000/svg'%3E%3Cline x1='0' y1='1' x2='100' y2='1' stroke='%23ccc' stroke-width='2' stroke-dasharray='5,5'/%3E%3C/svg%3E\")"
      }}
    />
  )
}

export default ProcessConnector
