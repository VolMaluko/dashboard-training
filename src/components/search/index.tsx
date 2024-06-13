// @ts-nocheck
import { MdSearch } from "react-icons/md";
import * as S from "./styles";

export default function Search({ placeholder }) {
  return (
    <S.Container>
      <MdSearch />
      <S.StyledInput placeholder={placeholder}></S.StyledInput>
    </S.Container>
  );
}
