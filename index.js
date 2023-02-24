/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unused-state */
/* eslint-disable arrow-body-style */
/* eslint-disable react/button-has-type */
// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {showFirst: true, shoeLast: true}

  showFirstName = () => {
    // eslint-disable-next-line no-unused-vars
    const {showFirst} = this.state
    if (showFirst === true) {
      this.setState(prevState => {
        return {showFirst: false}
      })
    } else {
      this.setState(prevState => {
        return {showFirst: true}
      })
    }
  }

  showLastName = () => {
    // eslint-disable-next-line no-unused-vars
    const {showLast} = this.state
    if (showLast === true) {
      this.setState(prevState => ({showLast: false}))
    } else {
      this.setState(prevState => {
        return {showLast: true}
      })
    }
  }

  render() {
    const {showFirst, showLast} = this.state
    return (
      <div className="card">
        <h1>Show/Hide</h1>

        <div className="card2">
          <div>
            <button onClick={this.showFirstName}>Show/Hide Firstname</button>
            <div className="min-card">
              {showFirst ? <p className="para"> Joe</p> : null}
            </div>
          </div>

          <div>
            <button onClick={this.showLastName}>Show/Hide Lastname</button>
            <div className="min-card">
              {showLast ? <p className="para">Jonas</p> : null}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
