import React from "react"
import styled from "styled-components"

const Headline = styled.h1`
  text-align: center;
  font-size: 3.6em;
`

export default ({ children }) => <Headline>{children}</Headline>
