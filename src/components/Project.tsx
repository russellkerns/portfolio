import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import _ from 'lodash';
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

const Initiale = styled.span`
  position: absolute;
  font-size: 4rem;
  transform: translate(-50%, -50%);
  opacity: 0.2;
  user-select: none;
  z-index: -1;
`;

interface Props {
  title: string;
  date: string;
  excerpt?: string;
  slug?: string;
  timeToRead?: number;
  category: string;
}

export class Project extends React.PureComponent<Props> {
  public render() {
    const { title, date } = this.props;
    const firstChar = title.charAt(0);

    return (
      <Post>
        <Title>
          <Initiale>{firstChar}</Initiale>
          <Link style={{ fontSize: '1.5rem' }} to={`/projects`}>
            {title}
          </Link>
        </Title>
        <Subline>{date}</Subline>
      </Post>
    );
  }
}
