import axios from "axios";

export const fetchInfiniteArticles = async (page: number) => {
  const res = await axios.get(
    `${process.env.API_URL}/articles?limit=3&page=${page}`
  );
  return res.data;
};
