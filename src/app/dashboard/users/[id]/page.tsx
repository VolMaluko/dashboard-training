"use client";
import Image from "next/image";
import * as S from "./styles";

export default function SingleUserPage() {
  return (
    <S.Main>
      <S.InfoContainer>
        <S.ImageContainer>
          <Image src="/user.png" alt="" fill />
        </S.ImageContainer>
        John Doe
      </S.InfoContainer>
      <S.FormContainer>
        <S.StyledForm>
          <S.StyledLabel>Username</S.StyledLabel>
          <S.StyledInput type="text" name="username" placeholder="John Doe" />
          <S.StyledLabel>E-mail</S.StyledLabel>
          <S.StyledInput
            type="text"
            name="email"
            placeholder="johndoe@example.com"
          />
          <S.StyledLabel>Password</S.StyledLabel>
          <S.StyledInput type="text" name="password" placeholder="********" />
          <S.StyledLabel>Phone</S.StyledLabel>
          <S.StyledInput
            type="text"
            name="phone"
            placeholder="+55(12)123456789"
          />
          <S.StyledLabel>Address</S.StyledLabel>
          <S.TextArea name="address" placeholder="New York" />
          <S.StyledLabel>Role</S.StyledLabel>
          <S.StyledInput type="text" name="role" placeholder="Admin" />
          <S.StyledLabel>isActive?</S.StyledLabel>
          <S.SelectStatus>
            <S.StyledOptions value="general">Choose Satus</S.StyledOptions>
            <S.StyledOptions value="active">Active</S.StyledOptions>
            <S.StyledOptions value="inactive">Inactive</S.StyledOptions>
          </S.SelectStatus>
        </S.StyledForm>
        <S.ButtonContainer>
          <S.StyledButton>Submit</S.StyledButton>
        </S.ButtonContainer>
      </S.FormContainer>
    </S.Main>
  );
}
