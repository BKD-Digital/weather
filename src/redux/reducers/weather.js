import { GET_WEATHER, INVALID_ZIP } from "../actions/actionTypes"

export default function(state = {}, action) {
  switch (action.type) {
    case GET_WEATHER:
      // console.log(`Here's my data:`, action.payload)
      return Object.assign({}, state, {
        weather: action.payload
      })

    case INVALID_ZIP:
      return Object.assign({}, state, {
        error: true
      })

    default:
      return state
  }
}
