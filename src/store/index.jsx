import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from '@redux-saga/core';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

const sagaMidleware = createSagaMiddleware()

const enhancer = applyMiddleware(sagaMidleware)

const store = createStore(rootReducer, enhancer);

sagaMidleware.run(rootSaga)

export default store;