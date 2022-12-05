// import Link from 'next/link';
import type { ReactNode } from "react";
import React, { useEffect, useState } from "react";
import { useWindowScroll } from "react-use";

import BottomNav from "@/layouts/BottomNav";
import TopNav from "@/layouts/TopNav";

import Footer from "./Footer";

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const MENU_TRANSFORM_POSITION = 400;

const Main = ({ meta, children }: IMainProps) => {
  const { y } = useWindowScroll();
  const [scrollPosition, setScrollPosition] = useState(0);
  useEffect(() => {
    setScrollPosition(y);
  });

  const isTransformed = scrollPosition >= MENU_TRANSFORM_POSITION;

  return (
    <div className="my-0 mx-auto box-border max-w-10xl bg-white leading-general text-black antialiased">
      {meta}

      <div
        // eslint-disable-next-line tailwindcss/no-custom-classname
        className={`fixed z-30 w-full max-w-10xl ${
          isTransformed ? "nav-mini" : ""
        }`}
      >
        <TopNav isTransformed={isTransformed} />
        <BottomNav isTransformed={isTransformed} />
      </div>

      <main className="pt-24 font-viceGrotesk md:pt-30">{children}</main>
      <Footer />
    </div>
  );
};

export { Main };
