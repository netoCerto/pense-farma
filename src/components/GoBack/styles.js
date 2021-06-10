import styled, { css } from 'styled-components';
const borderRadius = (around) => css`
  border-radius: ${around ? '40px' : '10px'};
`;
export const ButtonContainer = styled.div`
  ${({ theme, colorDark, around, opacity }) => css`
    position: fixed;
    top: 30px;
    left: 30px;
  `}
`;

export const ButtonText = styled.a`
  ${() => css``}
`;

export const Image = styled.img`
  ${() => css`
    width: 70px;
  `}
`;
