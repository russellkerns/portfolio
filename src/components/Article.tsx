import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
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
    width: 15rem;
  }
`;

const Title = styled.h2`
  position: relative;
  text-shadow: 0 12px 30px rgba(0, 0, 0, 0.3);
  margin: 0;
`;

const Initiale = styled.span`
  position: absolute;
  font-size: 3rem;
  transform: translate(-40%, -40%);
  opacity: 0.2;
  user-select: none;
  z-index: -1;
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

export class Article extends React.PureComponent<Props> {
  public render() {
    const { title, date, excerpt, category, tech, youtube, gitHub } = this.props;
    const firstChar = title.charAt(0);

    return (
      <Post>
        <ButtonContainter>
          <Title>
            <Initiale>{firstChar}</Initiale>
            <h3 style={{ fontSize: '1.5rem', margin: 0 }}>{title}</h3>
          </Title>
          <SocialButtons youtube={youtube} gitHub={gitHub} />
        </ButtonContainter>
        <Subline>
          {date} &mdash; In
          <Link to={`/project`}> {category}</Link>
        </Subline>
        <Excerpt>{excerpt}</Excerpt>
        <WidgetContainer>
          {tech!!.length
            ? tech!!.map((techNode: any) => {
                return <TechWidget techName={techNode} key={techNode.techName} />;
              })
            : null}
        </WidgetContainer>
      </Post>
    );
  }
}
