import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers/';

// const logMiddleware = (store) => (next) => (action) => {
//   console.log(action.type);
//   return next(action);
// };

const stringMiddleware = () => (next) => (action) => {
  if (typeof action === 'string') {
      return next({
        type: action
      });
    }

    return next(action);
};

const store = createStore(reducer, applyMiddleware(thunk, stringMiddleware));

export default store;
