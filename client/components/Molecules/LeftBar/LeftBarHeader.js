import React from 'react'
import styled from 'styled-components'

import {
  LeftBarText,
} from '../../Atoms'
import styles from '../../styles'

const Parent = styled.div`
  background-color: ${styles.colors.pushLight};
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default props => (
  <Parent>
    <LeftBarText>{props.children}</LeftBarText>
  </Parent>
)
