import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Status from './Status'
import StartButton from './StartButton'
import Blip from './Blip'

class Game extends Component {
  constructor() {
    super()
    this.timmer = this.timmer.bind(this)
    this.startHandle = this.startHandle.bind(this)
  }

  timmer() {
    console.log('GAME START')
    this.timeout = setTimeout(() => {
      this.props.finish()
    }, this.props.gameTime * 1000)
  }

  startHandle() {
    this.timmer()
    this.props.start()
  }

  render() {
    switch (this.props.status) {
      case 'playing':
        return (
          <div className="vh-100 w-100">
            <div className="fixed w-100 pa2"><Status /></div>
            <Blip blip={this.props.blips[this.props.currentBlipIndex]} />
          </div>
        )
      case 'finish':
        return (
          <article className="vh-100 dt w-100 white bg-green">
            <div className="dtc v-mid tc ph3 ph4-l">
              <h1>¡Se acabo el tiempo!</h1>
              <div className="f3 f2-m f-subheadline-l w-100 fw6">
                Tu puntaje
                <div className="f2 mt3">{this.props.correctCount}</div>
              </div>
              <StartButton onClick={this.startHandle} />
            </div>
          </article>
        )
      case 'initial':
      default:
        return (
          <article className="vh-100 dt w-100 bg-purple">
            <div className="dtc v-mid tc white ph3 ph4-l">
              <h1>RadarQuiz</h1>
              <span className="f6 f2-m f-subheadline-l fw6">¿Cuantos blips puedes acertar en 60 segundos?</span>
              <StartButton onClick={this.startHandle} />
            </div>
          </article>
        )
    }
  }
}

Game.defaultProps = {
  status: 'initial',
  currentBlipIndex: 0,
  gameTime: 60,
}

Game.propTypes = {
  status: PropTypes.string,
  correctCount: PropTypes.number.isRequired,
  currentBlipIndex: PropTypes.number,
  blips: PropTypes.arrayOf(PropTypes.object).isRequired,
  start: PropTypes.func.isRequired,
  finish: PropTypes.func.isRequired,
  gameTime: PropTypes.number,
}

const mapStateToProps = store => ({
  status: store.game.status,
  blips: store.game.blips,
  correctCount: store.game.correctCount,
  currentBlipIndex: store.game.currentBlipIndex,
  gameTime: store.game.gameTime,
})

const mapDispatchToProps = dispatch => ({
  finish: () => {
    dispatch({ type: 'GAME_FINISH' })
  },
  start: () => {
    dispatch({ type: 'GAME_RESET_AND_START' })
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Game)
