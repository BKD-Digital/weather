import { combineReducers } from "redux"
import WeatherReducer from "./weather"

const initialState = {
  loading: false,
  zipCode: null,
  error: false
}

const rootReducer = combineReducers({
  ...initialState,
  weather: WeatherReducer
})

export default rootReducer
