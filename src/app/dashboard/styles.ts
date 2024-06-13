"use client";
import styled from "styled-components";

export const Main = styled.main`
@media screen and (min-width: 769px) {
  display: flex;
  width: 100%;
}
`;

export const MenuSide = styled.div`
  flex: 1;
  background-color: var(--bgSoft);
  padding: 1.25rem;
  min-height: 100vh;
 `;

export const Content = styled.div`
 @media screen and (min-width: 769px) {
  flex: 4;
  padding: 1.25rem;
} 
`;

// Dashboard //

export const Wrapper = styled.main`
  display: flex;
  gap: 20px;
  margin-top: 20px;

`;

export const MainDb = styled.div`
  display: flex;
  flex: 3;
  flex-direction: column;
  gap: 20px;
`;


export const Cards = styled.div`
  display: flex;
  gap: 20px;
  justify-content: space-between;
`;

export const SideBar = styled.div`
  flex: 1;
`; 
