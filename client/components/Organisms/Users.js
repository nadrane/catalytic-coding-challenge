import React from 'react'
import styled from 'styled-components'

import {
  ClearAvatar,
  AvatarName,
} from '../Molecules'

const Parent = styled.div`
  display: flex;
`

export default props => (
  <Parent>
    <ClearAvatar />
    {
      props.users.map(user => <AvatarName>{user.username}</AvatarName>)
    }
  </Parent>
)
