"use client";

import styled from "styled-components";

export const BadgeWrapper = styled.div`
  background-color: ${(props) => props.theme.palette.bgComponents};
  color: ${(props) => props.theme.palette.textPrimary};
  border-radius: 50px;
  width: fit-content;
  padding: 5px;
  font-family: ${(props) => props.theme?.typography?.fontFamily};
  font-size: 12px;


  a {
    text-decoration: none;
    color: ${(props) => props.theme.palette.textPrimary};
  }
`;
