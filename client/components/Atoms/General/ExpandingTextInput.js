import React from 'react'
import styled from 'styled-components'

import styles from '../../styles'

const Input = styled.span`
  background: none;
  width: 100%;
  font-family: Roboto, sans-serif;
  font-size: 1.2rem;
`

const Wrapper = styled.div`
  border-bottom: 1px solid ${styles.colors.greyLight};
  width: 100%;
  padding: 0.7rem 0;
  margin-bottom: 2rem;
`

export default props => (
  <Wrapper>
    <Input contentEditable>{props.children}</Input>
  </Wrapper>
)
