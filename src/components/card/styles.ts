import styled from "styled-components";

export const Container = styled.main`
  background-color: var(--bgSoft);
  padding: 1.25rem;
  border-radius: 0.8rem;
  display: flex;
  cursor: pointer;
  gap: 1.25rem;
  width: 100%;
  transition: 0.3s ease-in-out;
  &:hover {
    background-color: rgba(46, 55, 74, 0.75);
  }
`;

export const Texts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

export const TitleSpan = styled.span`
  display: flex;
`;

export const NumberSpan = styled.span`
  display: flex;
  font-size: 24px;
  font-weight: 500;
`;

export const DetailSpan = styled.span`
  font-size: 14px;
  font-weight: 300;
`;

export const Positive = styled.span`
  color: lime;
`;
export const Negative = styled.span`
  color: red;
`;
