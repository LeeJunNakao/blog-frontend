"use client";

import styled from "styled-components";

type ButtonProps = {
  color: "primary" | "secondary" | "danger";
};

export const Button = styled.button<ButtonProps>`
  padding: 5px 25px;
  font-weight: bold;
  border: 2px solid ${(props) => props.theme.palette[props.color]};
  border-radius: ${(props) => props.theme.dimensions.borderRadius};
  color: ${(props) => props.theme.palette[props.color]};
  background-color: ${(props) => props.theme.palette.bgComponents};

  &:hover {
    cursor: pointer;
  }

  &:active {
    background-color: ${(props) => props.theme.palette[props.color]};
    color: ${(props) => props.theme.palette.bgComponents};
  }
`;
