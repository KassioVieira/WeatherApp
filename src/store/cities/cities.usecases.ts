import Config from 'react-native-config';
import {Dispatch} from 'redux';

import * as actions from 'store/cities/cities.actions';
import {CitiesRequest} from './cities.types';

import api from 'services/api';
import {store} from 'store';

export const getCity = async (
  {city, country}: CitiesRequest,
  dispatch: Dispatch,
) => {
  try {
    dispatch(actions.loadPullData());
    const {data} = await api.get(
      `weather?q=${city},${country}&appid=${Config.OPEN_WEATHER_API}&units=metric&lang=pt_BR`,
    );
    dispatch(actions.succesPullData({...data, country}));
  } catch (error) {
    dispatch(actions.errorPullData(error));
  }
};

export const removeCity = async (id: number, dispatch: Dispatch) => {
  try {
    dispatch(actions.loadPullData());
    const {cities} = store.getState();
    const citiesUpdate = cities.data.filter(item => item.id !== id);

    dispatch(actions.removePullData(citiesUpdate));
  } catch (error) {
    dispatch(actions.errorPullData(error));
  }
};

export const favoriteCity = (id: number, dispatch: Dispatch) => {
  try {
    dispatch(actions.loadPullData());
    const {cities} = store.getState();
    const citiesUpdate = cities.data;
    const cityPosition = citiesUpdate.findIndex(item => item.id === id);

    citiesUpdate[cityPosition].favorite = !citiesUpdate[cityPosition].favorite;

    dispatch(actions.favoriteCity(citiesUpdate));
  } catch (error) {
    dispatch(actions.errorPullData(error));
  }
};
