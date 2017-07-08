import React, { Component } from "react"
import { Route } from "react-router-dom"
import Header from "./components/header"
import Weather from "./components/weather"

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <div className="app-container__content">
          <Header />
          <Weather />
        </div>
      </div>
    )
  }
}

export default App
