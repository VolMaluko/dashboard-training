"use client";
import styled from "styled-components";
import Link from "next/link";

interface ICustomLink {
  isActive: boolean;
}

export const CustomLink = styled(Link)<ICustomLink>`
  display: flex;
  padding: 0.8rem 1rem;
  align-items: center;
  gap: 0.6rem;
  border-radius: 8px;
  transition: 0.3s ease-in-out;
  background-color: ${(props) => (props.isActive ? "#2e374a" : "transparent")};
  &:hover {
    background-color: rgba(46, 55, 74, 0.75);
  }
`;
