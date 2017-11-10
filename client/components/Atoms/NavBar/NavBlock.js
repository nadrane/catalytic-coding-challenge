import React from 'react'
import styled from 'styled-components'

import {
  NavText,
} from '../../Atoms'
import styles from '../../styles'

const Block = styled.div`
  padding: 3rem;
  background-color: ${styles.colors.dark};
  width: fit-content;
`

export default props => (
  <Block>
    <NavText>{props.children}</NavText>
  </Block>
)
