import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const LoginDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  background-color: var(--bgSoft);
`;

export const ImageWrapper = styled.div`
  display: flex;
  margin-left: 20px;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
  gap: 18px;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-right: 10px;
  white-space: nowrap;
`;

export const Buttons = styled.button`
  display: flex;
  padding: 6px 30px;
  border-radius: 20px;
  color: white;
  border: none;
  cursor: pointer;
  font-weight: bolder;
  background-color: transparent;
  gap: 10px;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease-in-out;
`;

export const ButtonLogin = styled.button`
  display: flex;
  padding: 6px 30px;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  background-color: white;
  font-weight: bolder;
  gap: 10px;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease-in-out;
`;

export const DifferentLink = styled(Link)`
  :hover {
    transition: all 0.5s ease-in-out;
    background-color: #bbe9ff;
  }
`;

export const Wrapper = styled.div`
  max-width: 100dvh;
  max-height: 100dvh;
`;
