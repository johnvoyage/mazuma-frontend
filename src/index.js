import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import whatever from './Reducers/manageState';
// import registerServiceWorker from './registerServiceWorker';

export const configureStore = () => {
  return createStore(whatever,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
}

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App store={store} />
  </Provider>,
  document.getElementById('root')
);
// registerServiceWorker();
