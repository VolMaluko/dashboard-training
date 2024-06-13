import Image from "next/image";
import * as S from "./styles";

export default function Transactions() {
  return (
    <S.Main>
      <S.Title />
      <S.TrTable>
        <S.TrThead>
          <S.TrTr>
            <S.TrTd>Name</S.TrTd>
            <S.TrTd>Status</S.TrTd>
            <S.TrTd>Date</S.TrTd>
            <S.TrTd>Amount</S.TrTd>
          </S.TrTr>
        </S.TrThead>
        <S.TBody>
          <S.TrTr>
            <S.TrTd>
              <S.User>
                <Image src="/user.png" alt="" width={40} height={40} />
                John Doe
              </S.User>
            </S.TrTd>
            <S.TrTd>
              <S.PendingSpan>Pending</S.PendingSpan>
            </S.TrTd>
            <S.TrTd>25/08/2085</S.TrTd>
            <S.TrTd>R$25.000</S.TrTd>
          </S.TrTr>
          <S.TrTr>
            <S.TrTd>
              <S.User>
                <Image src="/user.png" alt="" width={40} height={40} />
                John Doe
              </S.User>
            </S.TrTd>
            <S.TrTd>
              <S.DoneSpan>Done</S.DoneSpan>
            </S.TrTd>
            <S.TrTd>25/08/2085</S.TrTd>
            <S.TrTd>R$25.000</S.TrTd>
          </S.TrTr>
          <S.TrTr>
            <S.TrTd>
              <S.User>
                <Image src="/user.png" alt="" width={40} height={40} />
                John Doe
              </S.User>
            </S.TrTd>
            <S.TrTd>
              <S.CancelledSpan>Cancelled</S.CancelledSpan>
            </S.TrTd>
            <S.TrTd>25/08/2085</S.TrTd>
            <S.TrTd>R$25.000</S.TrTd>
          </S.TrTr>
        </S.TBody>
      </S.TrTable>
    </S.Main>
  );
}
