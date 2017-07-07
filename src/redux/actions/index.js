import { GET_WEATHER } from "./actionTypes"
import endpoints from "../../endpoints/"

export const getWeather = zip => {
  return dispatch => {
    fetch(endpoints.weather.zip + zip)
      .then(function(response) {
        return response.json()
      })
      .then(function(json) {
        dispatch({
          type: GET_WEATHER,
          payload: json
        })
      })
      .catch(function(error) {
        return {
          type: GET_WEATHER,
          payload: error
        }
      })
  }
}
