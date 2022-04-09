import * as React from "react"
import { Link, graphql } from "gatsby"
import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import TimeToRead from "../utils/timeToRead"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMdx.nodes

  React.useEffect(() => {

  }, [])

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Seo title="All posts" />
        <Bio />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }


  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Anil Seervi" />
      <Bio />
      <main>
        <ol style={{ listStyle: `none` }}>
          {posts.map(post => {
            const title = post.frontmatter.title || post.fields.slug
            const timeToRead = Math.round(post.wordCount.words / 150) || 1
            return (
              <li key={post.fields.slug}>
                <article
                  className="post-list-item"
                  itemScope
                  itemType="http://schema.org/Article"
                >
                  <header>
                    <h2>
                      <Link to={post.fields.slug} itemProp="url">
                        <span itemProp="headline">{title}</span>
                      </Link>
                    </h2>
                    <span style={{ display: 'flex' }}>
                      <small>{post.frontmatter.date} &#8226; {timeToRead} min read</small>
                      <TimeToRead timeToRead={timeToRead} />
                    </span>
                  </header>
                  <section>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: post.frontmatter.description || post.excerpt,
                      }}
                      itemProp="description"
                    />
                  </section>
                </article>
              </li>
            )
          })}
        </ol>
      </main>
      <footer className="main-footer">
        <div className="social-links">
          <a href="https://twitter.com/linASeervi/" target="_blank" rel="noopener noreferrer">twitter</a>
          &bull;
          <a href="https://github.com/AnilSeervi/" target="_blank" rel="noopener noreferrer">github</a>
        </div>
        <a href="/rss.xml" target="_blank" rel="noopener noreferrer">rss</a>
      </footer>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
        wordCount {
          words
        }
      }
    }
  }
`
