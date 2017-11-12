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
  }

  toggleOpen = () => this.setState({ open: !this.state.open })

  render() {
    return (
      <Parent>
        <DropDownHeader
          open={this.state.open}
          onClick={this.toggleOpen}
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


