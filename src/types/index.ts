export interface ICategory {
  name: string;
  href: string;
}

export interface IFeedItem {
  id: string;
  alt: string;
  imgSrc: string;
  width: number;
  height: number;
  category: ICategory;
  title: string;
  description: string;
  author: string;
  articleLink: string;
  releaseDate: string;
  isTrending?: boolean;
  slug: string;
}

export interface IArticle {
  id: string;
  category: ICategory;
  title: string;
  content: string;
  author: string;
  tags: string[];
  releaseDate: string;
  slug: string;
}

export interface MenuLink {
  text: string;
  href: string;
}
