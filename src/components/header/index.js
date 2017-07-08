import React, { Component } from "react"

class Header extends Component {
  render() {
    return (
      <section className="header-section">
        <header className="header-section__container">
          <h2 className="header-section__main-title">Your Local Weather</h2>
          <h4 className="header-section__secondary-title">
            provided by OpenWeatherMap
          </h4>
        </header>
      </section>
    )
  }
}

export default Header
