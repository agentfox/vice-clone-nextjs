import React from "react";
import { twMerge } from "tailwind-merge";

interface ISocialLinksProps {
  children?: React.ReactNode;
  classes?: string;
}

function SocialLinks({ children, classes }: ISocialLinksProps) {
  return (
    <div className={twMerge("flex items-center", classes)}>
      <ul className="flex min-w-30 list-none flex-row flex-wrap items-center ">
        {children}
      </ul>
    </div>
  );
}

export default SocialLinks;
