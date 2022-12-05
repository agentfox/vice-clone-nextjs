import Link from "next/link";
import React from "react";

import ViceCard from "@/components/ViceCard";
import ViceCardContent from "@/components/ViceCard/ViceCardContent";
import ViceCardImage from "@/components/ViceCard/ViceCardImage";
import type { IFeedItem } from "@/types";

import styles from "./spotlight.module.css";

interface ISpotLightProps {
  data: IFeedItem;
  priority?: boolean;
}

function SpotLight({ data, priority }: ISpotLightProps) {
  return (
    <div className=" flex flex-row pb-pix60 md:pb-pix80 lg:pb-0">
      <ViceCard classes=" w-full text-white lg:flex-row flex-col lg:flex-wrap flex-nowrap bg-black">
        <Link href={"/"}>
          <ViceCardImage
            id="spotlight-img"
            alt={data.alt}
            src={data.imgSrc}
            height={data.height}
            width={data.width}
            layout="responsive"
            sizes="(min-width: 60em) 75vw,
              (min-width: 28em) 50vw,
              45vw"
            priority={priority}
            containerClasses={` h-full basis-2/3 cursor-pointer order-2 lg:order-1 px-pix20 md:px-pix40 lg:px-0 relative mt-npix20 top-pix20 md:mt-npix40 md:top-pix40 ${styles.spotlightImg}`}
          />
        </Link>
        <ViceCardContent classes="basis-1/3 text-white order-1 lg:order-2 justify-center items-start">
          <Link href={data.category.href}>
            <div className="mb-2.5 cursor-pointer  text-white underline">
              {data.category.name}
            </div>
          </Link>
          <Link href="/">
            <h3 className=" mb-2.5 text-3xlp font-black">{data.title}</h3>
          </Link>

          <p className="pt-2.5 leading-7">{data.description}</p>
          <div className="pt-2.5">
            <div className="font-sourceCodePro text-xs uppercase ">
              {data.author}
            </div>
            <time className="pt-2.5 text-xs uppercase">{data.releaseDate}</time>
          </div>
        </ViceCardContent>
      </ViceCard>
    </div>
  );
}

export default SpotLight;
