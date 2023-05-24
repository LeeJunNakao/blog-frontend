"use client";

import styled from "styled-components";

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.palette.bgPrimary};
  width: 100vw;
  height: 100vh;
  overflow: auto;
`;

export const MainWrapper = styled.div`
  width: 100%;
  flex: 1;
  display: grid;
  grid-template-columns: 200px 1fr;
`;

export const LateralMenu = styled.div`
  width: 100%;
  flex: 1;
  background-color: ${(props) => props.theme.palette.bgSecondary};
`;

export const Header = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.palette.bgSecondary};
  display: flex;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;

  span {
    font-family: ${(props) => props.theme?.typography?.fontFamily};
    font-size: 40px;
    color: #472183;
    margin-left: 20px;
  }

  svg {
    &:hover {
      cursor: pointer;
    }
  }
`;
