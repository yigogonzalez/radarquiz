import React from 'react'
import PropTypes from 'prop-types'

const StartButton = props => (
  <input
    type="button"
    value="Jugar"
    className="br3 bw2 b--white bg-inherit pa3 mt4 white w-80"
    onClick={props.onClick}
  />
)

StartButton.propTypes = {
  onClick: PropTypes.func.isRequired,
}

export default StartButton
