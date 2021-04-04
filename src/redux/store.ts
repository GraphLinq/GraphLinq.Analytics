import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
// import reducers from './reducers/index';
import createSagaMiddleware from 'redux-saga';


const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({

  }),
  composeEnhancers(
    applyMiddleware(sagaMiddleware),
  )
);


export { store };