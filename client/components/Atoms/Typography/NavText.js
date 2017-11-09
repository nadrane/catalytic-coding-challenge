import React from 'react'
import styled from 'styled-components'

const Tag = styled.a`
  font-family: Roboto, sans-serif;
`
export default props => <Tag href={props.href}>{props.children}</Tag>
