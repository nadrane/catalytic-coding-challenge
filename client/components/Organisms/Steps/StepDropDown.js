import React from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'

import {
  DropDown,
} from '../../Molecules'
import {
  toggleConfiguration,
} from '../../../store'

const StepDropDown = (props) => {

  return (
    <div>
      {
        props.headers.map((header, index) => (
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
