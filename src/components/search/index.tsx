"use client";

import { MdSearch } from "react-icons/md";
import * as S from "./styles";

interface ISearch {
  placeholder: string;
}

export default function Search({ placeholder }: ISearch) {
  return (
    <S.Container>
      <MdSearch />
      <S.StyledInput placeholder={placeholder}></S.StyledInput>
    </S.Container>
  );
}
