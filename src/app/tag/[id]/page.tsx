"use client";

import React from "react";
import ArticlesList, {
  ArticlesListProps,
} from "@/components/layout/ArticlesList";
import * as ArticleServce from "@/http-services/article";
import { Article } from "@/entity/page";

export default function TagItem({ params }: { params: { id: string } }) {
  const fetchArticles: ArticlesListProps["service"] = async (setArticles) => {
    const response = await ArticleServce.listArticles({
      tagId: Number(params.id),
    });

    setArticles(response.data);
  };

  return <ArticlesList service={fetchArticles} />;
}
