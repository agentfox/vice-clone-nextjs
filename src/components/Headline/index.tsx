import React from "react";

interface IHeadlineProps {
  text: string[];
}

function Headline({ text }: IHeadlineProps) {
  return (
    <div className="border-b border-solid border-black/[.1] px-pix20 pb-pix10 pt-pix40 md:px-pix40 ">
      <h2 className="text-5xlp font-black uppercase">
        {text.map((t) => (
          <span key={t}>
            {t}
            <br />
          </span>
        ))}
      </h2>
    </div>
  );
}

export default Headline;
