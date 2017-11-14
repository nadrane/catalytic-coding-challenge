import React from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'

import {
  DropDown,
} from '../../Molecules'
import {
  Users,
} from '../../Organisms'
import {
  toggleConfiguration,
} from '../../../store'

const StepDropDown = (props) => {
  const { num, users } = props
  const headers = [
    { header: 'Assign User', showNum: true, num, body: <Users users={users} /> },
    { header: 'Maximum Duration', showNum: false },
    { header: 'Dependencies', showNum: true, num: 0 },
    { header: 'Conditions', showNum: true, num: 0 },
    { header: 'Fields', showNum: false },
  ]
  return (
    <div>
      {
        headers.map((header, index) => (
          <DropDown
            header={header.header}
            showNum={header.showNum}
            num={header.num}
            key={header.header}
            open={props.configSettings[index]}
            onClick={() => props.toggleConfiguration(index)}
          >
            {header.body}
          </DropDown>
        ))
      }
    </div>
  )
}

const mapState = state => ({
  configSettings: state.configSettings,
})

const mapDispatch = dispatch => ({
  toggleConfiguration: id => dispatch(toggleConfiguration(id)),
})

export default withRouter(connect(mapState, mapDispatch)(StepDropDown))
