import React from "react";

function Loading() {
  return (
    <div className="relative h-pix150 w-pix150 select-none">
      <div className="h-full w-full animate-spin-medium">
        <span className="absolute top-0 left-[45%] h-pix80 w-[16px] origin-bottom-center rotate-[20deg] uppercase">
          L
        </span>
        <span className="absolute top-0 left-[45%] h-pix80 w-[16px] origin-bottom-center rotate-[40deg] uppercase">
          o
        </span>
        <span className="absolute top-0 left-[45%] h-pix80 w-[16px] origin-bottom-center rotate-[60deg] uppercase">
          a
        </span>
        <span className="absolute top-0 left-[45%] h-pix80 w-[16px] origin-bottom-center rotate-[80deg] uppercase">
          d
        </span>
        <span className="absolute top-0 left-[45%] h-pix80 w-[16px] origin-bottom-center rotate-[100deg] uppercase">
          i
        </span>
        <span className="absolute top-0 left-[45%] h-pix80 w-[16px] origin-bottom-center rotate-[120deg] uppercase">
          n
        </span>
        <span className="absolute top-0 left-[45%] h-pix80 w-[16px] origin-bottom-center rotate-[140deg] uppercase">
          g
        </span>
        <span className="absolute top-0 left-[45%] h-pix80 w-[16px] origin-bottom-center rotate-[160deg] uppercase">
          !
        </span>
        <span className="absolute top-0 left-[45%] h-pix80 w-[16px] origin-bottom-center rotate-[180deg] uppercase">
          &nbsp;
        </span>
        <span className="absolute top-0 left-[45%] h-pix80 w-[16px] origin-bottom-center rotate-[200deg] uppercase">
          L
        </span>
        <span className="absolute top-0 left-[45%] h-pix80 w-[16px] origin-bottom-center rotate-[220deg] uppercase">
          o
        </span>
        <span className="absolute top-0 left-[45%] h-pix80 w-[16px] origin-bottom-center rotate-[240deg] uppercase">
          a
        </span>
        <span className="absolute top-0 left-[45%] h-pix80 w-[16px] origin-bottom-center rotate-[260deg] uppercase">
          d
        </span>
        <span className="absolute top-0 left-[45%] h-pix80 w-[16px] origin-bottom-center rotate-[280deg] uppercase">
          i
        </span>
        <span className="absolute top-0 left-[45%] h-pix80 w-[16px] origin-bottom-center rotate-[300deg] uppercase">
          n
        </span>
        <span className="absolute top-0 left-[45%] h-pix80 w-[16px] origin-bottom-center rotate-[320deg] uppercase">
          g
        </span>
        <span className="absolute top-0 left-[45%] h-pix80 w-[16px] origin-bottom-center rotate-[340deg] uppercase">
          !
        </span>
        <span className="absolute top-0 left-[45%] h-pix80 w-[16px] origin-bottom-center rotate-[360deg] uppercase">
          &nbsp;
        </span>
      </div>
      <svg
        className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.8872 31.9354L-8.37638e-07 16.7883L1.52256 15.3243L13.9286 28.3316L13.9286 0.909232L16.0714 0.909232L16.0714 28.3316L28.4774 15.3243L30 16.7883L15.1128 31.9354L14.8872 31.9354Z"
          fill="black"
        ></path>
      </svg>
    </div>
  );
}

export default Loading;
