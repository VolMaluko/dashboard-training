import styled from "styled-components";

export const Main = styled.main`
  position: sticky;
  top: 40px;
`;

export const UserImage = styled.div`
  display: flex;
  gap: 1.25rem;
  object-fit: cover;
  margin-bottom: 20px;
`;

export const UserDetail = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Username = styled.div`
  margin-bottom: 0.25rem;
  font-weight: 600;
  font-size: 22px;  
`;

export const UserType = styled.div`
  margin-bottom: 1.25rem;
  font-size: 16px;
  color: var(--textSoft);
`;

export const CategoryList = styled.ul`
  list-style: none;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
`;

export const ItemList = styled.li`
  display: flex;
  flex-direction: column;
  list-style: none;
  font-weight: 500;
  row-gap: 0.3rem;
  &:first-child {
    margin-top: 0.5rem;
  }
`;

export const LogoutButton = styled.button`
  padding: 1rem;
  margin: 5px 0px;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  cursor: pointer;
  border-radius: 0.8rem;
  background: none;
  border: none;
  color: white;
`;
