import React from 'react'
import styled from 'styled-components'

import {
  NavBlock,
} from '../../Atoms'

const Parent = styled.div`
  display: flex;
`

export default props => (
  <Parent>
    {
      props.links.map(link => <NavBlock>{link}</NavBlock>)
    }
  </Parent>
)
