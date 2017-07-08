import { GET_WEATHER, INVALID_ZIP } from "./actionTypes"
import endpoints from "../../endpoints/"

export const getWeather = zip => {
  return dispatch => {
    fetch(endpoints.weather.zip + zip)
      .then(function(response) {
        return response.json()
      })
      .then(function(json) {
        json.cod === "404"
          ? dispatch({
              type: INVALID_ZIP
            })
          : dispatch({
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
