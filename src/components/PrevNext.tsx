import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import kebabCase from 'lodash/kebabCase';
import Post from '../models/Post';

const Wrapper = styled.div`
  display: flex;
  margin: 6rem auto 0 auto;
  a {
    color: ${props => props.theme.colors.grey.light};
    display: flex;
    align-items: center;
  }
  a:hover {
    color: ${props => props.theme.colors.blue.light};
  }
  justify-items: center;
`;

const Prev = styled.div`
  span {
    text-transform: uppercase;
    font-size: 0.8rem;
    color: ${props => props.theme.colors.grey.light};
  }
`;

const Next = styled.div`
  margin-left: auto;
  text-align: right;
  span {
    text-transform: uppercase;
    font-size: 0.8rem;
    color: ${props => props.theme.colors.grey.light};
  }
`;

interface Props {
  next: Post;
  prev: Post;
}

export const PrevNext: FunctionComponent<Props> = ({ prev, next }) => (
  <Wrapper>
    {prev && (
      <Prev>
        <span>Previous</span>
        <Link to={`/project/${kebabCase(prev.frontmatter.title)}`}>
          {prev.frontmatter.title}
        </Link>
      </Prev>
    )}
    {next && (
      <Next>
        <span>Next</span>
        <Link to={`/project/${kebabCase(next.frontmatter.title)}`}>
          {next.frontmatter.title}
        </Link>
      </Next>
    )}
  </Wrapper>
);
