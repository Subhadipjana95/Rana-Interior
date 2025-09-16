import React from 'react'

const SkillItem = ({ skill }) => {
  return (
    <div className="skill-item flex flex-col items-start justify-start w-[22vw] min-w-[250px] min-h-[190px] p-[1.5vw] border border-gray-300 shadow-lg rounded-[20px] gap-[5px] flex-1 hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-base font-semibold m-0 text-black uppercase relative inline-block w-fit after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[1.5px] after:bg-current after:transition-[width] after:duration-300 hover:after:w-full">
        {skill.title}
      </h3>
      <p className="text-lg leading-6 text-gray-600 m-0 mt-[5px]">
        {skill.description}
      </p>
    </div>
  )
}

export default SkillItem
