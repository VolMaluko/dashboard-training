"use client";
import globals from "../../styles/globals.css";
import Layout from "./layout";
import * as S from "./styles.ts";
import RightBar from "../../components/rightbar/index";
import Card from "../../components/card/index";
import Transactions from "../../components/transactions/index";
import Chart from "../../components/chart/index";

export default function Dashboard() {
  return (
    <S.Wrapper>
      <S.MainDb>
        <S.Cards>
          <Card />
          <Card />
          <Card />
        </S.Cards>
        <Transactions />
        <Chart />
      </S.MainDb>
      <S.SideBar>
        <RightBar />
      </S.SideBar>
    </S.Wrapper>
  );
}
