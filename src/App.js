import React, { Component } from "react"
import Weather from "./components/weather"

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <section className="header-section">
          <header className="header-section__container">
            <h2 className="header-section__main-title">Your Local Weather</h2>
            <h4 className="header-section__secondary-title">
              provided by OpenWeatherMap
            </h4>
          </header>
        </section>
        <Weather />
      </div>
    )
  }
}

export default App
