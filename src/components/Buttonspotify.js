
import React from 'react';
import './Button.css';


const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({
  children,
  type,
  onClick,
 
  buttonSize,
}) => {

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <a
    href='https://open.spotify.com/artist/5g6PWbtWEOwPZ18wkfdWEf?si=Bni1YYdRREqBBU61FY77ZA&nd=1'
    target="_blank"
    rel="noopener noreferrer">

      <button
        className={`btn ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </a>
  );
};