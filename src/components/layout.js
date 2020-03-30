import React from "react"
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    html, body {
        padding: 0;
        margin: 0;
    }
    body {
        background: #ff5c0b;
        color: #fff;
        font-family: 'Open Sans', sans-serif;
    }

    img {
        max-width: 100%;
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: 'Kanit', sans-serif;
        color: #000;
        text-transform: uppercase;
    }
`

export default ({ children }) => (
  <React.Fragment>
    <GlobalStyle />
    {children}
  </React.Fragment>
)
