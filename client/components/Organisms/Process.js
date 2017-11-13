import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import {
  EditableLabel,
  BigTextInput,
  DropDownHeader,
  TextInput,
} from '../Atoms'

const Parent = styled.form`

`

const ExtraInformation = styled.div`
  padding-bottom: 3rem;
`

const MarginTextInput = TextInput.extend`
  margin-bottom: 2rem;
`
const MarginBigInput = BigTextInput.extend`
  margin-bottom: 2rem;
`

class Process extends React.Component {
  constructor() {
    super()
    this.state = {
      editing: false,
      processName: '',
      description: '',
      category: '',
    }

    this.toggleEditing = this.toggleEditing.bind(this)
  }

  toggleEditing() {
    this.setState({ editing: !this.state.editing })
  }

  render() {
    // console.log(this.props)
    return (
      <Parent>
        <EditableLabel
          onClick={this.toggleEditing}
          main={!this.state.editing}
        >
          Edit Template
        </EditableLabel>
        <MarginBigInput
          readOnly={!this.state.editing}
          defaultValue={this.props.process.processName}
          key={this.props.process.processName}
        />
        {
          this.state.editing && (
            <ExtraInformation>
              <EditableLabel>Description</EditableLabel>
              <MarginTextInput
                defaultValue={this.props.process.description}
                key={this.props.process.description}
              />
              <EditableLabel>Category</EditableLabel>
              <MarginTextInput
                defaultValue={this.props.process.category}
                key={this.props.process.category}
              />
              <EditableLabel>Owner</EditableLabel>
              <MarginTextInput
                readOnly
                defaultValue={this.props.process.owner}
                key={this.props.process.owner}
              />
              <DropDownHeader open onClick={this.toggleEditing}>collapse</DropDownHeader>
            </ExtraInformation>
          )
        }
      </Parent>
    )
  }
}

const mapState = state => ({
  process: state.process,
})

export default connect(mapState)(Process)
