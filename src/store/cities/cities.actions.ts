import {CitiesTypes} from 'store/cities/cities.types';

export const loadPullData = () => ({
  type: CitiesTypes.LOAD_PULL_DATA,
});

export const updateData = (data: any) => ({
  type: CitiesTypes.UPDATE_DATA,
  payload: data,
});

export const succesPullData = (data: any) => ({
  type: CitiesTypes.SUCCESS_PULL_DATA,
  payload: data,
});

export const errorPullData = (error: any) => ({
  type: CitiesTypes.ERROR_PULL_DATA,
  payload: error,
});

export const removePullData = (data: any) => ({
  type: CitiesTypes.REMOVE_PULL_DATA,
  payload: data,
});

export const favoriteCity = (data: any) => ({
  type: CitiesTypes.FAVORITE_CITY,
  payload: data,
});
