import styled, { css } from 'styled-components';
const borderRadius = (around) => css`
  border-radius: ${around ? '40px' : '10px'};
`;
export const ButtonContainer = styled.div`
  ${({ theme, colorDark, around, opacity }) => css`
    background: rgb(225, 225, 227);
    display: inline-block;
    box-shadow: 4px 4px 13px rgb(0 0 0 / 50%);
    border: 5px solid #e8e8e8;
    border-radius: 20px;
    clear: both;
    margin: 0 15px;
    opacity: ${opacity};
    background-image: linear-gradient(to right, #fefefe, #d6d6d6);
  `}
`;

export const ButtonText = styled.a`
  ${({ theme, colorDark, cutomPadding, size, customWidth }) => css`
    display: flex;
    color: ${theme.colors.red};
    font-weight: 900;
    width: ${customWidth};
    height: 100px;
    align-items: center;
    justify-content: center;
    padding: ${cutomPadding};
    font-size: ${size};
    text-align: center;
  `}
`;
