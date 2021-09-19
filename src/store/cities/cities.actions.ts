import {CitiesTypes} from 'store/cities/cities.types';

export const loadPullData = () => ({
  type: CitiesTypes.LOAD_PULL_DATA,
});

export const succesPullData = (data: any) => ({
  type: CitiesTypes.SUCCESS_PULL_DATA,
  payload: data,
});

export const errorPullData = (error: any) => ({
  type: CitiesTypes.ERROR_PULL_DATA,
  payload: error,
});
