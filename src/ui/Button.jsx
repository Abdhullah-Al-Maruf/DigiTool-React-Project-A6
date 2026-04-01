import React from 'react';

const Button = ({ text, className = "", highlighted = false, ...props }) => {
  return (
    // here use props  to receive click event 
    // classname ="" for receiving extra classes intiali value is empty " "
    <a className={`btn  rounded-full font-semibold
       ${highlighted ?
        // if highlighted
        " text-violet-800 " :
        // else
        "text-white btn bg-linear-to-b from-[#4f39f6] to-[#9514fa] "}
          ${className}  `} {...props} >
      {text}
    </a>
  );
};

export default Button;
