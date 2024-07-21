import NavBar from "@/components/dashboard/navbar/page";
import SideBar from "./../../components/dashboard/sidebar/page";
import * as S from "./styles";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <S.Main>
      <S.MenuSide>
        <SideBar />
      </S.MenuSide>
      <S.Content>
        <NavBar />
        {children}
      </S.Content>
    </S.Main>
  );
}
