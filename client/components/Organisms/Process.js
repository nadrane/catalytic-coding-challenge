import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import {
  EditableLabel,
  BigTextInput,
  DropDownHeader,
  ExpandingTextInput,
  TextInput,
  Button,
  DeleteText,
} from '../Atoms'

const Parent = styled.form`

`

const ExtraInformation = styled.div`
  padding-bottom: 1rem;
  border-bottom: 2px solid grey;
  margin-bottom: 1rem;
`

const MarginTextInput = TextInput.extend`
  margin-bottom: 2rem;
`

const BottomGroup = styled.div`
  display: flex;
  justify-content: space-between;
`

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
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
    const MarginBigInput = BigTextInput.extend`
      margin-bottom: 2rem;
      ${!this.state.editing && 'cursor: text;'}
    `

    return (
      <Parent>
        <EditableLabel
          onClick={this.toggleEditing}
          main={!this.state.editing}
        >
          Edit Template
        </EditableLabel>
        <MarginBigInput
          onClick={!this.state.editing ? this.toggleEditing : undefined}
          readOnly={!this.state.editing}
          defaultValue={this.props.process.processName}
          key={this.props.process.processName}
        />
        {
          this.state.editing && (
            <ExtraInformation>
              <EditableLabel>Description</EditableLabel>
              <ExpandingTextInput
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
              <BottomGroup>
                <DropDownHeader open onClick={this.toggleEditing}>collapse</DropDownHeader>
                <ButtonGroup>
                  <DeleteText>Delete Template</DeleteText>
                  <Button>Save</Button>
                </ButtonGroup>
              </BottomGroup>
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
