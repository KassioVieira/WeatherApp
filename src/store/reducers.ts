import {combineReducers} from 'redux';

import cities from 'store/cities/cities.reducers';
import city from 'store/city/city.reducers';

export default combineReducers({
  cities,
  city,
});
