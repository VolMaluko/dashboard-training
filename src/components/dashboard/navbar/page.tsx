"use client";
import { usePathname } from "next/navigation";
import {
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch,
} from "react-icons/md";
import * as S from "./styles";

export default function NavBar() {
  const pathname = usePathname();

  return (
    <S.Main>
      <S.NavTitle>{pathname.split("/").pop()}</S.NavTitle>
      <S.Menu>
        <S.Search>
          <MdSearch />
          <S.InputSearch type="text" placeholder="Search..." />
        </S.Search>
        <MdOutlineChat size={20} />
        <MdNotifications size={20} />
        <MdPublic size={20} />
      </S.Menu>
    </S.Main>
  );
}
