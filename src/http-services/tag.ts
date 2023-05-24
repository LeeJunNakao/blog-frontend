import { AxiosResponse } from "@/entity/http";
import { Client } from "./client";
import { Tag } from "@/entity/tag";

export const listTags = async () => {
  const response = await Client.get<AxiosResponse<Tag[]>>("tags");

  return response.data;
};


