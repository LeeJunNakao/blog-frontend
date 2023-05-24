import React from "react";
import * as S from "./styles";

const Badge = (props: React.PropsWithChildren) => {
  return <S.BadgeWrapper>{props.children}</S.BadgeWrapper>;
};

export default Badge;
