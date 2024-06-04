import styled from "styled-components";

export const Main = styled.main`
  background-color: var(--bgSoft);
  padding: 20px;
  border-radius: 10px;
`;

export const Title = styled.text`
  margin-bottom: 20px;
  font-weight: 200;
  color: var(--textSoft);
`;

export const TrTable = styled.table`
  width: 100%;
`;
export const TrTd = styled.td`
  padding: 10px;
`;

export const TrTr = styled.tr`
  padding: 10px;
`;

export const User = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const TrThead = styled.thead``;

export const TBody = styled.tbody``;

export const PendingSpan = styled.span`
  color: yellow;
`;

export const CancelledSpan = styled.span`
  color: red;
`;

export const DoneSpan = styled.span`
  color: green;
`;
