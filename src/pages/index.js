import React from "react"
import { graphql } from "gatsby"

import { RichText } from "prismic-reactjs"

export default ({ data }) => {
  const doc = data.prismic.allHomepages.edges.slice(0, 1).pop()
  const shoes = data.prismic.allNewShoess.edges

  if (!doc) {
    return null
  }

  return (
    <div>
      {RichText.render(doc.node.title)}
      {doc.node.body.map((slice, index) => {
        if (slice.type === "text") {
          return RichText.render(slice.primary.text)
        } else if (slice.type === "image_gallery") {
          const galleryContent = slice.fields.map((image, imageIndex) => (
            <div key={imageIndex}>
              <img
                style={{ maxHeight: "30vw" }}
                src={image.gallery_image.url}
                alt={image.gallery_image.alt}
              />
              {RichText.render(image.image_captions)}
            </div>
          ))
          return (
            <div className="image-gallery" key={index}>
              <h2>{RichText.asText(slice.primary.name_of_the_gallery)}</h2>
              <div
                style={{
                  display: "flex",
                  textAlign: "center",
                  justifyContent: "center",
                }}
              >
                {galleryContent}
              </div>
            </div>
          )
        }
        return null
      })}
      {shoes.map(({ node }) => (
        <div key={node._meta.uid}>
          <img
            src={node.image.url}
            alt={node.image.alt}
            style={{
              maxWidth: "100%",
            }}
          />
        </div>
      ))}
    </div>
  )
}

export const query = graphql`
  {
    prismic {
      allHomepages {
        edges {
          node {
            shoes {
              _linkType
              ... on PRISMIC_NewShoes {
                image
                _linkType
              }
            }
            title
            body {
              ... on PRISMIC_HomepageBodyText {
                type
                label
                primary {
                  text
                }
              }
              ... on PRISMIC_HomepageBodyImage_gallery {
                type
                label
                primary {
                  name_of_the_gallery
                }
                fields {
                  gallery_image
                  image_captions
                }
              }
            }
          }
        }
      }
      allNewShoess {
        totalCount
        edges {
          node {
            image
            _meta {
              uid
            }
          }
        }
      }
    }
  }
`
