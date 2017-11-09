import React from 'react'
import styled from 'styled-components'

import {
  BoldTitle,
} from '../../Atoms'
import Icon from '../../../../public/images/pushbot-peeker.png'
import styles from '../../styles'

const Parent = styled.div`
  background-color: ${styles.colors.darkAccent};
  width: ${styles.widths.small};
`

export default () => (
  <Parent>
    <img src={Icon} alt="Pushbot" />
  </Parent>
)
