import React from 'react'
import { Session } from 'meteor/session'
import { Tracker } from 'meteor/tracker'

export default class LinksVisibilityToggle extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      showHidden: !Session.get('showVisible')
    }
  }

  componentDidMount() {
    this.tracker = Tracker.autorun(() => {
      this.setState({
        showHidden: !Session.get('showVisible')
      })
    })
  }

  componentWillUnmount() {
    this.tracker.stop()
  }

  render() {
    return (
      <label className="checkbox">
        <input 
          className="checkbox__box"
          type="checkbox" 
          checked={ this.state.showHidden }
          onChange={(e) => {
            Session.set('showVisible', !e.target.checked)
          }} />
        show hidden links
      </label>
    )
  }
}