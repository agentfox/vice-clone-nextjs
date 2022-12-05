import Link from "next/link";
import React from "react";

import AccessibilityLogo from "../../components/AccessibilityLogo";
import RotatingLogo from "../../components/RotatingLogo";

const footerNavItems = [
  {
    text: "About",
    id: "452we",
    href: "/",
  },
  {
    text: "Partner",
    id: "45w4e",
    href: "/",
  },
  {
    text: "Careers",
    id: "4578we",
    href: "/",
  },
  {
    text: "Code of Ethics",
    id: "tdts5",
    href: "/",
  },
  {
    text: "Privacy & Terms",
    id: "h6re",
    href: "/",
  },
  {
    text: "Accessibility Statement",
    id: "434gdwe",
    href: "/",
  },
];

function Footer() {
  return (
    <footer className="flex flex-col items-center bg-black px-pix20 py-pix40 font-sourceCodePro text-sxs uppercase text-white md:px-pix40 md:py-pix80">
      <Link href={"/"}>
        <RotatingLogo fill="#fff" height="75px" width="75px" />
      </Link>
      <div className="flex flex-col items-start justify-start self-stretch md:items-center md:justify-center">
        <nav
          role="navigation"
          aria-label="Footer Navigation"
          className="mt-pix30"
        >
          <ul className="flex list-none flex-col justify-center md:flex-row">
            {footerNavItems.map((item) => (
              <Link href={item.href} key={item.id}>
                <li className=" mr-pix15 py-pix10 last:mr-0">
                  <div className="underline  ">{item.text}</div>
                </li>
              </Link>
            ))}
          </ul>
        </nav>
        <Link href={"/"}>
          <AccessibilityLogo fill="#fff" width="75px" className="my-pix40" />
        </Link>
        <div>© 2022 VICE MEDIA GROUP</div>
      </div>
    </footer>
  );
}

export default Footer;
