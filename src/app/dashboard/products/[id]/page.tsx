"use client";
import Image from "next/image";
import * as S from "./styles";

export default function SingleProductPage() {
  return (
    <S.Main>
      <S.InfoContainer>
        <S.ImageContainer>
          <Image src="/no-product.png" alt="" fill />
        </S.ImageContainer>
        Trident
      </S.InfoContainer>
      <S.FormContainer>
        <S.StyledForm>
          <S.StyledLabel>Title</S.StyledLabel>
          <S.StyledInput type="text" name="title" placeholder="product" />
          <S.StyledLabel>Stock</S.StyledLabel>
          <S.StyledInput type="text" name="stock" placeholder="6580" />
          <S.StyledLabel>color</S.StyledLabel>
          <S.StyledInput type="text" name="color" placeholder="light blue" />
          <S.StyledLabel>Size (in centimeters)</S.StyledLabel>
          <S.StyledInput type="text" name="size" placeholder="250" />
          <S.StyledLabel>Price</S.StyledLabel>
          <S.StyledInput type="number" name="price" placeholder="R$350,58" />
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
