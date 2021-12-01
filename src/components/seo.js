import {graphql, StaticQuery} from 'gatsby';
import React from 'react';
import {Helmet} from 'react-helmet';

export const Seo = ({title, description, keywords, image, url, author}) => {
    return (
        <StaticQuery
            query={detailsQuery}
            render={(data) => {
                const metaTitle = title || data.site.siteMetadata.title;
                const metaDescription =
                    description || data.site.siteMetadata.description;
                const metaAuthor = author || data.site.siteMetadata.author;
                const metaUrl = url || data.site.siteMetadata.url;
                const metaImage = image || data.site.siteMetadata.image;
                const metaKeywords =
                    keywords || data.site.siteMetadata.keywords;

                return (
                    <Helmet
                        title={title}
                        meta={[
                            {
                                name: `description`,
                                content: metaDescription,
                            },
                            {
                                property: `og:title`,
                                content: metaTitle,
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
                                property: `og:image`,
                                content: metaImage,
                            },
                            {
                                property: `og:url`,
                                content: metaUrl,
                            },
                            {
                                name: `twitter:card`,
                                content: `summary_large_image`,
                            },
                            {
                                name: `twitter:creator`,
                                content: metaAuthor,
                            },
                            {
                                name: `twitter:title`,
                                content: metaTitle,
                            },
                            {
                                name: `twitter:description`,
                                content: metaDescription,
                            },
                            {
                                name: `twitter:image`,
                                content: metaImage,
                            },
                        ].concat(
                            metaKeywords && metaKeywords.length > 0
                                ? {
                                      name: `keywords`,
                                      content: metaKeywords.join(`,`),
                                  }
                                : [],
                        )}
                    />
                );
            }}></StaticQuery>
    );
};

const detailsQuery = graphql`
    query DefaultSEOQuery {
        site {
            siteMetadata {
                title
                description
                author
                image
                url
                keywords
            }
        }
    }
`;