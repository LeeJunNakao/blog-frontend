"use client";

import styled from "styled-components";

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;

  &:hover {
    cursor: pointer;
  }

  svg {
    color: ${(props) => props.theme.palette.textPrimary};
  }
`;

export const Title = styled.div`
  font-family: ${(props) => props.theme?.typography?.fontFamily};
  font-size: 24px;
  color: ${(props) => props.theme.palette.textPrimary};
`;

type ContentProps = {
  open: boolean;
  maxheight: number;
};

export const Content = styled.div<ContentProps>`
  max-height: ${(props) => (props.open ? `${props.maxheight}px` : "0px")};
  height: fit-content;
  overflow: hidden;

  transition: all linear 0.5s;
`;
