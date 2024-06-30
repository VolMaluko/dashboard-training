import Pagination from "@/components/pagination";
import Search from "@/components/search";
import Link from "next/link";
import * as S from "./styles";
import ObjectBasicModal from "@/components/objectmodal";
import { fetchUsers } from "@/lib/data";

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
    example: "123.456.789-10",
  },
  {
    type: "CEP",
    example: "11111-111",
  },
];

export default async function UsersPage() {
  const users = await fetchUsers();
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
          {users.map((user) => (
            <S.StyledTr key={user.id}>
              <S.StyledTd>
                <S.UserImage>
                  <S.StyledImage
                    src={user.img || "/user.png"}
                    alt="avatar-img"
                    width={40}
                    height={40}
                  />
                  {user.username}
                </S.UserImage>
              </S.StyledTd>

              <S.StyledTd>{user.email}</S.StyledTd>
              <S.StyledTd>{user.createdAt?.toString().slice(4, 16)}</S.StyledTd>
              <S.StyledTd>{user.isAdmin ? "Admin" : "Client"}</S.StyledTd>
              <S.StyledTd>{user.isActive ? "Active" : "Inactive"}</S.StyledTd>

              <S.StyledTd>
                <S.ButtonWrapper>
                  <Link href={`/dashboard/users/${user.id}`}>
                    <S.ButtonView>View</S.ButtonView>
                  </Link>
                  <Link href="/">
                    <S.ButtonDelete>Delete</S.ButtonDelete>
                  </Link>
                </S.ButtonWrapper>
              </S.StyledTd>
            </S.StyledTr>
          ))}
        </S.StyledTBody>
      </S.StyledTable>
      <Pagination />
    </S.Container>
  );
}
