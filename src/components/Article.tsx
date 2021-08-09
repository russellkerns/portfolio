import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import _ from 'lodash';
import { Subline } from './Subline';
import TechWidget from './TechWidget';
import SocialButtons from './SocialButtons';

const Post = styled.article`
  display: flex;
  flex-direction: column;
  margin-top: 3.5rem;
  margin-bottom: 3.5rem;
  width: 50%;
  @media (max-width: 900px) {
    width: 20rem;
  }
  @media (max-width: 400px) {
    width: 16.5rem;
  }
`;

const Title = styled.h2`
  position: relative;
  text-shadow: 0 12px 30px rgba(0, 0, 0, 0.3);
  margin: 0;
`;

const Excerpt = styled.p`
  grid-column: -1 / 1;
  margin-top: 1rem;
  margin-bottom: 1rem;
  @media (max-width: 900px) {
    width: 100%;
  }
`;

const WidgetContainer = styled.div`
  display: flex;
  max-width: 30rem;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

const ButtonContainter = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.75rem;
`;

interface Props {
  title: string;
  date: string;
  excerpt?: string;
  slug?: string;
  timeToRead?: number;
  category: string;
  tech?: string[];
  youtube?: string;
  gitHub?: string;
}

export const Article: FunctionComponent<Props> = ({
  title,
  date,
  excerpt,
  category,
  tech,
  youtube,
  gitHub,
}) => (
  <Post>
    <ButtonContainter>
      <Title>
        <div style={{ fontSize: '1.5rem', margin: 0 }}>{title}</div>
      </Title>
      <SocialButtons youtube={youtube} gitHub={gitHub} />
    </ButtonContainter>
    <Subline>
      {date} &mdash; In
      <AniLink to={`/project`} paintDrip color="black">
        {' '}
        {category}
      </AniLink>
    </Subline>
    <Excerpt>{excerpt}</Excerpt>
    <WidgetContainer>
      {tech!!.length
        ? tech!!.map((techNode: any, index) => {
            return <TechWidget techName={techNode} key={index} />;
          })
        : null}
    </WidgetContainer>
  </Post>
);
