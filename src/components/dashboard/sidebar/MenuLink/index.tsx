"use client";
import Link from "next/link";
import * as S from "./styles";
import page from "./page";
import { usePathname } from "next/navigation";

export function MenuLink({ item }) {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <S.CustomLink href={item.path} isActive={pathname === item.path}>
      {item.icon}
      {item.title}
    </S.CustomLink>
  );
}
