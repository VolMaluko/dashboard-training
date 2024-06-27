import styled from "styled-components";

export const Main = styled.main`
    display: flex;
    gap: 3rem;    
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
    padding: 1.3rem;
    height: max-content;
`

export const ImageContainer = styled.div `
    height: 280px;
    position: relative;
    border-radius: 10px;
    overflow: hidden;
    margin-bottom: 20px;
`

export const FormContainer = styled.div `
    flex: 3;
    background-color: var(--bgSoft);
    border-radius: 10px;
    padding: 20px;
`

export const StyledForm = styled.form `
    display: flex;
    flex-direction: column;
    padding: 20px;

:focus{
    outline: none;
}
:hover{
    outline: none;
}
`

export const StyledLabel = styled.label `
   font-size: 12px;
`

export const StyledInput = styled.input `
   height: 25px;
   border-radius: 5px;
   background-color: var(--bg);
   border: 2px solid #2e374a;
   color: var(--text);
   padding: 20px;
   margin: 0.8rem 0;
`

export const TextArea = styled.textarea `
   height: 100px;
   border-radius: 5px;
   background-color: var(--bg);
   border: 2px solid #2e374a;
   color: var(--text);
   padding: 20px;
   margin: 0.8rem 0;
`
export const ButtonContainer = styled.div`
   display: flex;
   justify-content: center;
   width: 100%;
`

export const StyledButton = styled.button `
   width: 100%;
   height: 48px;
   margin-top: 0.8rem;
   background-color: teal;
   border-radius: 5px;
   color: var(--text);
   border: none;
   cursor: pointer;
`

export const SelectStatus = styled.select `
   width: 100%;
   height: 38px;
   border-radius: 5px;
   background-color: var(--bg);
   border: 2px solid #2e374a;
   color: var(--text);
   margin: 0.8rem 0;

   :focus{
   outline: none;
   }
   :hover{
   outline: none;
   }
`

export const StyledOptions = styled.option`
   color: var(--text);
`