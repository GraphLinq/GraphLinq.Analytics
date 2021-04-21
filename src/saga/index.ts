import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from '../store/reducers';
import mySaga from './glqSaga';

// Creat saga middleware
const sagaMiddleware = createSagaMiddleware();

// Export store from saga and reducer
export const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
);

// Run the saga middleware
sagaMiddleware.run(mySaga);