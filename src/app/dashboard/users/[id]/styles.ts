import styled from "styled-components";

export const Main = styled.main`
    display: flex;
    gap: 2rem;    
    margin-top: 1.2rem;
`

export const InfoContainer = styled.div `
    flex: 1;
    flex-direction: column;
    align-items: center;
    row-gap: 1rem;
    background-color: var(--bgSoft);
    padding: 1.2rem;
    border-radius: 5px;
`

export const ImageContainer = styled.div `
    width: 100%;
    height: 300px;
    position: relative;
    border-radius: 10px;
    overflow: hidden;
`

export const FormContainer = styled.div `
    flex: 3;
    width: 100%;
`

export const StyledForm = styled.form `
    display: flex;
    flex-direction: column;
    gap: 0.7rem;
    flex-wrap: wrap;
    width: 100%;
    background-color: var(--bgSoft);
    border-radius: 5px;

:focus{
    outline: none;
}
:hover{
    outline: none;
}
`

export const StyledLabel = styled.label `


`

export const StyledInput = styled.input `

   outline: none;
   width: 50%;
   height: 25px;
   border-radius: 5px;
   background-color: transparent;
   border: 2px solid #2e374a;
   color: var(--text);
   padding: 30px;
`

export const TextArea = styled.textarea `
    height: 100px;

`