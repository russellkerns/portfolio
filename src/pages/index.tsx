import React from 'react';
import { graphql } from 'gatsby';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import styled from 'styled-components';
import { Layout, Wrapper, Button, Article, SocialIcons } from '../components';
import PageProps from '../models/PageProps';
import Helmet from 'react-helmet';
import config from '../../config/SiteConfig';
import { media } from '../utils/media';
import rgba from 'polished/lib/color/rgba';
import darken from 'polished/lib/color/darken';
import lighten from 'polished/lib/color/lighten';
import Img from 'gatsby-image';

const Homepage: any = styled.main`
  display: flex;
  height: 100vh;

  flex-direction: row;
  @media ${media.tablet} {
    height: 100%;
    flex-direction: column;
  }
  @media ${media.phone} {
    height: 100%;
    flex-direction: column;
  }
`;
const ProjectprojectPreviewContainer: any = styled.div`
  display: flex;
  justify-content: space-between;
`;
const AboutImg: any = styled.div`
  width: 9rem;
  heigt: 9rem;
  margin-left: -50px;
  margin-bottom: 1rem;
`;

const ImageAndIcons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const AboutFlex: any = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
`;
const GridRow: any = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props: any) =>
    props.background
      ? `linear-gradient(
      -185deg,
      ${rgba(darken(0.1, props.theme.colors.grey.dark), 0.7)},
      ${rgba(lighten(0.1, props.theme.colors.grey.dark), 1)}), url(/assets/bg.png) no-repeat`
      : null};
  background-size: cover;
  padding: 1rem 3rem;
  color: ${(props: any) => (props.background ? props.theme.colors.white : null)};
  h1 {
    color: ${(props: any) => (props.background ? props.theme.colors.white : null)};
  }
  @media ${media.tablet} {
    padding: 3rem 3rem;
  }
  @media ${media.phone} {
    padding: 2rem 1.5rem;
  }
`;

const HomepageContent: any = styled.div`
  margin-top: 5rem;
  max-width: 40rem;
  text-align: ${(props: any) => (props.center ? 'center' : 'left')};
`;

export default class IndexPage extends React.Component<PageProps> {
  public render() {
    const { data, theme } = this.props;
    const projectEdges = data.projects;
    const aboutImage = data.about!!.edges[0].node.frontmatter.featuredImage.childImageSharp.fluid;

    return (
      <Layout>
        <Wrapper fullWidth={true}>
          <Helmet title={`Homepage | ${config.siteTitle}`} />
          <Homepage>
            <GridRow background={true}>
              <HomepageContent center={true}>
                <img src={config.siteLogo} />
                <h1>
                  Hello, I'm <br />
                  Russell Kerns
                </h1>
                <p>I'm a fullstack developer and Musician</p>

                <AniLink paintDrip to="/project" color={'#72cc96'}>
                  <Button big>Projects</Button>
                </AniLink>
              </HomepageContent>
            </GridRow>
            <GridRow>
              <HomepageContent>
                <AboutFlex>
                  <ImageAndIcons>
                    <SocialIcons />
                    <AboutImg>
                      <Img fluid={aboutImage} style={{ borderRadius: '50%', border: 'solid #0000ff 2px' }} />
                    </AboutImg>
                    <div />
                  </ImageAndIcons>
                  <h2>About Me</h2>
                </AboutFlex>
                <div dangerouslySetInnerHTML={{ __html: data.about!!.edges[0].node.html }} />
                <hr />
                <ProjectprojectPreviewContainer>
                  <div>
                    <h3>Latest project</h3>
                    {projectEdges!!.edges.map((post: any) => (
                      <Article
                        title={post.node.frontmatter.title}
                        date={post.node.frontmatter.date}
                        excerpt={post.node.excerpt}
                        slug={post.node.fields.slug}
                        category={post.node.frontmatter.category}
                        key={post.node.fields.slug}
                        tech={[]}
                      />
                    ))}
                  </div>
                </ProjectprojectPreviewContainer>
              </HomepageContent>
            </GridRow>
          </Homepage>
        </Wrapper>
      </Layout>
    );
  }
}
export const IndexQuery = graphql`
  query {
    articles: allMarkdownRemark(
      filter: { frontmatter: { category: { eq: "projects" } } }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 1
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
          }
          timeToRead
        }
      }
    }
    about: allMarkdownRemark(filter: { frontmatter: { title: { eq: "about" } } }) {
      edges {
        node {
          frontmatter {
            title
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          html
        }
      }
    }
    projects: allMarkdownRemark(
      filter: { frontmatter: { category: { eq: "Projects" } } }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 1
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MM.DD.YYYY")
            category
          }
        }
      }
    }
  }
`;
