import styled from "styled-components";


export const Container = styled.main `
  display: flex;
  align-items: center;
  gap: 0.8rem;
  background-color: #2e374a;
  padding: 0.8rem;
  border-radius: 0.8rem;
  textarea:focus, input:focus{
    outline: none;
}
`;

export const StyledInput = styled.input `
display: flex;
background-color: transparent;
border: none;
color: var(--text);
box-sizing: border-box;
box-shadow: none; 
`;

