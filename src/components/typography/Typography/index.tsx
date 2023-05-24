import React from "react";
import * as S from "./styles";

type TypographyVariant = "title" | "subtitle" | "regular-text";

type Props = {
  variant: TypographyVariant;
};

const Typography = (props: React.PropsWithChildren<Props>) => {
  if (props.variant === "title") {
    return <S.H1>{props.children}</S.H1>;
  }

  return <S.RegularText>{props.children}</S.RegularText>;
};

export default Typography;
