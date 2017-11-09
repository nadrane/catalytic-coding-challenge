import React from 'react'
import styled from 'styled-components'

const Title = styled.h1`
  font-family: Roboto, sans-serif;
`

export default props => <Title>{props.children}</Title>
