import React, { Component } from "react"
import { connect } from "react-redux"

import { getWeather } from "../../redux/actions"
import DayResults from "./day-results"

class Weather extends Component {
  constructor(props) {
    super(props)
    this.state = {
      zip: null
    }
    this.requestWeather = this.requestWeather.bind(this)
  }

  requestWeather(e) {
    let zipValue = e.target.value
    if (zipValue.length >= 5) {
      this.setState({
        zip: zipValue
      })

      this.props.dispatch(getWeather(zipValue))
    }
  }
  render() {
    const weatherCheck = this.props.weather.weather

    return (
      <section className="weather">
        <input
          className="weather__input"
          placeholder="Please enter your zip code..."
          ref={input => {
            this.zipInput = input
          }}
          onKeyUp={this.requestWeather}
        />
        {typeof weatherCheck === "object"
          ? <DayResults results={weatherCheck} />
          : ""}
      </section>
    )
  }
}

const mapStateToProps = state => {
  return {
    weather: state.weather
  }
}

export default connect(mapStateToProps)(Weather)
