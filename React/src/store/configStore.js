import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import expensesReducer from '../Reducers/expense';
import filtersReducer from '../Reducers/filter';
import authReducer from '../Reducers/auth'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      expenses: expensesReducer,
      filters: filtersReducer,
      auth:authReducer
    }),
    applyMiddleware(thunk)
  );

  return store;
};
