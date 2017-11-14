import React from 'react'
import styled from 'styled-components'

import {
  ClearAvatar,
  AvatarName,
} from '../Molecules'

const Parent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export default props => (
  <Parent>
    <ClearAvatar />
    {
      props.users.map(user => <AvatarName key={user.userID} onClick={user.onClick} selected={user.selected} url={user.url}>{user.username}</AvatarName>)
    }
  </Parent>
)
