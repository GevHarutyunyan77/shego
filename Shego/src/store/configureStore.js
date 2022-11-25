import {persistStore, persistReducer} from "redux-persist";
import {legacy_createStore as createStore, applyMiddleware} from "redux";
import rootReducer from './reducers';

import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas'
import AsyncStorage from "@react-native-async-storage/async-storage";
const sagaMiddleware = createSagaMiddleware()
const middlewares = [sagaMiddleware];


const persistConfig = {
  key:'root',
  storage: AsyncStorage
}


const persistedReducer = persistReducer(persistConfig, rootReducer )



const store = createStore(persistedReducer, applyMiddleware(...middlewares));
sagaMiddleware.run(rootSaga);
let persistor = persistStore(store)

export default store;
export {persistor}
