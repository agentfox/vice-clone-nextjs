import React, { useState } from "react";

interface ISearchBarProps {
  handler?: (value: string) => void;
}

function SearchBar(props: ISearchBarProps) {
  const [searchValue, setSearchValue] = useState("");
  return (
    <div className="relative mb-[20px]">
      <form>
        <label className="invisible block h-0">
          Input for searching articles, videos, shows
        </label>
        <input
          type="text"
          className="w-full rounded-[2px] border-none bg-white/[0.4] py-[18.5px] pr-[40px] pl-[20px] text-ssm text-white focus:bg-white focus:text-black "
          role="searchbox"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder=""
          required
        />
        <button
          type="submit"
          role="button"
          aria-label="Search"
          className="absolute right-0 top-0 flex h-full w-[50px] cursor-pointer items-center justify-center"
          onClick={() => props.handler && props.handler(searchValue)}
        >
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
              d="M6.55892 10.7328C8.86408 10.7328 10.7328 8.86408 10.7328 6.55892C10.7328 4.25376 8.86408 2.38506 6.55892 2.38506C4.25376 2.38506 2.38506 4.25376 2.38506 6.55892C2.38506 8.86408 4.25376 10.7328 6.55892 10.7328ZM6.55892 13.1178C10.1813 13.1178 13.1178 10.1813 13.1178 6.55892C13.1178 2.93653 10.1813 0 6.55892 0C2.93653 0 0 2.93653 0 6.55892C0 10.1813 2.93653 13.1178 6.55892 13.1178Z"
              fill="white"
            ></path>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M14.5219 15.9015C14.3906 16.0328 14.1777 16.0328 14.0464 15.9015L9.18249 11.0376L11.0376 9.18249L15.9015 14.0464C16.0328 14.1777 16.0328 14.3906 15.9015 14.5219L14.5219 15.9015Z"
              fill="white"
            ></path>
          </svg>
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
