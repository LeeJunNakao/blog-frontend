"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { v4 as uuid } from "uuid";
import Logo from "@/assets/images/logo-tesseract.svg";
import Accordion from "@/components/displayer/Accordion";
import { listTags } from "@/http-services/tag";
import Badge from "@/components/displayer/Badge";
import BadgeDisplayer from "@/components/displayer/BadgeDisplayer";
import { ThemeProvider } from "styled-components";
import theme from "../../../theme";
import { Tag } from "@/entity/tag";
import * as S from "./styles";
import "./global-styles.css";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [tags, setTags] = React.useState<Tag[]>([]);

  const fetchTags = async () => {
    const tagsResponse = await listTags();

    setTags(tagsResponse.data);
  };

  React.useEffect(() => {
    fetchTags();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <S.Page>
        <S.Header>
          <Link href="/">
            <Logo width={50} height={50} />
          </Link>

          <span>LJ Blog</span>
        </S.Header>
        <S.MainWrapper>
          <S.LateralMenu>
            <Accordion title="Categorias">
              <BadgeDisplayer>
                {tags.map((tag) => (
                  <Badge key={uuid()}>
                    <Link href={`/tag/${tag.id}`}>{tag.name}</Link>
                  </Badge>
                ))}
              </BadgeDisplayer>
            </Accordion>
          </S.LateralMenu>
          <main>{children}</main>
        </S.MainWrapper>
      </S.Page>
    </ThemeProvider>
  );
}
