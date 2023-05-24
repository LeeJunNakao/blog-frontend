"use client";

import styled from "styled-components";

export const TitleWrapper = styled.div`
  margin-left: 10px;
`;

export const ArticleWrapper = styled.div`
  margin-left: 10px;
`;

export const ArticleItem = styled.div`
  display: flex;
  align-items: center;

  span + span {
    margin-left: 5px;
  }

  &:hover {
    cursor: pointer;

    span + span {
      text-decoration: underline;
    }
  }
`;

export const LoadingWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
