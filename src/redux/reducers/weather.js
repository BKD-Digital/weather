import { GET_WEATHER } from "../actions/actionTypes"

export default function(state = {}, action) {
  switch (action.type) {
    case GET_WEATHER:
      // console.log(`Here's my data:`, action.payload)
      return Object.assign({}, state, {
        weather: action.payload
      })

    default:
      return state
  }
}
