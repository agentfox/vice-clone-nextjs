import React from "react";
import { twMerge } from "tailwind-merge";

interface IViceCardContentProps {
  children: React.ReactNode;
  classes?: string;
}

function ViceCardContent({ children, classes }: IViceCardContentProps) {
  return (
    <div className={twMerge("flex flex-col p-pix20 md:p-pix40", classes)}>
      {children}
    </div>
  );
}

export default ViceCardContent;
