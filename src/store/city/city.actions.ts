import {CityTypes} from 'store/city/city.types';

export const loadCityData = () => ({
  type: CityTypes.LOAD_CITY_DATA,
});

export const errorCityData = (error: any) => ({
  type: CityTypes.ERROR_CITY_DATA,
  payload: error,
});

export const sucessCityData = (data: any) => ({
  type: CityTypes.SUCCESS_CITY_DATA,
  payload: data,
});
