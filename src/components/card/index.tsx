"use client";
import { MdSupervisedUserCircle } from "react-icons/md";
import * as S from "./styles";

export default function Card() {
  return (
    <S.Container>
      <MdSupervisedUserCircle size={24} />

      <S.Texts>
        <S.TitleSpan>Total Clients</S.TitleSpan>
        <S.NumberSpan>85499</S.NumberSpan>
        <S.DetailSpan>
          <S.Positive>15%</S.Positive> more clients than last month!
        </S.DetailSpan>
      </S.Texts>
    </S.Container>
  );
}
