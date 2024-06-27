import styled from "styled-components";

export const Formulary = styled.form `
   display: flex;
   width: 800;
   gap: 0.7rem;
   flex-wrap: wrap;
   justify-content: center;
   align-items: center;
   background-color: transparent;
`
export const AboveInputs = styled.div `
   display: flex;
   flex-direction: column;
   width: 100%;
   justify-content: center;
`
export const StyledInput = styled.input `
   outline: none;
   width: 100%;
   height: 25px;
   border-radius: 5px;
   background-color: transparent;
   border: 2px solid #2e374a;
   color: var(--text);
   padding: 30px;
`

export const ButtonContainer = styled.div`
   display: flex;
   justify-content: center;
   width: 100%;
`

export const StyledButton = styled.button `
   width: 70%;
   height: 48px;
   margin-top: 0.8rem;
   background-color: teal;
   border-radius: 5px;
   color: var(--text);
   border: none;
   cursor: pointer;
`

export const StyledOptions = styled.option`
   width: 45%;
   color: black;

`
export const SelectStatus = styled.select `
   width: 45%;
   height: 38px;
   border-radius: 5px;
   background-color: transparent;
   border: 2px solid #2e374a;
   color: var(--text);
   :focus{
   outline: none;
   }
   :hover{
   outline: none;
   }
`
export const ProductDescription = styled.textarea`
   margin-top: 0.8rem;
   margin-bottom: 0.8rem;
   width: 100%;  
`

export const DescriptionContainer = styled.div `
   display: flex;
   justify-content: center;
   width: 400px;
   height: 250px;
   
::placeholder{ 
   text-align: center;
   justify-content: center;
   align-items: center;
   align-self: center;
}
`
