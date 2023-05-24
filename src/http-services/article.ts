import { AxiosResponse } from "@/entity/http";
import { Client } from "./client";
import { Article } from "@/entity/page";

export const listArticles = async (filters?: { tagId?: number }) => {
  const params = { populate: "*" } as { [k: string]: any };

  if (filters) {
    params["filters[tags][id][$eq]"] = filters.tagId;
  }

  const response = await Client.get<AxiosResponse<Article[]>>("articles", {
    params,
  });

  return response.data;
};

export const getArticle = async (id: number) => {
  const response = await Client.get<AxiosResponse<Article>>("articles", {
    params: {
      populate: "*",
    },
  });

  return response.data;
};
