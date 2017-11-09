import React from 'react'
import styled from 'styled-components'

import {
  BoldTitle,
  SmallBody,
  Peeker,
} from '../../Atoms'
import styles from '../../styles'

const Parent = styled.div`
  background-color: ${styles.colors.darkAccent};
  width: ${styles.widths.small};
`

const VersionText = SmallBody.extend`
  font-size: 1rem;
`

const TextWrapper = styled.div`
  display: flex;
`

export default () => (
  <Parent>
    <Peeker />
    <TextWrapper>
      <BoldTitle>Pushbot</BoldTitle>
      <VersionText>1.10.17</VersionText>
    </TextWrapper>
  </Parent>
)
