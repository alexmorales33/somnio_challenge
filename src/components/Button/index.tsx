import React from 'react';

interface ButtonProps {
  text: string;
  onClick: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ text, onClick, className, type = 'button', disabled = false }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-10 py-2 bg-white text-gray-400 font-semibold rounded-lg border border-gray-300 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75 disabled:opacity-50 ${className}`}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
