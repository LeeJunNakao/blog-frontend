"use client";

import React from "react";
import { Article } from "@/entity/page";
import { listArticles } from "@/http-services/article";
import ArticlesList from "@/components/layout/ArticlesList";

export default function Home() {
  const fetchArticles = async (setArticles: (articles: Article[]) => void) => {
    const response = await listArticles();

    setArticles(response.data);
  };

  return <ArticlesList service={fetchArticles} />;
}
