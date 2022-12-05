import Link from "next/link";
import React from "react";

import ViceCard from "@/components/ViceCard";
import ViceCardContent from "@/components/ViceCard/ViceCardContent";
import ViceCardImage from "@/components/ViceCard/ViceCardImage";
import type { IFeedItem } from "@/types";

import styles from "./feeditem.module.css";

interface IFeedItemProps {
  data: IFeedItem;
}

function FeedItem({ data }: IFeedItemProps) {
  return (
    <ViceCard
      classes={`flex-row border-b border-solid border-black/[.1] items-stretch`}
    >
      <div className="order-2 basis-1/4 md:order-1 md:basis-1/3 lg:basis-1/2 ">
        <Link href={data?.category?.href}>
          <ViceCardImage
            src={data?.imgSrc}
            height={data?.height}
            width={data?.width}
            alt={data?.alt}
            layout="responsive"
            objectFit="cover"
            containerClasses={`h-full md:py-pix40 cursor-pointer ${styles.imgfullheight}`}
          />
        </Link>
      </div>
      <ViceCardContent classes="basis-3/4 md:basis-2/3 lg:basis-1/2 order-1 md:order-2 md:pl-pix20">
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

export default FeedItem;
