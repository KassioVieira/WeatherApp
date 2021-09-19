import {compose, createStore, Store} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';

import reducers from 'store/reducers';

import {CitiesState} from './cities/cities.types';
import {CityState} from './city/city.types';
import AsyncStorage from '@react-native-community/async-storage';

let storeEnhancers: Function[] = [];

if (__DEV__) {
  const {reactotron} = require('./reactotron.config');
  reactotron.initiate();
  storeEnhancers = [reactotron.createEnhancer()];
}

export interface ApplicationState {
  cities: CitiesState;
  city: CityState;
}

const persistConfig = {
  key: 'root',
  whitelist: ['cities'],
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store: Store<ApplicationState> = createStore(
  persistedReducer,
  compose(...storeEnhancers),
);

const persistor = persistStore(store);

export {store, persistor};
