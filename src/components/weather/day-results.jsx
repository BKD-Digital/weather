import { Thermometer } from "react-feather"
import React, { Component } from "react"

class DayResults extends Component {
  render() {
    return (
      <div className="day-results">
        <h3>
          Today's Weather in{" "}
          {this.props.results.name
            ? this.props.results.name
            : "...apparently you live nowhere"}
        </h3>
        <h4 className="day-results__temp">
          {this.props.results.main.temp
            ? this.props.results.main.temp
            : `Unable to get temperature`}
          <i className="fa fa-thermometer-three-quarters" aria-hidden="true" />
        </h4>

        {this.props.results.weather[0].description
          ? <h5 className="day-results__description">
              {this.props.results.weather[0].description}
            </h5>
          : ``}
      </div>
    )
  }
}

export default DayResults
