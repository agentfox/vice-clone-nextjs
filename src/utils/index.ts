import axios from "axios";

export const fetchInfiniteArticles = async (page: number) => {
  const res = await axios.get(
    `${
      process.env.NODE_ENV === "production"
        ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
        : process.env.LOCAL_URL
    }/api/articles?limit=3&page=${page}`
  );
  return res.data;
};
