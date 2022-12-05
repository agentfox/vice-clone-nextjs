import React, { useEffect } from "react";

import Footer from "@/layouts/Footer";
import type { MenuLink } from "@/types";

import DropDown from "../DropDown";
import MenuItem from "../MenuItem";
import SearchBar from "../SearchBar";
import SocialLinks from "../SocialLinks";
import SocialLink from "../SocialLinks/SocialLink";

// interface IDropDownMenuProps {}

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
  {
    name: "EMail",
    iconSrc: "/assets/svg/mail.svg",
    href: "/",
    width: 20,
    height: 16,
  },
];

const menuLinks: MenuLink[] = [
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
    text: "Identity",
    href: "/",
  },
  {
    text: "Environment",
    href: "/",
  },
  {
    text: "Tech",
    href: "/",
  },
  {
    text: "Health",
    href: "/",
  },
  {
    text: "Music",
    href: "/",
  },
  {
    text: "Food",
    href: "/",
  },
];

function DropDownMenu() {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "visible";
    };
  }, []);
  return (
    <DropDown classes="right-0 overflow-y-scroll overscroll-contain  bg-black w-full h-[calc(100vh-96px)] md:h-[calc(100vh-120px)] vice-menu">
      <div className=" w-full font-viceGrotesk text-white ">
        <div className="flex flex-col border-b border-solid border-white/[.2] px-pix40 pb-pix40 md:flex-row">
          <div className="mr-[50px] basis-[] md:basis-2/3 lg:basis-1/2">
            <div className="my-pix40 cursor-pointer text-3xlp font-black uppercase hover:text-white/[0.4]">
              Watch
            </div>
            <SearchBar />
            <SocialLinks classes="py-4">
              {socialLinks.map((link) => (
                <SocialLink
                  name={link.name}
                  key={link.name}
                  href={link.href}
                  iconSrc={link.iconSrc}
                  height={link.height}
                  width={link.width}
                  classes=" w-pix40 items-center"
                />
              ))}
            </SocialLinks>
          </div>
          <div className="basis-1 py-pix20 md:basis-1/3 lg:basis-1/2">
            <ul className="flex flex-col flex-wrap capitalize lg:flex-row">
              {menuLinks.map((link, index) => (
                <MenuItem
                  key={link.text}
                  data={link}
                  classes={`lg:mr-[6%] lg:basis-[44%] first:md:border-none ${
                    index < 2 ? "lg:border-none " : ""
                  }`}
                />
              ))}
            </ul>
          </div>
        </div>
        <Footer />
      </div>
    </DropDown>
  );
}

export default DropDownMenu;
