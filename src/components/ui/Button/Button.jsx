import React from 'react'
import { ArrowRight } from 'lucide-react'
import { cn } from '../../../utils/helpers'

const Button = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  size = 'medium',
  icon = false,
  className,
  disabled = false,
  type = 'button',
  ...props 
}) => {
  const baseClasses = "font-inherit border-none rounded-[35px] cursor-pointer inline-flex items-center transition-all duration-300"
  
  const variants = {
    primary: "bg-primary text-secondary shadow-lg hover:shadow-xl hover:-translate-y-1 active:translate-y-0.5",
    secondary: "bg-accent text-primary hover:bg-blue-600",
    hero: "bg-primary text-secondary px-7 py-2 pl-7 pr-15 text-xl font-medium relative overflow-hidden h-12"
  }

  const sizes = {
    small: "px-4 py-2 text-sm",
    medium: "px-6 py-3 text-base",
    large: "px-8 py-4 text-lg"
  }

  const buttonClasses = cn(
    baseClasses,
    variants[variant],
    sizes[size],
    disabled && "opacity-50 cursor-not-allowed",
    className
  )

  if (variant === 'hero') {
    return (
      <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={buttonClasses}
        {...props}
      >
        {children}
        {icon && (
          <div className="bg-secondary ml-4 absolute flex items-center justify-center h-10 w-10 rounded-[35px] right-1.5 transition-all duration-300 hover:w-[calc(100%-0.6em)]">
            <ArrowRight className="w-4 h-4 transition-transform duration-300 text-background" />
          </div>
        )}
      </button>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={buttonClasses}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
