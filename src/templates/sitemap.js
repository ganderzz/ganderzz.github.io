import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";

export default function SiteMap({ data }) {
  const { allMarkdownRemark } = data;
  const { edges } = allMarkdownRemark;

  const tagsList = edges.reduce((accu, edge) => {
    const tags = edge.node.frontmatter.tags;

    const formatted = tags.reduce((subAccu, tag) => {
      return {
        ...subAccu,
        [tag]: accu[tag] && accu[tag] >= 0 ? accu[tag] + 1 : 1
      };
    }, {});

    return {
      ...accu,
      ...formatted
    };
  }, {});

  return (
    <Layout>
      <SEO description="" title="Sitemap" keywords={[]} />

      <h3 className="mt-0 mb-16 bg-dark-brown text-white p-6">Sitemap</h3>

      {Object.keys(tagsList).map(key => (
        <Link
          key={key}
          to={`/tags/${key}`}
          className="focus:border-2 focus:border-grey-dark hover:opacity-100 hover:bg-grey-darker hover:text-white text-base rounded bg-grey-darkest p-2 text-white no-underline font-semibold mr-2 opacity-75"
        >
          {key} ({tagsList[key] || 0})
        </Link>
      ))}
    </Layout>
  );
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            tags
          }
        }
      }
    }
  }
`;
