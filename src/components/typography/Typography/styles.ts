import styled from "styled-components";

export const H1 = styled.h1`
  font-family: ${(props) => props.theme?.typography?.fontFamily};
  color: ${(props) => props.theme.palette.textPrimary};
  font-size: 36px;
`;

export const H2 = styled.h2`
  font-family: ${(props) => props.theme?.typography?.fontFamily};
`;

export const RegularText = styled.span`
  font-family: ${(props) => props.theme?.typography?.fontFamily};
  font-size: 16px;
`;
