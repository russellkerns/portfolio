import React, { FunctionComponent } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import theme from '../../config/Theme';
import { media } from '../utils/media';
import './layout.scss';

const GlobalStyle = createGlobalStyle`
  html{
    font-size: 100%
  }
  ::selection {
    color: ${theme.colors.blue.light};
    background: ${theme.colors.blue.dark};
  }
  body {
    background: ${theme.colors.bg};
    font-size: 90%;
    color: ${theme.colors.grey.default};
    @media ${media.phone} {
      font-size: 14px;
    }

  }
  a {
    color: ${theme.colors.grey.dark};
    text-decoration: none;
    transition: all ${theme.transitions.normal};
  }
  a:hover {
    color: ${theme.colors.blue.light};
  }
  h1, h2, h3, h4 {
    color: ${theme.colors.grey.dark};

  }
  blockquote {
    font-style: italic;
    position: relative;
  }

  blockquote:before {
    content: "";
    position: absolute;
    background: ${theme.colors.blue.dark};
    height: 100%;
    width: 6px;
    margin-left: -1.6rem;
  }
  label {
    margin-bottom: .5rem;
    color: ${theme.colors.grey.dark};
  }
  input, textarea {
    border-radius: .5rem;
    border: none;
    background: rgba(0, 0, 0, 0.05);
    padding: .25rem 1rem;
    &:focus {
      outline: none;
    }
  }
  .textRight {
    text-align:right;
  }
`;

const Footer = styled.footer`
  text-align: center;
  padding: 3rem 0;
  span {
    font-size: 0.75rem;
  }
`;

export const Layout: FunctionComponent<{}> = ({ children }) => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          buildTime(formatString: "MM.DD.YYYY")
        }
      }
    `}
    render={data => (
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          {children}
          <Footer>
            <span>Last build: {data.site.buildTime}</span>
          </Footer>
        </>
      </ThemeProvider>
    )}
  />
);
