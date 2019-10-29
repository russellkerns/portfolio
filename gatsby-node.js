const path = require('path');
const _ = require('lodash');
const config = require('./config/SiteConfig').default;

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === 'MarkdownRemark' && _.has(node, 'frontmatter') && _.has(node.frontmatter, 'title')) {
    const slug = `${_.kebabCase(node.frontmatter.title)}`;
    createNodeField({ node, name: 'slug', value: slug });
  }
};

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  });
};

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  const postTemplate = path.resolve(`src/templates/Post.tsx`);

  return graphql(`
    {
      allMarkdownRemark(
        filter: { frontmatter: { category: { eq: "Projects" } } }
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 10000
      ) {
        edges {
          node {
            excerpt(pruneLength: 250)
            html
            id
            fields {
              slug
            }
            frontmatter {
              date
              title
              category
              tags
              banner
            }
            timeToRead
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }
    const posts = result.data.allMarkdownRemark.edges;
    const postsPerPage = config.POST_PER_PAGE;
    const numPages = Math.ceil(posts.length / postsPerPage);

    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `/project` : `/project/${i + 1}`,
        component: path.resolve('./src/templates/Project.tsx'),
        context: {
          limit: postsPerPage,
          skip: i * postsPerPage,
          totalPages: numPages,
          currentPage: i + 1,
        },
      });
    });

    posts.forEach(({ node }, index) => {
      const next = index === 0 ? null : posts[index - 1].node;
      const prev = index === posts.length - 1 ? null : posts[index + 1].node;

      createPage({
        path: `/project/${_.kebabCase(node.frontmatter.title)}`,
        component: postTemplate,
        context: {
          slug: _.kebabCase(node.frontmatter.title),
          prev,
          next,
        },
      });
    });
  });
};
