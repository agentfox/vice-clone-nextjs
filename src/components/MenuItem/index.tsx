import React from "react";
import { twMerge } from "tailwind-merge";

import type { MenuLink } from "@/types";

interface IMenuItemProps {
  classes?: string;
  data: MenuLink;
  icon?: React.ReactNode;
}

function MenuItem(props: IMenuItemProps) {
  return (
    <li
      className={twMerge(
        `flex h-[48px] basis-1 cursor-pointer flex-row items-center justify-between border-t border-solid border-white/[.2] py-2 text-xl font-black hover:text-white/[0.4] `,
        props.classes
      )}
    >
      <div>{props.data.text}</div>
      {props.icon}
    </li>
  );
}

export default MenuItem;
