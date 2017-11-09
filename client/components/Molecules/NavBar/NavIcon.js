import React from 'react'
import styled from 'styled-components'

import {
  BoldTitle,
  Peeker,
} from '../../Atoms'
import styles from '../../styles'

const Parent = styled.div`
  background-color: ${styles.colors.darkAccent};
  width: ${styles.widths.small};
`

export default () => (
  <Parent>
    <Peeker />
  </Parent>
)
