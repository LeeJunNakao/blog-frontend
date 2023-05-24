import { PropsWithChildren } from "react";
import * as S from "./styles";

type Props = {
  noPadding?: boolean;
};

const BadgeDisplayer = (props: PropsWithChildren<Props>) => {
  return <S.Wrapper nopadding={!!props.noPadding}>{props.children}</S.Wrapper>;
};

export default BadgeDisplayer;
