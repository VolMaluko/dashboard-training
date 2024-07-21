import Card from "../../components/card/index";
import Chart from "../../components/chart/index";
import RightBar from "../../components/rightbar/index";
import Transactions from "../../components/transactions/index";
import * as S from "./styles";

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
