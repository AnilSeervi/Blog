/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const Seo = ({ description, lang, meta, title, ogThumb, path = `` }) => {
  const { site, ogImageDefault } = useStaticQuery(
    graphql`
    query {
  site {
    siteMetadata {
      title
      description
      siteUrl
      social {
        twitter
      }
    }
  }
  ogImageDefault: file(absolutePath: {regex: "/images/og-image/"}) {
    childImageSharp {
      gatsbyImageData(layout: FIXED, height: 630, width: 1200)
    }
  }
}
`
  )

  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title
  const ogImage =
    ogThumb ||
    site.siteMetadata.siteUrl.concat(
      ogImageDefault.childImageSharp.gatsbyImageData.images.fallback.src,
    );
  const url = site.siteMetadata.siteUrl.concat((path || ``))

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:site_name`,
          content: site.siteMetadata.title,
        },
        {
          property: `og:url`,
          content: url,
        },
        {
          property: `og:image`,
          content: ogImage,
        },
        {
          property: `og:image:alt`,
          content: `${title}`,
        },
        {
          property: `og:image:width`,
          content: `1200`,
        },
        {
          property: `og:image:height`,
          content: `630`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata?.social?.twitter || ``,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `twitter:image`,
          content: ogImage,
        },
        {
          name: `twitter:url`,
          content: url,
        },
        {
          name: `twitter:image:alt`,
          content: `${title}`,
        },
        {
          name: `twitter:image:width`,
          content: `1200`,
        },
        {
          name: `twitter:image:height`,
          content: `630`,
        },
        {
          name: `twitter:site`,
          content: site.siteMetadata?.social?.twitter || ``,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata?.social?.twitter || ``,
        },
      ].concat(meta)}
    />
  )
}

Seo.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
  ogThumb: ``,
}

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  ogThumb: PropTypes.string.isRequired,
}

export default Seo
