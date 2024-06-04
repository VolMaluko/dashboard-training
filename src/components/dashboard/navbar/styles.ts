import styled from "styled-components";

export const Main = styled.main`
  padding: 1.25rem;
  border-radius: 0.8rem;
  background-color: var(--bgSoft);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavTitle = styled.div`
  color: var(--textSoft);
  font-weight: bold;
  text-transform: capitalize;
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
`;

export const Search = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  background-color: #2e374a;
  padding: 0.8rem;
  border-radius: 0.8rem;
`;

export const InputSearch = styled.input`
  display: flex;
  background-color: transparent;
  border: none;
  color: var(--text);
`;
