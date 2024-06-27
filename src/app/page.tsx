"use client";
import Tooltip from "@/components/tooltip";
import * as S from "./styles";
import Search from "@/components/search";

export default function Home() {
  const tooltiptext = "No tem galantia";
  const placeholder = "Digite o valor";
  return (
    <S.Main>
      <S.WhateverJustSomething></S.WhateverJustSomething>

      <S.Valor>
        <S.Wrapper>
          Price
          <Tooltip tooltiptext={tooltiptext} />
        </S.Wrapper>
        <Search placeholder={placeholder} />
      </S.Valor>
    </S.Main>
  );
}
