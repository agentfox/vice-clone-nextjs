import _ from "lodash";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useInfiniteQuery } from "react-query";

import Loading from "@/components/LoadmoreButton";
import type { IFeedItem } from "@/types";
import { fetchInfiniteArticles } from "@/utils";

import FeedItem from "../../components/FeedItem";
import Headline from "../../components/Headline";
import SpotLight from "../../components/Spotlight";
import ArticleList from "../ArticleList";

type ClassifiedFeeds = IFeedItem | IFeedItem[];

const classifyFeeds = (feeds: IFeedItem[]): ClassifiedFeeds[] => {
  const classifiedFeeds: ClassifiedFeeds[] = [];
  let normalFeeds: IFeedItem[] = [];
  feeds.forEach((f) => {
    if (f.isTrending) {
      if (normalFeeds.length) {
        classifiedFeeds.push([...normalFeeds]);
        normalFeeds = [];
      }
      classifiedFeeds.push(f);
    } else {
      normalFeeds.push(f);
    }
  });
  classifiedFeeds.push(normalFeeds);
  return classifiedFeeds;
};

const renderNormalFeeds = (feeds: IFeedItem[]) => (
  <ArticleList key={feeds[0]?.id}>
    {feeds.map((article) => (
      <FeedItem data={article} key={article.id} />
    ))}
  </ArticleList>
);

const renderLoadmore = (
  isFetchingNextPage: boolean,
  hasNextPage: boolean | undefined
) => {
  return (
    <>
      {isFetchingNextPage && <Loading />}
      {!isFetchingNextPage && !hasNextPage && <div>Nothing more to load</div>}
    </>
  );
};

function LastestArticles() {
  const { ref, inView } = useInView();

  const { data, isFetchingNextPage, fetchNextPage, hasNextPage } =
    useInfiniteQuery(
      "New Feeds",
      ({ pageParam = 1 }) => fetchInfiniteArticles(pageParam),
      {
        getNextPageParam: (lastPage) => lastPage.nextPage ?? undefined,
      }
    );

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);
  if (!data?.pages.length) {
    return <></>;
  }
  const mergedFeedData = data?.pages.map((item) => item.articles).flat(1);
  const classifiedData = classifyFeeds(mergedFeedData as IFeedItem[]);
  return (
    <section>
      <Headline text={["the", "latest"]} />
      {classifiedData.map((feedData) => {
        return _.isArray(feedData) ? (
          renderNormalFeeds(feedData as IFeedItem[])
        ) : (
          <SpotLight data={feedData as IFeedItem} key={feedData.id} />
        );
      })}
      <div ref={ref} className="flex h-[340px] items-center justify-center">
        {renderLoadmore(isFetchingNextPage, hasNextPage)}
      </div>
    </section>
  );
}

export default LastestArticles;
