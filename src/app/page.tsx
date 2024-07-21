"use client";
import * as S from "./styles";
import { CircleUserRound } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <S.Main>
      <S.LoginDiv>
        <S.ButtonWrapper>
          <S.ImageWrapper>
            <Image src="/user.png" alt="" width={60} height={60} />
          </S.ImageWrapper>

          <S.DifferentLink href="/">
            <S.Buttons>FAQ</S.Buttons>
          </S.DifferentLink>
          <S.DifferentLink href="/">
            <S.Buttons>Support</S.Buttons>
          </S.DifferentLink>
          <S.DifferentLink href="/">
            <S.Buttons>Learn More</S.Buttons>
          </S.DifferentLink>
          <S.DifferentLink href="/login">
            <S.ButtonLogin>
              <CircleUserRound />
              Login
            </S.ButtonLogin>
          </S.DifferentLink>
        </S.ButtonWrapper>
      </S.LoginDiv>

      <S.Wrapper></S.Wrapper>
    </S.Main>
  );
}
