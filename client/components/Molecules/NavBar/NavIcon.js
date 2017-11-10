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
  display: flex;
  height: 4em;
  align-items: flex-end;
`

const VersionText = SmallBody.extend`
  font-size: 1rem;
  margin-left: .3rem;
  margin-bottom: .3rem;
`

const TextWrapper = styled.div`
  display: flex;
  align-items: flex-end;
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
