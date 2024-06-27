"use client";
import * as S from "./styles";

export default function Login() {
  return (
    <S.Main>
      <S.FormContainer>
        <S.StyledLabel>Login</S.StyledLabel>
        <S.StyledInput type="text" name="username" placeholder="Username" />
        <S.StyledInput type="text" name="password" placeholder="********" />
        <S.StyledButton>Submit</S.StyledButton>
      </S.FormContainer>
    </S.Main>
  );
}
