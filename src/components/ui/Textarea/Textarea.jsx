import React from 'react'
import { cn } from '../../../utils/helpers'

const Textarea = ({ className, ...props }) => {
  return (
    <textarea
      className={cn(
        "p-3 border border-gray-300 rounded-[10px] font-inter text-sm transition-all ease-in-out duration-300 focus:outline-none focus:border-gray-600 resize-vertical",
        className
      )}
      {...props}
    />
  )
}

export default Textarea
