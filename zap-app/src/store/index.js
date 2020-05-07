import { applyMiddleware, createStore } from "redux";
import { connectRouter, routerMiddleware } from "connected-react-router";
import thunk from "redux-thunk";
import history from "../routes/history";
import rootReducer from "../reducers/index"

const middlewares = [routerMiddleware(history), thunk];

const store = createStore(
  connectRouter(history)(rootReducer),
  applyMiddleware(...middlewares)
);

export default store;
