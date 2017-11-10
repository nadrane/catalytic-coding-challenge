import React from 'react'
import styled from 'styled-components'

import peekerPath from '../../../../public/images/pushbot-peeker.png'
import styles from '../../styles'

const Image = styled.img`
  width: 5em;
  height: auto;
  align-self: flex-end;
`

export default () => <Image src={peekerPath} />
