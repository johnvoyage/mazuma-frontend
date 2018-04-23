import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import 'semantic-ui-css/semantic.min.css'; // ../ deleted
import { BrowserRouter as Router } from 'react-router-dom';
import reducer from './Store/mazumaStore';
//// COME BACK TO
// import whatever from './Reducers/manageState';
// import registerServiceWorker from './registerServiceWorker';

// export const configureStore = () => {
//   return createStore(whatever,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
// }

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  // console.log('the new state is', store.getState())
})

ReactDOM.render(
  <Router>
    <Provider store={store}>

      <App store={store} />
    </Provider>
  </Router>,
  document.getElementById('root')
);
// registerServiceWorker();
