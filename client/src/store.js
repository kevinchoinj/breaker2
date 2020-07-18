import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { connectRouter} from 'connected-react-router';
import {createBrowserHistory} from 'history';
import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import {loadState, saveState} from './localStorage';

import reducers from './reducers';

export const history = createBrowserHistory();
const persistedState = loadState();

export default()=>{
  return store;
};

const store = createStore(
  combineReducers({
    ...reducers,
    router: connectRouter(history),
  }),
  persistedState,
  compose(
    applyMiddleware(
      thunk,
      createLogger({
        duration: true,
        predicate: () => process.env.NODE_ENV !== 'production',
        actionTransformer: action => ({
          ...action,
          type: String(action.type),
        }),
      }),
    ),
  ),
);

store.subscribe(()=> {
  saveState({
    ui: store.getState().ui
  });
});
