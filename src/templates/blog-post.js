import * as React from "react"
import { Link, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { OutboundLink } from "gatsby-plugin-google-gtag"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import TimeToRead from "../utils/timeToRead"
import Quotes from "../components/Quotes"
import { GatsbyImage } from "gatsby-plugin-image"

const GITHUB_USERNAME = "AnilSeervi"
const GITHUB_REPO_NAME = "Blog"

const BlogPostTemplate = ({ data, location, pageContext }) => {
  const post = data.mdx
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const siteUrl = data.site.siteMetadata?.siteUrl
  const { previous, next } = data
  const editUrl = `https://github.com/${GITHUB_USERNAME}/${GITHUB_REPO_NAME}/edit/master/content/${post.fileAbsolutePath.slice(
    post.fileAbsolutePath.indexOf("blog")
  )}`

  return (
    <Layout location={location} title={siteTitle}>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
        ogThumb={siteUrl.concat(
          post.frontmatter.ogThumb.childImageSharp.gatsbyImageData.images
            .fallback.src
        )}
        path={location.pathname}
      />
      <main>
        <article
          className="blog-post"
          itemScope
          itemType="http://schema.org/Article"
        >
          <header>
            <h1 itemProp="headline">{post.frontmatter.title}</h1>
            <p>
              <time dateTime={post.frontmatter.dateTime}>
                {post.frontmatter.date}
              </time>{" "}
              &#8226; {pageContext.timeToRead} min read
              <TimeToRead
                timeToRead={pageContext.timeToRead}
                style={{ marginBottom: -2, marginLeft: 8 }}
              />
            </p>
            <GatsbyImage
              image={post.frontmatter.banner.childImageSharp.gatsbyImageData}
              className="blog-post_banner"
              alt={post.frontmatter.description}
            />
          </header>
          <section>
            <MDXRenderer>{post.body}</MDXRenderer>
          </section>
          <footer>
            <OutboundLink
              href={editUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Edit on GitHub
            </OutboundLink>
          </footer>
        </article>
      </main>
      <aside className="nav-aside">
        <hr />
        <Bio />
        <nav className="blog-post-nav">
          <ul>
            {previous && (
              <li className="blog-post-nav__previous">
                <Link to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              </li>
            )}
            {next && (
              <li className="blog-post-nav__next">
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </aside>
      <footer>
        <Quotes />
      </footer>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
        siteUrl
      }
    }
    mdx(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        dateTime: date
        description
        ogThumb {
          childImageSharp {
            gatsbyImageData(layout: FIXED, height: 630, width: 1200)
          }
        }
        banner: ogThumb {
          childImageSharp {
            gatsbyImageData(
              layout: FULL_WIDTH
              quality: 100
              placeholder: BLURRED
              aspectRatio: 1.91
            )
          }
        }
      }
      fileAbsolutePath
    }
    previous: mdx(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: mdx(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
