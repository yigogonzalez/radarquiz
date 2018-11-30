import React from 'react'
import { Provider } from 'react-redux'
import 'tachyons/css/tachyons.min.css'
import data from './datasource/blips'
import store from './Store'
import { initGame } from './Store/GameReducer'
import Game from './Components/Game'
import './App.css'

const App = () => (
  <Provider store={store}>
    <div className="avenir">
      <Game />
    </div>
  </Provider>
)

initGame(store, data)
export default App
