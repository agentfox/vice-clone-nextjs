import React from "react";

import LanguagePicker from "@/components/LanguagePicker";

function TopNav(props: any) {
  const { isTransformed } = props;
  return (
    <div
      className={`relative ml-auto border-b border-solid border-white/[.2] bg-black py-3.5 pr-pix20  md:pr-pix40 ${
        isTransformed && "hidden"
      }`}
    >
      <LanguagePicker
        defaultLanguage="en"
        classes="text-white uppercase ml-auto block"
      />
    </div>
  );
}

export default TopNav;
