import React from 'react'

const Para = ({ title, className }) => {
   return (
     <p
       className={`font-saira font-normal text-white !leading-150 md:text-xl sm:text-lg text-base ${className} `}
     >
       {title}
     </p>
   );
};

export default Para
