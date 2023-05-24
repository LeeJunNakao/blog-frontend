import { Tag } from "./tag";

export type Article = {
  id: number;
  title: string;
  tags: Tag[];
  content: string;
  createdAt: string;
};
