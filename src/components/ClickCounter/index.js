import {component} from 'react'

import './index.css'

class ClickCounter extends component {
  state = {count: 0}

  onTouch = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div>
        <h1 className="heading">
          The Button has been clicked <span>{count}</span>times
        </h1>
        <p>click the button to increase the count!</p>
        <button type="button" onClick={this.onTouch}>
          click me!
        </button>
      </div>
    )
  }
}

export default ClickCounter
