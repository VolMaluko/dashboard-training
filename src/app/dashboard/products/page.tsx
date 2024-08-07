"use client";
import BasicModal from "@/components/modal";
import Pagination from "@/components/pagination";
import Search from "@/components/search";
import Link from "next/link";
import * as S from "./styles";

export default function ProductsPage() {
  const labels = ["Title", "Stock", "Color", "Size"];
  const numerics = ["Price"];

  return (
    <S.Container>
      <S.Top>
        <Search placeholder="Search for a product" />

        <BasicModal
          placeholder={"Add New Product"}
          labels={labels}
          title={"Add New Product"}
          numerics={numerics}
        />
      </S.Top>

      <S.StyledTable>
        <S.StyledThead>
          <S.StyledTr>
            <S.StyledTd>Title</S.StyledTd>
            <S.StyledTd>Description</S.StyledTd>
            <S.StyledTd>Price</S.StyledTd>
            <S.StyledTd>Created At</S.StyledTd>
            <S.StyledTd>Stock</S.StyledTd>
            <S.StyledTd>Action</S.StyledTd>
          </S.StyledTr>
        </S.StyledThead>

        <S.StyledTBody>
          <S.StyledTr>
            <S.StyledTd>
              <S.ProductImage>
                <S.StyledImage
                  src="/no-product.png"
                  alt=""
                  width={40}
                  height={40}
                />
                Trident
              </S.ProductImage>
            </S.StyledTd>

            <S.StyledTd>Fresh and sweet</S.StyledTd>
            <S.StyledTd>R$ 5,98</S.StyledTd>
            <S.StyledTd>12/12/1212</S.StyledTd>
            <S.StyledTd>82</S.StyledTd>

            <S.StyledTd>
              <S.ButtonWrapper>
                <Link href="/dashboard/products/test">
                  <S.ButtonView>View</S.ButtonView>
                </Link>
                <Link href="/">
                  <S.ButtonDelete>Delete</S.ButtonDelete>
                </Link>
              </S.ButtonWrapper>
            </S.StyledTd>
          </S.StyledTr>
        </S.StyledTBody>
      </S.StyledTable>
      <Pagination />
    </S.Container>
  );
}
