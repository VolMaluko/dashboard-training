import styled from "styled-components";

export const Main = styled.main `
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
`

export const FormContainer = styled.form `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 500px;
    height: 500px;
    background-color: var(--bgSoft);
    border-radius: 10px;
    padding: 50px;
    gap: 30px;
`

export const StyledLabel = styled.label `
    font-size: 25px;
    font-weight: bold;
`

export const StyledInput = styled.input `
    width: 100%;
    background-color: var(--bg);
    color: var(--text);
    padding: 30px;
    border: 2px solid #2e374a;
    border-radius: 5px;
    :placeholder{
        text-align: center;
    }
`

export const StyledButton = styled.button `
    background-color: teal;
    border-radius: 5px;
    color: var(--text);
    border: none;
    cursor: pointer;
    padding: 30px;
    width: 100%;
`