import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Navigation = styled.nav`
  width: 100%;
  background: #000;
  font-family: "Kanit", sans-serif;
  text-align: center;

  > * {
    padding: 1.2em 1.4em;
  }

  a {
    color: #fff;
    text-transform: uppercase;
    font-size: 0.75em;
    display: inline-block;
    text-decoration: none;
    letter-spacing: 1px;
  }
`

export default () => (
  <Navigation>
    <Link to="/">Home</Link>
    <Link to="/shoes">Shoes</Link>
    <Link to="/404">Contact</Link>
  </Navigation>
)
