import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { darken, lighten } from 'polished';
import rgba from 'polished/lib/color/rgba';
import { media } from '../utils/media';
import config from '../../config/SiteConfig';
import theme from '../../config/Theme';

const HeaderWrapper: any = styled.header`
  position: relative;
  background: linear-gradient(
      -185deg,
      ${props => {
        return rgba(darken(0.1, props.theme.colors.grey.dark), 0.6);
      }},
      ${props => rgba(lighten(0.1, props.theme.colors.grey.dark), 1)}
    ),
    url(${(props: any) => props.banner}) no-repeat;
  background-size: cover;
  padding: 8rem 2rem 10rem;
  text-align: center;
  ::after {
    background: transparent url(/assets/mask.svg) no-repeat bottom left;
    background-size: 101%;
    bottom: -2px;
    content: '';
    display: block;
    height: 100%;
    left: 0;
    position: absolute;
    width: 100%;
  }
  @media ${media.tablet} {
    padding: 4rem 2rem 6rem;
  }
  @media ${media.phone} {
    padding: 1rem 0.5rem 2rem;
  }
`;

const Content = styled.div`
  position: relative;
  z-index: 999;
  a {
    color: white;
    &:hover {
      opacity: 0.85;
      color: ${theme.colors.blue.light};
    }
  }
`;

interface Props {
  children: any;
  banner?: string;
}

export const Header: FunctionComponent<Props> = ({ banner, children }) => (
  <HeaderWrapper banner={banner || config.defaultBg}>
    <Content>{children}</Content>
  </HeaderWrapper>
);
