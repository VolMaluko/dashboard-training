import * as S from "./styles.ts";
import { MdSupervisedUserCircle } from "react-icons/md";

export default function Card() {
  return (
    <S.Container>
      <MdSupervisedUserCircle size={24} />

      <S.Texts>
        <S.TitleSpan>Total Users</S.TitleSpan>
        <S.NumberSpan>46843</S.NumberSpan>
        <S.DetailSpan>
          <S.Positive>Fuck</S.Positive> u bitch
        </S.DetailSpan>
      </S.Texts>
    </S.Container>
  );
}
