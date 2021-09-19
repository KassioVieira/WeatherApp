import {Reducer} from 'redux';

import {CitiesState, CitiesTypes} from 'store/cities/cities.types';
import data from 'store/cities/cities.data';

const defaultState: CitiesState = {
  data,
  loading: false,
  error: null,
};

const reducer: Reducer<CitiesState> = (state = defaultState, action) => {
  switch (action.type) {
    case CitiesTypes.LOAD_PULL_DATA:
      return {...state, loading: true};
    case CitiesTypes.SUCCESS_PULL_DATA:
      return {...state, data: action.payload, loading: false};
    case CitiesTypes.ERROR_PULL_DATA:
      return {...state, error: action.payload, loading: false};
    default:
      return state;
  }
};

export default reducer;
