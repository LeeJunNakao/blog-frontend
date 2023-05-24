"use client";

import React from "react";
import ReactMarkdown from "react-markdown";
import { v4 as uuid } from "uuid";
import { Article } from "@/entity/page";
import { getArticle } from "@/http-services/article";
import Typography from "@/components/typography/Typography";
import BadgeDisplayer from "@/components/displayer/BadgeDisplayer";
import Badge from "@/components/displayer/Badge";

const HomePage = ({ params }: { params: { id: string } }) => {
  const { id } = params;

  const [article, setArticle] = React.useState<Article | null>(null);

  const fetchArticle = async () => {
    const response = await getArticle(Number(id));

    setArticle(response.data);
  };

  React.useEffect(() => {
    fetchArticle();
  }, []);

  return (
    <>
      <Typography variant="title">{article?.title}</Typography>
      <BadgeDisplayer noPadding>
        {article?.tags?.map((tag) => (
          <Badge key={uuid()}>{tag.name}</Badge>
        ))}
      </BadgeDisplayer>
      {article?.content && <ReactMarkdown>{article.content}</ReactMarkdown>}
    </>
  );
};

export default HomePage;
