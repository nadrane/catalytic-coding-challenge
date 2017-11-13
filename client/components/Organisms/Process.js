import React from 'react'
import styled from 'styled-components'
import {connect} from 'react-redux'

import {
  EditableLabel,
  BigTextInput,
} from '../Atoms'

const Parent = styled.section`

`

export default class extends React.Component {
  constructor() {
    super()
    this.state = {
      editing: false,
    }

    this.toggleEditing = this.toggleEditing.bind(this)
  }

  componentWillReceiveProps(nextProps) {

  }

  toggleEditing() {
    this.setState({ editing: !this.state.editing })
  }


  render() {
    return (
      <Parent>
        <EditableLabel
          onClick={this.toggleEditing}
          main={!this.state.editing}
        >
          Edit Template
        </EditableLabel>
        <BigTextInput readOnly={!this.state.editing} />
      </Parent>
    )
  }
}
