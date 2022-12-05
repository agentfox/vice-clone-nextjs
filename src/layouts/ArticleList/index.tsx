import React from "react";

interface IArticleListProps {
  children: React.ReactNode;
}

function ArticleList(props: IArticleListProps) {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="basis-full border-solid border-black/[.1] lg:basis-2/3 lg:border-r">
        {props.children}
      </div>
      <div className="basis-0 lg:basis-1/3"></div>
    </div>
  );
}

export default ArticleList;
