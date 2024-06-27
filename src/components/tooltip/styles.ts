import styled from "styled-components";

export const TooltipText = styled.div`
color: #fff;
display: flex;
cursor: pointer;
width: 15px;
height: 15px;
justify-content: center;
align-items: center;
`

export const TooltipBox = styled.div `
opacity: 0;
top: -30px;
position: absolute;
color: #000;
background-color: #B1B1B1;
border-radius: 5px;
transition: all 0.5s ease-in-out;
z-index: -1;
white-space: nowrap;
font-size: 12px;
padding: 4px 8px;
`

export const TooltipWrapper = styled.div `
display: flex;
justify-content: center;
text-align: center;
border-radius: 5px;
position: relative;
padding: 0.6rem;

& ${TooltipText}:hover + ${TooltipBox}{
    opacity: 1;
    }
`