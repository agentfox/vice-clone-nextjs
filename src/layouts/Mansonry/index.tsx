import React from "react";

import type { IFeedItem } from "@/types";

import MansonryItem from "../../components/MansonryItem";

interface IMansonryProps {
  data: IFeedItem[];
}

function Mansonry({ data }: IMansonryProps) {
  return (
    <div className="flex flex-col border-0  border-solid   border-black/[.1] px-0 md:flex-row md:border-b">
      {data.map((article) => (
        <MansonryItem key={article.id} data={article} />
      ))}
    </div>
  );
}

export default Mansonry;
