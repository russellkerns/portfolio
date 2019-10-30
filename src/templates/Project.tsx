import React from 'react';
import { Link, graphql } from 'gatsby';
import { Layout, Article, Wrapper, SectionTitle, Header, Content, Pagination } from '../components';
import Helmet from 'react-helmet';
import config from '../../config/SiteConfig';
import Img from 'gatsby-image';
import styled from 'styled-components';

interface Props {
  data: {
    allMarkdownRemark: any;
  };
  pageContext: {
    currentPage: number;
    totalPages: number;
  };
}

const ProjectContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ProjectImage = styled(Img)`
  border: solid #0000ff 2px;
  width: 20rem;
  height: 15rem;
  border-radius: 1rem;
  @media (max-width: 400px) {
    width: 15rem;
    height: 11rem;
  }
`;

export default class ProjectPage extends React.Component<Props> {
  public render() {
    const { currentPage, totalPages } = this.props.pageContext;

    const { data } = this.props;
    const { edges } = data.allMarkdownRemark;

    return (
      <Layout>
        <Helmet title={`project | ${config.siteTitle}`} />
        <Header>
          <Link to="/">{config.siteTitle}</Link>
          <SectionTitle uppercase={true}>Projects</SectionTitle>
        </Header>
        <Wrapper>
          <Content>
            {edges.map((post: any) => (
              <React.Fragment key={post.node.fields.slug}>
                <ProjectContainer>
                  <Article
                    title={post.node.frontmatter.title}
                    date={post.node.frontmatter.date}
                    excerpt={post.node.excerpt}
                    category={post.node.frontmatter.category}
                    tech={post.node.frontmatter.tech}
                    youtube={post.node.frontmatter.youtube}
                    gitHub={post.node.frontmatter.gitHub}
                  />
                  <ProjectImage fluid={post.node.frontmatter.featuredImage.childImageSharp.fluid} />
                </ProjectContainer>
              </React.Fragment>
            ))}

            <Pagination currentPage={currentPage} totalPages={totalPages} url={'project'} />
          </Content>
        </Wrapper>
      </Layout>
    );
  }
}
export const projectQuery = graphql`
  query($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      filter: { frontmatter: { category: { eq: "Projects" } } }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MM.DD.YYYY")
            category
            gitHub
            tech
            youtube
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          excerpt(pruneLength: 600)
          timeToRead
        }
      }
    }
  }
`;
