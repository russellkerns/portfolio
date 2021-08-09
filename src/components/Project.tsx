import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import { Subline } from './Subline';

const Post = styled.article`
  display: flex;
  flex-direction: column;
  margin-top: 3.5rem;
  margin-bottom: 3.5rem;
`;

const Title = styled.h2`
  position: relative;
  text-shadow: 0 12px 30px rgba(0, 0, 0, 0.3);
  margin-bottom: 0.75rem;
`;
interface Props {
  title: string;
  date: string;
  excerpt?: string;
  slug?: string;
  timeToRead?: number;
  category: string;
}

export const Project: FunctionComponent<Props> = ({ title, date }) => (
  <Post>
    <Title>
      <AniLink style={{ fontSize: '1.5rem' }} swipe to="/projects">
        {title}
      </AniLink>
    </Title>
    <Subline>{date}</Subline>
  </Post>
);
