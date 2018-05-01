import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { createStore } from "redux";
import "semantic-ui-css/semantic.min.css"; // ../ deleted
import { BrowserRouter as Router } from "react-router-dom";
import reducer from "./Store/mazumaStore";
// import { applyMiddleware } from "redux";
// import reduxThunk from "redux-thunk";

const store = createStore(
  reducer,
  // applyMiddleware(reduxThunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
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
