import React from "react"
import ReactDOM from "react-dom"
import { createStore, applyMiddleware } from "redux"
import { Provider } from "react-redux"
import thunk from "redux-thunk"
import { createLogger } from "redux-logger"

import rootReducer from "./redux/reducers"

import App from "./App"
import "./styles/main.scss"

import registerServiceWorker from "./registerServiceWorker"

const logger = createLogger()
const store = createStore(rootReducer, applyMiddleware(thunk, logger))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
)
registerServiceWorker()
