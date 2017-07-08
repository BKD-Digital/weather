import React, { Component } from "react"
import { connect } from "react-redux"
import { getWeather } from "../../redux/actions"
import DayResults from "./day-results"
import { CSSTransitionGroup } from "react-transition-group"

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

  componentDidUpdate(prevProps, prevState) {}

  render() {
    return (
      <section className="weather-wrapper">
        <div className="weather">
          <input
            className="weather__input"
            placeholder="Enter your zip code..."
            ref={input => {
              this.zipInput = input
            }}
            onKeyUp={this.requestWeather}
          />
        </div>

        {typeof this.props.weather.weather === "object"
          ? <DayResults results={this.props.weather.weather} />
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
