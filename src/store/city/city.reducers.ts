import {Reducer} from 'redux';

import {CityState, CityTypes} from 'store/city/city.types';

const defaultState: CityState = {
  data: [],
  loading: false,
  error: null,
};

const reducer: Reducer<CityState> = (state = defaultState, action) => {
  switch (action.type) {
    case CityTypes.LOAD_CITY_DATA:
      return {...state, loading: true};
    case CityTypes.SUCCESS_CITY_DATA:
      return {...state, data: action.payload, loading: false};
    case CityTypes.ERROR_CITY_DATA:
      return {...state, error: action.payload, loading: false};
    default:
      return state;
  }
};

export default reducer;
