import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../../actions'

let synchronized = false

class App extends Component {
  constructor (props) {
    super(props)
  }

  componentWillMount () {
    if (!synchronized) {
        this.props.actions.sync()
        synchronized = true
    }
  }

  render () {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return {
    dispatch: dispatch,
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(
  undefined,
  mapDispatchToProps
)(App)
