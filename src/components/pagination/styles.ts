import styled from "styled-components";

export const Container = styled.main `
padding: 10px;
display: flex;
justify-content: space-between;
`;


export const ButtonPrevNex = styled.button `
padding: 5px 10px;
cursor: pointer;
ButtonContainer:disabled{
cursor: not-allowed;
}
`;