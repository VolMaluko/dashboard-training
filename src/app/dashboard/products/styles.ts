import Image from "next/image";
import styled from "styled-components";

export const Container = styled.main`
    background-color: var(--bgSoft);
    padding: 20px;
    border-radius: 10px;
    margin-top: 20px;

`;

export const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Button = styled.button `
    padding: 10px;
    background-color: #5d57c9;
    color: var(--text);
    border: none;
    border-radius: 5px;
    cursor: pointer;
`;

export const StyledTable = styled.table `
    width: 100%;
    `;

export const StyledThead = styled.thead `

`;

export const StyledTr = styled.tr`

`;

export const StyledTd = styled.td`
padding: 10px;
`;

export const StyledTBody = styled.tbody`

`;

export const ProductImage = styled.div`
display: flex;
gap: 10px;
align-items: center;
`;

export const StyledImage = styled(Image)`
border-radius: 50%;
object-fit: cover;
`;

export const ButtonWrapper = styled.div`
display: flex;
gap: 10px;
`;

export const ButtonView = styled.button`
padding: 5px 10px;
border-radius: 5px;
color: var(--text);
border: none;
cursor: pointer;
background-color: teal;
`;

export const ButtonDelete = styled.button`
padding: 5px 10px;
border-radius: 5px;
color: var(--text);
border: none;
cursor: pointer;
background-color: crimson;
`;