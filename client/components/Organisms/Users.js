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

const Users = props => (
  <Parent>
    <ClearAvatar roleID={props.roleID} />
    {
      props.users.map(user => (
        <AvatarName
          key={user.userID}
          onClick={user.onClick}
          selected={user.selected}
          url={user.url}
        >
          {user.username}
        </AvatarName>
      ))
    }
  </Parent>
)


export default Users
