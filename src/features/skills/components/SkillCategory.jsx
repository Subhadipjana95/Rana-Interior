import React from 'react'
import SkillItem from './SkillItem'

const SkillCategory = ({ category }) => {
  return (
    <div className="skills-category">
      <h2 className="text-[2rem] font-semibold tracking-[0.1em] mb-5 text-black">
        {category.title}
      </h2>
      <div className="skill-items flex items-start justify-between gap-[2vw] flex-wrap">
        {category.skills.map((skill, index) => (
          <SkillItem key={index} skill={skill} />
        ))}
      </div>
    </div>
  )
}

export default SkillCategory
