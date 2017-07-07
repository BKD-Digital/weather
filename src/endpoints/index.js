const openWeatherMapAPIkey = "568439511b7d3b21db0a670362ba134f"

const endPoints = {
  weather: {
    apiKey: "568439511b7d3b21db0a670362ba134f",
    zip:
      "//api.openweathermap.org/data/2.5/weather?units=imperial&appid=" +
      openWeatherMapAPIkey +
      "&zip=",
    city:
      "//api.openweathermap.org/data/2.5/weather?units=imperial&appid=" +
      openWeatherMapAPIkey +
      "&q="
  }
}

export default endPoints
