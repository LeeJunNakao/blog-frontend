"use client";

import styled from "styled-components";
import { BadgeWrapper } from "../Badge/styles";

type WrapperProps = {
  nopadding: boolean;
};

export const Wrapper = styled.div<WrapperProps>`
  display: flex;
  flex-wrap: wrap;
  column-gap: 5px;
  row-gap: 10px;
  padding: ${(props) => (props.nopadding ? "0" : "10px")};

  & > ${BadgeWrapper} {
    color: white;

    -webkit-user-select: none; /* Safari */
    -ms-user-select: none; /* IE 10 and IE 11 */
    user-select: none; /* Standard syntax */

    &:hover {
      cursor: pointer;
    }

    a {
      color: white;
    }
  }

  & > ${BadgeWrapper} {
    &:nth-child(5n + 1) {
      background-color: #ff6d60;
    }

    &:nth-child(5n + 2) {
      background-color: #643a6b;
    }

    &:nth-child(5n + 3) {
      background-color: #57c5b6;
    }

    &:nth-child(5n + 4) {
      background-color: #ff8400;
    }

    &:nth-child(5n) {
      background-color: #917fb3;
    }
  }
`;
