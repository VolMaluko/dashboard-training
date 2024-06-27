"use client";
import Pagination from "@/components/pagination";
import Search from "@/components/search";
import Link from "next/link";
import * as S from "./styles";
import ObjectBasicModal from "@/components/objectmodal";

const labels = [
  {
    type: "Name",
    example: "John Doe",
  },
  {
    type: "E-mail",
    example: "Johndoe@example.com",
  },
  {
    type: "Role",
    example: "Administrator",
  },
  {
    type: "Country",
    example: "Brazil",
  },
  {
    type: "Age",
    example: "35",
  },
  {
    type: "CPF",
    example: "111.111.111-11",
  },
  {
    type: "CEP",
    example: "11111-111",
  },
];

export default function UsersPage() {
  return (
    <S.Container>
      <S.Top>
        <Search placeholder="Search for a user" />
        <ObjectBasicModal
          labels={labels}
          placeholder={"Add New User"}
          title={"Add New User"}
          example={labels[0].example}
          type={labels[0].type}
        />
      </S.Top>

      <S.StyledTable>
        <S.StyledThead>
          <S.StyledTr>
            <S.StyledTd>Name</S.StyledTd>
            <S.StyledTd>Email</S.StyledTd>
            <S.StyledTd>Created At</S.StyledTd>
            <S.StyledTd>Role</S.StyledTd>
            <S.StyledTd>Status</S.StyledTd>
            <S.StyledTd>Action</S.StyledTd>
          </S.StyledTr>
        </S.StyledThead>

        <S.StyledTBody>
          <S.StyledTr>
            <S.StyledTd>
              <S.UserImage>
                <S.StyledImage src="/user.png" alt="" width={40} height={40} />
                John Doe
              </S.UserImage>
            </S.StyledTd>

            <S.StyledTd>johndoe@john.com</S.StyledTd>
            <S.StyledTd>69/69/6969</S.StyledTd>
            <S.StyledTd>Admin</S.StyledTd>
            <S.StyledTd>Active</S.StyledTd>

            <S.StyledTd>
              <S.ButtonWrapper>
                <Link href="users/${[id]}">
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
