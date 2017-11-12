import React from 'react'
import styled, {keyframes} from 'styled-components'

import {
  DropDownHeader,
} from '../../Atoms'

const Parent = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`
const appearAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(-15px);
  }
`

export default class extends React.Component {
  constructor() {
    super()
    this.state = {
      open: false,
    }
  }

  toggleOpen = () => this.setState({ open: !this.state.open })

  render() {
    const Animator = styled.div`
      ${
        this.state.open && `animation: ${appearAnimation} 0.6s;`
      }
    `

    return (
      <Parent>
        <DropDownHeader
          open={this.state.open}
          onClick={this.toggleOpen}
        >
          {this.props.header}
        </DropDownHeader>
        <Animator>
          {
            this.state.open && this.props.children
          }
        </Animator>
      </Parent>
    )
  }
}


