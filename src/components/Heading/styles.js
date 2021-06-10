import styled, { css } from 'styled-components';

const titleSize = {
  small: (theme) => css`
    font-size: ${theme.font.sizes.medium};
  `,
  medium: (theme) => css`
    font-size: ${theme.font.sizes.large};
  `,
  big: (theme) => css`
    font-size: ${theme.font.sizes.xlarge};
  `,
  huge: (theme) => css`
    font-size: ${theme.font.sizes.xhuge};
  `,
};

const titleCase = (uppercase) => css`
  text-transform: ${uppercase ? 'uppercase' : 'none'};
`;

const titleBot = (bottom) => css`
  bottom: 0;
`;

export const Title = styled.h1`
  ${({
    theme,
    colorDark,
    size,
    uppercase,
    marginTop,
    paddingBottom,
    width,
    bottom,
  }) => css`
    display: block;
    color: ${theme.colors.gray};
    ${titleSize[size](theme)};
    ${titleCase(uppercase)};
    margin-top: ${marginTop};
    padding-bottom: ${paddingBottom};
    width: ${width};
    text-align: center;
    ${titleBot(bottom)};
  `}
`;
