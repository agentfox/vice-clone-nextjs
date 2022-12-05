import React, { useState } from "react";

import DropDown from "../DropDown";

const languages = [
  {
    id: "en",
    name: "English",
  },
  {
    id: "fr",
    name: "Français",
  },
  {
    id: "it",
    name: "Italiano",
  },
  {
    id: "es",
    name: "Español",
  },
  {
    id: "de",
    name: "Deutsch",
  },
  {
    id: "ru",
    name: "Russian",
  },
  {
    id: "neth",
    name: "Nederlands",
  },
  {
    id: "ro",
    name: "Roman",
  },
  {
    id: "kr",
    name: "한국어",
  },
  {
    id: "cn",
    name: "日本語",
  },
  {
    id: "ar",
    name: "عربي",
  },
];

const Option = ({
  text,
  isSelected,
  handler,
}: {
  text: string;
  isSelected: boolean;
  handler: () => void;
}) => {
  return (
    <li
      className={`flex h-[48px] cursor-pointer flex-row items-center justify-between border-t border-solid border-white/[.2] py-2 font-black hover:text-white/[0.4]`}
      onClick={handler}
    >
      <div>{text}</div>
      {isSelected && (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM11.8723 4L13.25 5.35267L6.47963 12L6.47962 12L6.47961 12L2.75 8.33817L4.12771 6.9855L6.47962 9.29466L11.8723 4Z"
            fill="white"
          ></path>
        </svg>
      )}
    </li>
  );
};

interface ILanguagePickerProps {
  defaultLanguage: string;
  classes?: string;
}

const getLanguageName = (langId: string) =>
  languages.find((l) => l.id === langId)?.name;

function LanguagePicker({ defaultLanguage, classes }: ILanguagePickerProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedLanguage, setSelectedLanguage] =
    useState<string>(defaultLanguage);
  return (
    <>
      <button
        className={`font-sourceCodePro text-sxs leading-none ${classes || ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div>+ {isOpen ? "Close" : getLanguageName(selectedLanguage)}</div>
      </button>
      {isOpen && (
        <DropDown classes="right-0 top-full px-pix40 text-white flex-col md:w-[330px] w-screen items-stretch bg-black font-viceGrotesk">
          <div className="pt-pix40 text-3xlp font-black uppercase">
            Vice
            <br />
            Editions
          </div>
          <ul className="my-4 flex min-w-30 list-none flex-col pb-[50px]">
            {languages.map((l) => (
              <Option
                handler={() => setSelectedLanguage(l.id)}
                key={l.id}
                text={l.name}
                isSelected={selectedLanguage === l.id}
              />
            ))}
          </ul>
        </DropDown>
      )}
    </>
  );
}

export default LanguagePicker;
