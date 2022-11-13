import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {isClicked: true}

  changeMode = () => {
    this.setState(prevState => ({isClicked: !prevState.isClicked}))
  }

  render() {
    const {isClicked} = this.state
    const modeContainer = isClicked ? 'dark' : 'light'
    const buttonText = isClicked ? 'Light Mode' : 'Dark Mode'

    return (
      <div className="container">
        <div className={modeContainer}>
          <h1 className="heading">Click to Change Mode</h1>
          <button type="button" onClick={this.changeMode} className="button">
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
