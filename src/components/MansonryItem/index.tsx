import Link from "next/link";
import React from "react";

import ViceCard from "@/components/ViceCard";
import ViceCardContent from "@/components/ViceCard/ViceCardContent";
import ViceCardImage from "@/components/ViceCard/ViceCardImage";
import type { IFeedItem } from "@/types";

interface IFeedItemProps {
  data: IFeedItem;
  classes?: string;
}

function MansonryItem({ data }: IFeedItemProps) {
  return (
    <ViceCard
      classes={`basic-full md:basis-1/3 flex-row md:flex-col border-t md:border-r border-solid border-black/[.1] md:border-b-0 last:md:border-r-0 last:border-b md:border-t-0`}
    >
      <Link href={data?.category?.href}>
        <ViceCardImage
          src={data?.imgSrc}
          height={data?.height}
          width={data?.width}
          alt={data?.alt}
          objectFit="cover"
          containerClasses="flex basis-1/4 md:basis-auto cursor-pointer order-2 md:order-1  md:shrink-0"
        />
      </Link>
      <ViceCardContent classes="basis-3/4 md:basis-auto order-1 md:order-2">
        <Link href={data?.category?.href}>
          <div className="mb-2.5 cursor-pointer text-ssm  underline md:text-base">
            {data?.category?.name}
          </div>
        </Link>
        <Link href="/">
          <h3 className=" mb-2.5 text-base font-black leading-general md:text-xl">
            {data?.title}
          </h3>
        </Link>

        <p className="hidden pt-2.5 text-ssm leading-7 md:block lg:text-base">
          {data?.description}
        </p>
        <div className="md:pt-2.5">
          <div className="mb-2.5 font-sourceCodePro text-sxs uppercase ">
            {data?.author}
          </div>
          <time className="text-sxs uppercase">{data?.releaseDate}</time>
        </div>
      </ViceCardContent>
    </ViceCard>
  );
}

export default MansonryItem;
