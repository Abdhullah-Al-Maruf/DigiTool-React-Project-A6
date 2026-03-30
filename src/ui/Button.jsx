import React from 'react';

const Button = ({ text }) => {
  return (
    <a className="btn rounded-full text-white bg-linear-to-b from-[#4f39f6] to-[#9514fa]">
      {text}
    </a>
  );
};

export default Button;