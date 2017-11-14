import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

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
    <ClearAvatar activeStep={props.activeStep} />
    {
      props.users.map(user => <AvatarName key={user.userID} onClick={user.onClick} selected={user.selected} url={user.url}>{user.username}</AvatarName>)
    }
  </Parent>
)

const mapState = state => ({
  activeStep: state.activeStep,
})

export default connect(mapState)(Users)
