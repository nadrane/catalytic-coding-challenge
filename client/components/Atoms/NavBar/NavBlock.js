import React from 'react'
import styled from 'styled-components'

import {
  NavText,
} from '../../Atoms'

const Block = styled.div`
  padding: 3rem;
`

export default props => (
  <Block>
    <NavText>{props.children}</NavText>
  </Block>
)
