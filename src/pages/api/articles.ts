import type { NextApiRequest, NextApiResponse } from "next";

import { articles } from "./mockdata";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const pageSize = parseInt(`${req.query.limit}`, 10);
  const page = parseInt(`${req.query.page}`, 10);
  const totalItems = articles.length;
  const totalPages = Math.ceil(totalItems / pageSize);

  const nextPage = page < Math.max(totalPages - 1, 1) ? page + 1 : undefined;

  const skip = pageSize * page;

  if (skip < totalItems) {
    const data = articles.slice(skip, skip + pageSize);
    res.status(200).json({
      articles: data,
      totalPages,
      totalItems,
      currentPage: page,
      pageSize,
      nextPage,
    });
  } else {
    res.status(404);
  }
}
