import React, { PropsWithChildren } from "react";
import { MdArrowDropUp, MdArrowRight, MdArrowDropDown } from "react-icons/md";
import * as S from "./styles";

type Props = {
  title: string;
};

const Accordion = (props: PropsWithChildren<Props>) => {
  const [open, setOpen] = React.useState(false);
  const [contentMaxHeight, setContentMaxHeight] = React.useState(0);
  const contentRef = React.useRef<HTMLDivElement | null>(null);

  const measureContentHeight = () => {
    const height = contentRef.current?.scrollHeight;

    if (height) {
      setContentMaxHeight(height);
    }
  };

  React.useEffect(() => {
    measureContentHeight();
  }, [open]);

  return (
    <div>
      <S.TitleWrapper onClick={() => setOpen(!open)}>
        {open ? <MdArrowDropDown size={30} /> : <MdArrowRight size={30} />}
        <S.Title>{props.title}</S.Title>
      </S.TitleWrapper>
      <S.Content open={open} ref={contentRef} maxheight={contentMaxHeight}>
        {props.children}
      </S.Content>
    </div>
  );
};

export default Accordion;
