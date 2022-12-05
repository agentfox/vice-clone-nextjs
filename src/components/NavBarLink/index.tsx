import Link from "next/link";
import React from "react";
import { twMerge } from "tailwind-merge";

import type { MenuLink } from "@/types";

const links: MenuLink[] = [
  {
    text: "Watch",
    href: "/",
  },
  {
    text: "World News",
    href: "/",
  },
  {
    text: "Culture",
    href: "/",
  },
  {
    text: "Entertainment",
    href: "/",
  },
  {
    text: "Tech",
    href: "/",
  },
];

interface INavBarLinkProps {
  classes: string;
}

function NavBarLink({ classes }: INavBarLinkProps) {
  return (
    <ul
      className={twMerge(
        "list-none flex-row items-center bg-black font-viceGrotesk font-black",
        classes
      )}
    >
      {links.map((l) => (
        <li key={l.text} className="flex h-full items-center ">
          <Link href={l.href}>
            <a className="px-2.5 text-white no-underline">{l.text}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default NavBarLink;
