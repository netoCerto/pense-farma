import styled, { createGlobalStyle, css } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

*,
*:before,
*:after {
    box-sizing: inherit;
    padding: 0;
    margin: 0;
}
  html {
    scroll-behavior: smooth;
    height: 100%;
    display: table;
    width: 100%;
  }
  body {
    ${({ theme }) => css`
      font-family: sans-serif;
      height: 100%;
      background: ${theme.colors.red};
      position: relative;
      margin: 0;
      min-height: 100%;
    `}
  }
  h1, h2, h3, h4, h5, h6, a {
    font-family: sans-serif;
  }

  a {
    text-decoration: none;
    font-weight: bold;
  }


  #root {
    position: relative;
    display: contents;
  }
`;

export const Container = styled.div`
  ${({ theme }) => css`
    width: 80%;
    margin: 0 auto;
    height: 100%;
    min-height: 100%;
    display: flex;
    /* align-items: center; */
    justify-content: center;
    flex-wrap: wrap;
    padding-bottom: 80px;
    box-sizing: border-box;
  `}
`;

export const BackgroundImg = styled.div`
  ${({ bgImg, theme }) => css`
    background-image: url(${bgImg});
    background-repeat: no-repeat;
    background-position: center bottom;
    background-size: contain;
    background-color: #cc1719;
    width: 100%;
    height: 100vh;
    padding-bottom: 150px;
  `}
`;

export const BoxBottom = styled.div`
  ${({ bgImg }) => css`
    margin: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999;
    position: relative;
  `}
`;

export const ContentImagem = styled.div`
  ${() => css`
    display: block;
    margin-top: -40px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999;
    position: relative;
    width: 50%;
  `}
`;
export const Imagem = styled.img`
  ${() => css``}
`;

export const Footer = styled.footer`
  ${({ bgImg }) => css`
    max-width: 100%;
    background: url(${bgImg}) no-repeat bottom;
    background-size: 100%;
    width: 100%;
    height: auto;
    min-height: 700px;
    position: absolute;
    bottom: 0;
    left: 0;

    @media (max-width: 2440px) {
      footer {
        height: 720px;
      }
    }
    @media (max-width: 1600px) {
      footer {
        height: 630px;
      }
    }
    @media (max-width: 1440px) {
      footer {
        height: 550px;
      }
    }
    @media (max-width: 1280px) {
      footer {
        height: 450px;
      }
    }
    @media (max-width: 1100px) {
      footer {
        height: 380px;
      }
    }
    @media (max-width: 991px) {
      footer {
        height: 350px;
      }
    }
    @media (max-width: 767px) {
      footer {
        height: 280px;
        min-height: 200px;
      }
    }
    @media (max-width: 600px) {
      footer {
        height: 220px;
        min-height: 190px;
      }
    }
    @media (max-width: 440px) {
      footer {
        height: 150px;
        min-height: 150px;
      }
    }
  `}
`;
