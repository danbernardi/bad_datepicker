import React from 'react'
import { browserHistory, Router } from 'react-router'
import { Provider, connect } from 'react-redux'
import { breakpoints } from 'utils/responsiveHelpers'
import { setActiveBreakpoint } from 'store/actions'
import PropTypes from 'prop-types'

class App extends React.Component {
  constructor (props) {
    super(props);

    // array that collects a mediaQueryList
    // object for each breakpoint
    this.mediaQueryState = [];
  }

  componentDidMount () {
    // loop over breakpoints and generate a mediaQueryList object for each one
    Object.keys(breakpoints).forEach(key => {
      // create breakpoint object
      const query = window.matchMedia(`(max-width: ${breakpoints[key]}px)`)
      // add breakpoint value
      query.breakpoint = breakpoints[key]
      // add breakpoint name
      query.name = key
      // add breakpoint change handler
      function breakpointChange () {
        this.dispatchActiveQuery()
      }

      // Shouldn't need to remove listener since app wrapper is present in whole
      // app and mounted once.
      query.addListener(breakpointChange.bind(this))

      // push breakpoint into array
      this.mediaQueryState.push(query)
    })

    this.dispatchActiveQuery()
  }

  dispatchActiveQuery () {
    const { dispatch } = this.props

    // reduce media query to the smallest breakpoint
    const activeQuery = this.mediaQueryState.reduce((prev, curr) => {
      return curr.matches ? curr : prev && prev.matches ? prev : null
    })

    const breakpointName = activeQuery ? activeQuery.name : 'default'
    const breakpointSize = activeQuery && activeQuery.breakpoint
    // pushes active query string to store. If no breakpoint is active, pushes 'default'
    dispatch(setActiveBreakpoint(breakpointName, breakpointSize))
  }

  shouldComponentUpdate () {
    return false
  }

  render () {
    return (
      <Provider store={this.props.store}>
        <div style={{ height: '100%' }}>
          <Router history={browserHistory} children={this.props.routes} />
        </div>
      </Provider>
    )
  }
}

App.propTypes = {
  dispatch: PropTypes.func
}

export default connect()(App)
