/* eslint-disable tailwindcss/no-custom-classname */
import React from "react";

interface IHamburgerButtonProps {
  isOpen?: boolean;
  handleClick: () => void;
}

function HamburgerButton(props: IHamburgerButtonProps) {
  return (
    <div
      className="flex cursor-pointer flex-col items-center justify-center bg-black text-white"
      onClick={props.handleClick}
    >
      <button
        className="border-none bg-none p-0"
        aria-label="Open Navigation and Search Menu"
      >
        <div className="h-4 w-4">
          <div className="my-0.5 h-0.75 w-4 bg-white"></div>
          <div className="my-0.5 h-0.75 w-4 bg-white"></div>
          <div className="my-0.5 h-0.75 w-4 bg-white"></div>
        </div>
      </button>
    </div>
  );
}

export default HamburgerButton;
