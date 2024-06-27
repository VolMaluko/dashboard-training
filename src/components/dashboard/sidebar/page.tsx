"use client";
import Image from "next/image";
import {
  MdAnalytics,
  MdAttachMoney,
  MdDashboard,
  MdHelpCenter,
  MdLogout,
  MdOutlineSettings,
  MdPeople,
  MdShoppingBag,
  MdSupervisedUserCircle,
  MdWork,
} from "react-icons/md";
import { MenuLink } from "./MenuLink";
import * as S from "./styles";

const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "Users",
        path: "/dashboard/users",
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "Products",
        path: "/dashboard/products",
        icon: <MdShoppingBag />,
      },
      {
        title: "Transactions",
        path: "/dashboard/transactions",
        icon: <MdAttachMoney />,
      },
    ],
  },
  {
    title: "Analytics",
    list: [
      {
        title: "Revenue",
        path: "/dashboard/revenue",
        icon: <MdWork />,
      },
      {
        title: "Reports",
        path: "/dashboard/reports",
        icon: <MdAnalytics />,
      },
      {
        title: "Teams",
        path: "/dashboard/teams",
        icon: <MdPeople />,
      },
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        path: "/dashboard/settings",
        icon: <MdOutlineSettings />,
      },
      {
        title: "Help",
        path: "/dashboard/help",
        icon: <MdHelpCenter />,
      },
    ],
  },
];

export default function SideBar() {
  return (
    <S.Main>
      <S.UserImage>
        <Image src="/user.png" alt="" width="50" height="50" />
        <S.UserDetail>
          <S.Username>Admin</S.Username>
          <S.UserType> Administrador </S.UserType>
        </S.UserDetail>
      </S.UserImage>

      <S.CategoryList>
        {menuItems.map((category) => (
          <S.ItemList key={category.title}>
            <span>{category.title}</span>
            {category.list.map((item) => (
              <MenuLink item={item} key={item.title} />
            ))}
          </S.ItemList>
        ))}
      </S.CategoryList>
      <S.LogoutButton>
        <MdLogout /> Logout
      </S.LogoutButton>
    </S.Main>
  );
}
