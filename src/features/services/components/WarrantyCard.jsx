import React from 'react'

const WarrantyCard = ({ warranty }) => {
  return (
    <div className="offer-card warranty p-10 min-w-[300px] max-w-[370px] bg-[var(--color-card)] rounded-[20px] outline-none flex-1 w-[500px]">
      <div className="card-icon w-[60px] h-[60px] mb-5">
        <img src="/assets/images/icons/icon-installation.svg" alt="Warranty" />
      </div>
      <h3 className="text-[1.8rem] mb-5 relative inline-block w-fit after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[1.6px] after:bg-current after:rounded-sm after:opacity-70 after:transition-[width] after:duration-300 hover:after:w-full">
        Warranty
      </h3>
      <ul className="list-none p-0">
        {warranty.map((item, index) => (
          <li key={index} className="mb-3 pl-6 relative text-lg before:content-['•'] before:absolute before:left-0">
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default WarrantyCard
