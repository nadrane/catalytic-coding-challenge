// It's hard for me to comment on all your styled components because I've never used them
// With that said, there is A LOT here, and it's difficult to find what I want given that I'm unfamiliar with the conventions you're following.
//Lastly, the sheer quantity of code strikes me as surprising given the project was designed to take 6-8 hours.
// I wouldn't want to even begin to try to understand all this if i had a day job and was considering hiring you.

import React from 'react'
import styled from 'styled-components'

import {
  LeftBarTitle,
} from '../../Atoms'

const Clickable = styled.button`
  border: 0;
  padding: 0;
  background: none;
  cursor: pointer;
`

export default props => (
  <Clickable onClick={props.onClick}>
    <LeftBarTitle>
      {
        props.open ? <i className="fa fa-caret-up" /> : <i className="fa fa-caret-down" />
      }
      {
        `  ${props.children}`
      }
      {
        props.showNum && ` (${props.num})`
      }
    </LeftBarTitle>
  </Clickable>
)
