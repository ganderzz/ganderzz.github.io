import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";
import Header from "./header";
import { Footer } from "./footer";

import "../styles/main.css";

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <main className="container mx-auto bg-white -mt-32 sm:p-16 p-6 pt-10 text-2xl border-t-4 border-header-blue-light">
          <section>{children}</section>

          <Footer />
        </main>
      </>
    )}
  />
);

export default Layout;