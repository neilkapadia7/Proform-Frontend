import { applyMiddleware, combineReducers, createStore } from "redux";
import createSagaMiddleware from 'redux-saga'
import {composeWithDevTools} from 'redux-devtools-extension'
import rootSaga from './sagas'

const initialState = {};

const reducers = combineReducers({

})

const sagaMiddleWare = createSagaMiddleware();
const middleware = [sagaMiddleWare];

const store = createStore(reducers, initialState, composeWithDevTools(applyMiddleware(...middleware)));

sagaMiddleWare.run(rootSaga);

export default store;