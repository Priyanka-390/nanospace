import React from 'react'
import Icons from './Icons';

const PrimaryButton = ({ children, className }) => {
  return (
    <button
      className={`py-1.5 px-4 !pr-3 rounded-full flex items-center gap-1.5 text-white group duration-300 bg-sky-blue text-shadow text-base sm:text-lg !leading-157 font-saira font-medium ${className}`}
    >
      {children}
      <span className="mt-1 group-hover:translate-x-1 duration-300">
        <Icons icon="button-arrow" />
      </span>
    </button>
  );
}

export default PrimaryButton

