// Write your code here
import {Component} from 'react'

import './index.css'

const intialState = {
  isStopWatchRunning: false,
  timeCompletedInSec: 0,
  timeCompletedInMin: 0,
}

class Stopwatch extends Component {
  state = intialState

  clearTimerInterval = () => clearInterval(this.TimerId)

  StopWatchStarted = () => {
    this.TimerId = setInterval(this.incrementInTime, 1000)
  }

  incrementInTime = () => {
    const {timeCompletedInSec, timeCompletedInMin} = this.state

    if (timeCompletedInSec < 59) {
      this.setState(prevState => ({
        timeCompletedInSec: prevState.timeCompletedInSec + 1,
      }))
    } else {
      this.setState(prevState => ({
        timeCompletedInMin: prevState.timeCompletedInMin + 1,
      }))

      this.setState({timeCompletedInSec: 0})
    }
  }

  StopWatchPaused = () => {
    this.clearTimerInterval()
  }

  StopWatchReset = () => {
    this.clearTimerInterval()
    this.setState(intialState)
  }

  timerUpdater = () => {
    const {timeCompletedInMin, timeCompletedInSec} = this.state

    const timerMin =
      timeCompletedInMin > 9 ? timeCompletedInMin : `0${timeCompletedInMin}`

    const timerSec =
      timeCompletedInSec > 9 ? timeCompletedInSec : `0${timeCompletedInSec}`

    return `${timerMin}:${timerSec}`
  }

  render() {
    return (
      <div className="app-container">
        <h1 className="main-heading">Stopwatch</h1>
        <div className="main-container">
          <div className="timer-container">
            <div className="head-container">
              <img
                className="timer-image"
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
              />
              <h1 className="timer">Timer</h1>
            </div>
            <div className="CompletedTime">
              <h1 className="timer-clock">{this.timerUpdater()} </h1>
            </div>
          </div>
          <div className="btn-container">
            <button
              onClick={this.StopWatchStarted}
              className="startBtn"
              type="button"
            >
              Start
            </button>
            <button
              onClick={this.StopWatchPaused}
              className="stopBtn"
              type="button"
            >
              Stop
            </button>
            <button
              onClick={this.StopWatchReset}
              className="resetBtn"
              type="button"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
