import React from 'react'
import propTypes from 'prop-types'
import { connect } from 'react-redux'

const Blip = props => (
  <div className="vh-100 w-100">
    <article className="vh-50 dt w-100">
      <div className="dtc v-mid tc ph3 ph4-l">
        <h1>{props.blip.name}</h1>
      </div>
    </article>
    <article className="vh-50 dt w-100 tc">
      <input className="br3 bw2 b--black bg-inherit pa3 mt4 w-90" type="button" value="Adopt" onClick={() => (props.selectOption('Adopt', props.blip.ring))} />
      <input className="br3 bw2 b--black bg-inherit pa3 mt4 w-90" type="button" value="Trial" onClick={() => (props.selectOption('Trial', props.blip.ring))} />
      <input className="br3 bw2 b--black bg-inherit pa3 mt4 w-90" type="button" value="Assess" onClick={() => (props.selectOption('Assess', props.blip.ring))} />
      <input className="br3 bw2 b--black bg-inherit pa3 mt4 w-90" type="button" value="Hold" onClick={() => (props.selectOption('Hold', props.blip.ring))} />
    </article>
  </div>
)

Blip.propTypes = {
  blip: propTypes.shape({
    name: propTypes.string,
    ring: propTypes.string,
  }).isRequired,
  selectOption: propTypes.func.isRequired,
}

const mapDispatchToProps = dispatch => ({
  selectOption: (selectedOption, correctOption) => {
    dispatch({ type: 'GAME_SELECT_OPTION', selectedOption, correctOption })
    dispatch({ type: 'GAME_SET_NEXT' })
  },
})

export default connect(null, mapDispatchToProps)(Blip)
