import React from "react";
import { v4 as uuid } from "uuid";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useRouter } from "next/navigation";
import Typography from "@/components/typography/Typography";
import { Article } from "@/entity/page";
import BadgeDisplayer from "@/components/displayer/BadgeDisplayer";
import Badge from "@/components/displayer/Badge";
import Loading from "@/assets/icons/loading.svg";
import * as S from "./styles";

export type ArticlesListProps = {
  service: (setArticles: (articles: Article[]) => void) => Promise<void>;
};

export default function ArticlesList(props: ArticlesListProps) {
  const router = useRouter();

  const [articles, setArticles] = React.useState<Article[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);

  const loadData = async () => {
    try {
      await props.service(setArticles);
    } finally {
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    loadData();
  }, []);

  const ArticlesContent =
    articles.length > 0 ? (
      articles.map((article) => (
        <S.ArticleItem
          key={uuid()}
          onClick={() => router.push(`article/${article.id}`)}
        >
          <Typography variant="regular-text">
            {format(new Date(article.createdAt), "P", { locale: ptBR })}:{" "}
          </Typography>
          <Typography variant="regular-text">{article.title}</Typography>
          <BadgeDisplayer>
            {article.tags.map((tag) => (
              <Badge key={uuid()}>{tag.name}</Badge>
            ))}
          </BadgeDisplayer>
        </S.ArticleItem>
      ))
    ) : (
      <Typography variant="regular-text">Nenhum artigo encontrado</Typography>
    );

  return (
    <>
      <S.TitleWrapper>
        <Typography variant="title">Artigos</Typography>
      </S.TitleWrapper>
      <S.ArticleWrapper>
        {isLoading ? (
          <S.LoadingWrapper>
            <Loading />
          </S.LoadingWrapper>
        ) : (
          ArticlesContent
        )}
      </S.ArticleWrapper>
    </>
  );
}
