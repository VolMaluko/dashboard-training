"use client";
import * as S from "./styles";
import { Main } from "./styles";
import SideBar from "./../../components/dashboard/sidebar/page";
import NavBar from "./../../components/dashboard/navbar/page";

export default function Layout({ children }) {
  return (
    <S.Main>
      <S.Menu>
        <SideBar />
      </S.Menu>
      <S.Content>
        <NavBar />
        {children}
      </S.Content>
    </S.Main>
  );
}
