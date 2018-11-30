import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class Status extends Component {
  constructor() {
    super()
    this.state = {
      time: 60,
    }
    this.tick = this.tick.bind(this)
  }

  componentWillMount() {
    this.interval = setInterval(() => {
      this.tick()
    }, 1000)
  }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval)
    }
  }

  tick() {
    this.setState(prevState => ({
      time: prevState.time > 0 ? prevState.time - 1 : 0,
    }))
  }

  render() {
    return (
      <div>
        <div className="fl w-50 tl">tiempo: {this.state.time}</div>
        <div className="fl w-50 tr">puntaje: {this.props.correctCount}</div>
      </div>
    )
  }
}

Status.propTypes = {
  correctCount: PropTypes.number.isRequired,

}

const mapStateToProps = store => ({
  answer: store.game.answer,
  gameTime: store.game.gameTime,
  correctCount: store.game.correctCount,
})

export default connect(mapStateToProps, null)(Status)
