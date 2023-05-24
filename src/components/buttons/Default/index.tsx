import { PropsWithChildren } from "react";
import * as S from "./styles";

type Props = {
  color?: "primary" | "secondary";
};

const Button = (props: PropsWithChildren<Props>) => {
  return <S.Button color={props.color || "primary"}>{props.children}</S.Button>;
};

export default Button;
