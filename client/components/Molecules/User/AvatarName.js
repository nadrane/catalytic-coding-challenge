import React from 'react'
import styled from 'styled-components'

import {
  UserImg,
  SmallBody,
} from '../../Atoms'


export default (props) => {
  const Parent = styled.div`
    height: fit-content;
    width: fit-content;
    margin: 1.5rem;
  `
  return (
    <Parent>
      <UserImg url={props.url} />
      <SmallBody>{props.children}</SmallBody>
    </Parent>
  )
}
