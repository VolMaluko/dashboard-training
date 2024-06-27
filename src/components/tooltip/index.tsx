"use client";
import React from "react";
import * as S from "./styles";
import { Info } from "lucide-react";

interface ITooltipProps {
  tooltiptext: string;
}

export default function Tooltip({ tooltiptext }: ITooltipProps) {
  return (
    <S.TooltipWrapper>
      <S.TooltipText>
        <Info />
      </S.TooltipText>
      <S.TooltipBox>{tooltiptext}</S.TooltipBox>
    </S.TooltipWrapper>
  );
}
