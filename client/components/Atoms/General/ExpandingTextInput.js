import React from 'react'
import styled from 'styled-components'

import styles from '../../styles'

const Input = styled.span`
  border-bottom: 1px solid ${styles.colors.greyLight};
  background: none;
  width: 100%;
  font-family: Roboto, sans-serif;
  font-size: 1.2rem;
`

const Wrapper = styled.div`
  max-width: 100%;
`

export default () => (
  <Wrapper>
    <Input contentEditable />
  </Wrapper>
)
