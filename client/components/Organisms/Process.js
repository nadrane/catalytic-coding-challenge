import React from 'react'
import styled from 'styled-components'
import {connect} from 'react-redux'

import {
  EditableLabel,
  BigTextInput,
  DropDownHeader,
  TextInput,
} from '../Atoms'

const Parent = styled.form`

`

const ExtraInformation = styled.div`

`

const MarginTextInput = TextInput.extend`
  margin-bottom: 2rem;
`
const MarginBigInput = BigTextInput.extend`
  margin-bottom: 2rem;
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
        <MarginBigInput readOnly={!this.state.editing} />
        {
          this.state.editing && (
            <ExtraInformation>
              <EditableLabel>Description</EditableLabel>
              <MarginTextInput />
              <EditableLabel>Category</EditableLabel>
              <MarginTextInput />
              <DropDownHeader open onClick={this.toggleEditing}>collapse</DropDownHeader>
            </ExtraInformation>
          )
        }
      </Parent>
    )
  }
}
