"use client";
import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex: 3;
`;

export const Menu = styled.div`
  flex: 1;
  background-color: var(--bgSoft);
  padding: 1.25rem;
`;

export const Content = styled.div`
  flex: 4;
  padding: 1.25rem;
`;

// Aqui inicia-se a estilização do dashboard em si //

export const MainDb = styled.main`
  display: flex;
  flex: 3;
  flex-direction: column;
  gap: 20px;
`;

export const Wrapper = styled.main`
  display: flex;
  gap: 20px;
  margin-top: 20px;
`;

export const Cards = styled.div`
  display: flex;
  gap: 20px;
  justify-content: space-between;
`;

export const SideBar = styled.div`
  display: flex;
`;
