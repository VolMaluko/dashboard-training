"use client";
import { MdPlayCircleFilled } from "react-icons/md";
import * as S from "./styles";

export default function RightBar() {
  return (
    <S.Main>
      <S.Container>
        <S.ImageContainer></S.ImageContainer>
        <S.StyledTexts>
          <S.Notification>Available Now!</S.Notification>
          <S.Title>How are you feeling today?</S.Title>
          <S.Subtitle>We are here for your safety</S.Subtitle>
          <S.Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
            exercitationem enim quos labore tempora culpa facere debitis.
          </S.Description>
          <S.Button>
            <MdPlayCircleFilled /> Watch
          </S.Button>
        </S.StyledTexts>
      </S.Container>
      <S.Container>
        <S.ImageContainer></S.ImageContainer>
        <S.StyledTexts>
          <S.Notification>Available Now!</S.Notification>
          <S.Title>How are you feeling today?</S.Title>
          <S.Subtitle>We are here for your safety</S.Subtitle>
          <S.Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
            exercitationem enim quos labore tempora culpa facere debitis.
          </S.Description>
          <S.Button>
            <MdPlayCircleFilled /> Watch
          </S.Button>
        </S.StyledTexts>
      </S.Container>
    </S.Main>
  );
}
