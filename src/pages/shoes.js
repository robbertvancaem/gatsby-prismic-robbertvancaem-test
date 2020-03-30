import React from "react"
import { graphql } from "gatsby"
import { RichText } from "prismic-reactjs"
import styled from "styled-components"

import Layout from "../components/layout"
import Navigation from "../components/navigation"

const Overview = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 20px;
  padding: 1em 14vw;
`

const Shoe = styled.div`
  background: #fff;
  padding: 1em;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

  .img-wrapper {
    position: relative;
    padding-bottom: 100%;
    width: 100%;
    background-size: cover;
    background-position: center center;
  }

  h4 {
    text-align: right;
    margin-bottom: 0;
  }
`

export default ({ data }) => {
  const shoes = data.prismic.allNewShoess.edges

  if (!shoes) {
    return null
  }

  return (
    <Layout>
      <Navigation />
      <Overview>
        {shoes.map(
          ({ node }) =>
            console.log(node) || (
              <Shoe key={node._meta.uid} image={node.image.url}>
                <div
                  className="img-wrapper"
                  style={{ backgroundImage: `url("${node.image.url}")` }}
                ></div>
                <h3>{RichText.asText(node.title)}</h3>
                <h4>{`€ ${node.price}`}</h4>
              </Shoe>
            )
        )}
      </Overview>
    </Layout>
  )
}

export const query = graphql`
  {
    prismic {
      allNewShoess {
        edges {
          node {
            image
            launch_date
            price
            stock
            title
            description
            _meta {
              uid
            }
          }
        }
      }
    }
  }
`
