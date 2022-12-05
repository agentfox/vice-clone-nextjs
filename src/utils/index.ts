import axios from "axios";

export const fetchInfiniteArticles = async (page: number) => {
  const res = await axios.get(
    `http://localhost:3000/api/articles?limit=3&page=${page}`
  );
  return res.data;
};
