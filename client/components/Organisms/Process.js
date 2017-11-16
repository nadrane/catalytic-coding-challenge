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
import {
  dirtyProcess,
  updateProcess,
  putProcess,
} from '../../store'

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
    this.submit = this.submit.bind(this)
  }

  toggleEditing() {
    this.setState({ editing: !this.state.editing })
  }

  submit(e) {
    e.preventDefault()
    this.props.putProcess()
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
          value={this.props.process.displayName}
          onChange={e => this.props.editProcess({ displayName: e.target.value })}
        />
        {
          this.state.editing && (
            <ExtraInformation>
              <EditableLabel>Description</EditableLabel>
              <ExpandingTextInput
                value={this.props.process.description}
                onChange={e => this.props.editProcess({ description: e.target.value })}
              />
              <EditableLabel>Category</EditableLabel>
              <MarginTextInput
                value={this.props.process.category}
                onChange={e => this.props.editProcess({ category: e.target.value })}
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
                  {
                    this.props.saveFiles.process === 'dirty' && <Button onClick={this.submit}>Save</Button>
                  }
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
  saveFiles: state.saveFiles,
})

const mapDispatch = dispatch => ({
  editProcess: (updated) => {
    dispatch(dirtyProcess())
    dispatch(updateProcess(updated))
  },
  putProcess: () => dispatch(putProcess()),
})

export default connect(mapState, mapDispatch)(Process)
