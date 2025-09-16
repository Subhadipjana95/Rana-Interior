import React from 'react'
import { cn } from '../../../utils/helpers'

const navigationItems = [
  { label: 'Home', href: '#hero' },
  { label: 'Skills', href: '#skills' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Process', href: '#Process' },
  { label: 'Contact', href: '#contact' }
]

const BottomNavigation = () => {
  return (
    <nav className="bottom-navbar fixed bottom-[35px] left-1/2 transform -translate-x-1/2 w-full max-w-[600px] bg-background border border-gray-300 rounded-[40px] p-2 shadow-lg z-[1000]">
      <ul className="w-full flex justify-between list-none m-0 px-1">
        {navigationItems.map((item, index) => (
          <li key={index} className={cn("relative px-[2px]", index === 0 ? "active" : "")}>
            <a
              href={item.href}
              className={cn(
                "block no-underline text-accent font-medium text-[1.3rem] py-2.5 px-3.5 rounded-[25px] relative z-[1] transition-all duration-300",
                "before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-accent before:rounded-[25px] before:z-[-1] before:opacity-0 before:scale-90 before:transition-all before:duration-300",
                "hover:text-primary hover:before:opacity-100 hover:before:scale-100"
              )}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default BottomNavigation
