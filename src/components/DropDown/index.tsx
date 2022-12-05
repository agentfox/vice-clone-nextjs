import React, { useEffect } from "react";

interface IDropDownProps {
  children: React.ReactNode;
  classes?: string;
}

function DropDown(props: IDropDownProps) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "visible";
    };
  }, []);
  return (
    <div
      role="dialog"
      aria-modal="true"
      className={`absolute flex justify-center ${props.classes}`}
    >
      {props.children}
    </div>
  );
}

export default DropDown;
