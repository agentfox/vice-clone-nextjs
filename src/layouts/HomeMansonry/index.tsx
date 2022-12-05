import React from "react";

import type { IFeedItem } from "@/types";

import SpotLight from "../../components/Spotlight";
import Mansonry from "../Mansonry";

interface IHomeMansonryProps {
  feeds: IFeedItem[];
}

function HomeMansonry({ feeds }: IHomeMansonryProps) {
  const spotlight = feeds[0];
  const mansonry = feeds.slice(1);

  return (
    <section>
      {spotlight && <SpotLight data={spotlight} priority={true} />}
      <Mansonry data={mansonry} />
    </section>
  );
}

export default HomeMansonry;
