import React from "react"
import { Helmet } from "react-helmet"
import { graphql, useStaticQuery } from "gatsby"

const Seo = ({ title, description, image, path }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          titleTemplate
          author
          description
          url
          lang
          logo
        }
      }
    }
  `)

  const seo = {
    title: title || data.site.siteMetadata.title,
    titleTemplate: data.site.siteMetadata.titleTemplate,
    description: description || data.site.siteMetadata.description,
    defaultImage: data.site.siteMetadata.logo,
    image: image || data.site.siteMetadata.logo,
    url: data.site.siteMetadata.url + path || "/",
    lang: data.site.siteMetadata.lang
  }

  return (
    <Helmet
      htmlAttributes={{
        lang: {seo.lang},
      }}
      title={seo.title}
      titleTemplate={
        title === undefined || title === "" ? null : seo.titleTemplate
      }
    >
      <meta charSet="utf-8" />
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      {seo.url && <meta property="og:url" content={seo.url} />}
      {seo.url && <meta rel="canonical" content={seo.url} />}
      {seo.title && <meta property="og:title" content={seo.title} />}
      <meta property="og:site_name" content={seo.defaultTitle} />
      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}
      {seo.image && <meta property="og:image" content={seo.image} />}
    </Helmet>
  )
}

export default Seo
