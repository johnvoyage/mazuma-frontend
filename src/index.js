import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import "semantic-ui-css/semantic.min.css"; // ../ deleted
import { BrowserRouter as Router } from "react-router-dom";
import rootReducer from "./Store/mazumaStore";
// import { applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
// import configureStore from "./Store/configureStore";

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(reduxThunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

store.subscribe(() => {
  // console.log('the new state is', store.getState())
});

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App store={store} />
    </Provider>
  </Router>,
  document.getElementById("root")
);
// registerServiceWorker();
