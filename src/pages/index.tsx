import axios from "axios";

import HomeMansonry from "@/layouts/HomeMansonry";
import LastestArticles from "@/layouts/LatestArticles";
import { Main } from "@/layouts/Main";
import { Meta } from "@/layouts/Meta";
import type { IFeedItem } from "@/types";

const Index = (props: { feeds: IFeedItem[] }) => {
  const mansonryData = props.feeds;
  return (
    <Main
      meta={
        <Meta
          title="Next.js Boilerplate Presentation"
          description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
        />
      }
    >
      <HomeMansonry feeds={mansonryData} />

      <LastestArticles />
    </Main>
  );
};

export async function getServerSideProps() {
  const res = await axios.get(
    `${
      process.env.NODE_ENV === "production"
        ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
        : process.env.LOCAL_URL
    }/api/articles?limit=4&page=0`
  );

  return {
    props: { feeds: res.data.articles },
  };
}

export default Index;
