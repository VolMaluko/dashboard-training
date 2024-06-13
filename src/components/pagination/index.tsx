import * as S from "./styles";
export default function Pagination() {
  return (
    <S.Container>
      <S.ButtonPrevNex disabled> Previous </S.ButtonPrevNex>
      <S.ButtonPrevNex> Next </S.ButtonPrevNex>
    </S.Container>
  );
}
