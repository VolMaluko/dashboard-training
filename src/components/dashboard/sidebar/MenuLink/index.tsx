"use client";
import { usePathname } from "next/navigation";
import * as S from "./styles";
// @ts-ignore
export function MenuLink({ item }) {
  const pathname = usePathname();
  return (
    <S.CustomLink href={item.path} isActive={pathname === item.path}>
      {item.icon}
      {item.title}
    </S.CustomLink>
  );
}
