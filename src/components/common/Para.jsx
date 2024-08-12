import React from 'react'

const Para = ({ title, className }) => {
   return (
     <p
       className={`font-saira font-normal text-white leading-150 text-xl ${className} `}
     >
       {title}
     </p>
   );
};

export default Para
