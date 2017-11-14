import React from 'react'
import styled from 'styled-components'

import {
  DropDownHeader,
} from '../../Atoms'

const Parent = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export default class extends React.Component {
  constructor() {
    super()
    this.state = {
      open: false,
    }
    console.log('constructed')
    this.toggleOpen = this.toggleOpen.bind(this)
  }

  toggleOpen() {
    this.setState({ open: !this.state.open })
  }

  render() {
    console.log(this.state.open)
    return (
      <Parent>
        <DropDownHeader
          open={this.state.open}
          onClick={this.toggleOpen}
          showNum={this.props.showNum}
          num={this.props.num}
        >
          {this.props.header}
        </DropDownHeader>
        {
          this.state.open && this.props.children
        }
      </Parent>
    )
  }
}
