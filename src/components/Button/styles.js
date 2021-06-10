import styled, { css } from 'styled-components';
const borderRadius = (around) => css`
  border-radius: ${around ? '40px' : '10px'};
`;
export const ButtonContainer = styled.div`
  ${({ theme, colorDark, around, opacity }) => css`
    background: ${theme.colors.gray};
    display: inline-block;
    ${borderRadius(around)};
    clear: both;
    margin-right: 30px;
    opacity: ${opacity};
  `}
`;

export const ButtonText = styled.a`
  ${({ theme, colorDark, cutomPadding, size }) => css`
    display: flex;
    color: ${theme.colors.red};
    font-weight: 900;
    width: 350px;
    height: 100px;
    align-items: center;
    justify-content: center;
    padding: ${cutomPadding};
    font-size: ${size};
  `}
`;
