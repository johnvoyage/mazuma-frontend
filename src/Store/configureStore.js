import { createStore, applyMiddleware } from "redux";
import rootReducer from "./mazumaStore";
// import { applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";

const configureStore = () => {
  return createStore(
    rootReducer,
    compose(
      applyMiddleware(thunk),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );
};

store.subscribe(() => {
  // console.log('the new state is', store.getState())
});

export default configureStore;
