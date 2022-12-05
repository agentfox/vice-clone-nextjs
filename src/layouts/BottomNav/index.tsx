import Link from "next/link";
import React, { useState } from "react";

import DropDownMenu from "@/components/DropdownMenu";
import HamburgerButton from "@/components/HamburgerButton";
import NavBarLink from "@/components/NavBarLink";
import SocialLinks from "@/components/SocialLinks";
import SocialLink from "@/components/SocialLinks/SocialLink";
import Logo from "@/public/assets/svg/logo.svg";

const socialLinks = [
  {
    name: "Facebook",
    iconSrc: "/assets/svg/facebook.svg",
    href: "/",
    width: 16,
    height: 16,
  },
  {
    name: "Instagram",
    iconSrc: "/assets/svg/instagram.svg",
    href: "/",
    width: 16,
    height: 16,
  },
  {
    name: "Twitter",
    iconSrc: "/assets/svg/twitter.svg",
    href: "/",
    width: 21,
    height: 16,
  },
];

function BottomNav(props: any) {
  const { isTransformed } = props;
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <div
        className={`flex h-14 justify-between border-b border-solid border-white/[.2] bg-black px-pix20 duration-200 md:justify-start md:px-pix40 ${
          isTransformed ? "h-14 md:justify-between" : "md:h-20"
        }`}
      >
        <HamburgerButton handleClick={() => setIsOpen(!isOpen)} />
        <Link href="/">
          <div className=" flex cursor-pointer items-center pl-5">
            <Logo height={24} width={76} viewBox="0 0 89 28" />
          </div>
        </Link>
        {!isTransformed && <NavBarLink classes=" hidden pl-5 md:flex" />}

        <div className={`${isTransformed ? "block" : "md:hidden"}`}></div>
        <SocialLinks classes={`hidden  ml-auto ${!isTransformed && "md:flex"}`}>
          {socialLinks.map((link) => (
            <SocialLink
              name={link.name}
              key={link.name}
              href={link.href}
              iconSrc={link.iconSrc}
              height={link.height}
              width={link.width}
              classes=" w-pix40 items-center justify-end"
            />
          ))}
        </SocialLinks>
      </div>
      {isOpen && <DropDownMenu />}
    </>
  );
}

export default BottomNav;
