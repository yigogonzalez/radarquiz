const random = length => (Math.floor(Math.random() * length))
const initState = {
  currentBlipIndex: 0,
  correctCount: 0,
  count: 0,
  status: 'initial',
  blips: [],
  gameTime: 60,
}

export function GameReducer(state = initState, action) {
  switch (action.type) {
    case 'GAME_RESET_AND_START':
      return Object.assign({}, state, {
        currentBlipIndex: random(state.blips.length),
        correctCount: 0,
        count: 0,
        status: 'playing',
        answer: '',
      })
    case 'GAME_SELECT_OPTION': {
      let { correctCount, count } = state
      if (action.selectedOption === action.correctOption) {
        correctCount += 1
      }
      count += 1
      return Object.assign({}, state, { correctCount, count })
    }
    case 'GAME_FINISH': {
      return Object.assign({}, state, { status: 'finish' })
    }
    case 'GAME_SET_NEXT': {
      return Object.assign({}, state, { currentBlipIndex: random(state.blips.length) })
    }
    case 'GAME_INIT':
      return Object.assign({}, state, { blips: action.data })
    default:
      return state
  }
}

export function initGame(store, data) {
  store.dispatch({ type: 'GAME_INIT', data })
}
