import styled from "styled-components";

export const Main = styled.main`
position: fixed;
width: 350px;

`;

export const Container = styled.div  `
position: relative;
background: linear-gradient(to top, #182237, #253352);
padding: 20px 24px;
border-radius: 10px;
margin-bottom: 20px;

`;

export const ImageContainer = styled.div `
position: absolute;
bottom: 0;
right: 0;
width: 50%;
height: 50%;
opacity: 0.2;
object-fit: contain;
`;

export const StyledTexts = styled.text`
display: flex;
flex-direction: column;
gap: 24px;
`;

export const Notification = styled.span`
font-weight: bold;
`;

export const Title = styled.h3`
font-weight: 500;
font-size: 12px;
color: var(--textSoft);
`;

export const Subtitle = styled.span`

`;

export const Description = styled.p`

`;

export const Button = styled.button`
padding: 10px;
display: flex;
align-items: center;
gap: 10px;
background-color: #5d57c9;
border-radius: 10px;
cursor: pointer;
width: max-content;
color: white;
border: transparent;
`;