import Config from 'react-native-config';
import {Dispatch} from 'redux';

import * as actions from 'store/cities/cities.actions';
import {CitiesRequest} from './cities.types';

import api from 'services/api';
import {store} from 'store';
import {getLanguage, getUnits} from 'utils/language';

export const getCity = async (
  {city, country}: CitiesRequest,
  dispatch: Dispatch,
) => {
  try {
    dispatch(actions.loadPullData());
    const {data} = await api.get(
      `weather?q=${city},${country}&appid=${
        Config.OPEN_WEATHER_API
      }&units=${getUnits()}&lang=${getLanguage()}`,
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

export const updateTemp = async (dispatch: Dispatch) => {
  try {
    const {cities} = store.getState();
    if (cities.data.length > 0) {
      const result = await Promise.all(getAllCalls(cities.data));
      const data = result.map(res => res.data);
      const updateArray = createArrayUpdate(data.flat(), cities.data);
      dispatch(actions.updateData(updateArray));
    }
  } catch (error) {
    dispatch(actions.errorPullData(error));
  }
};

const createArrayUpdate = (result: [], old: []) => {
  let aux = [];

  old.map((item: Object, index: number) => {
    aux.push({
      name: item.name,
      country: item.country,
      main: {
        temp: result[index].main.temp,
        temp_min: result[index].main.temp_min,
        temp_max: result[index].main.temp_max,
      },
      weather: [
        {
          description: item.weather[0].description,
        },
      ],
    });
  });
  return aux;
};

const getAllCalls = (cities: []) => {
  return cities.map(item => {
    return api.get(
      `weather?q=${item.name},${item.country}&appid=${
        Config.OPEN_WEATHER_API
      }&units=${getUnits()}&lang=${getLanguage()}`,
    );
  });
};
