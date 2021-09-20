import Config from 'react-native-config';
import {Dispatch} from 'redux';

import * as actions from 'store/city/city.actions';

import api from 'services/api';
import {CitiesRequest} from 'store/cities/cities.types';
import {formatDate, formatDateWithMonth, formatWeekDay} from 'utils/date';
import {getLanguage, getUnits} from 'utils/language';

export const getFiveDays = async (
  {city, country}: CitiesRequest,
  dispatch: Dispatch,
) => {
  try {
    dispatch(actions.loadCityData());
    const {data} = await api.get(
      `forecast?q=${city},${country}&appid=${
        Config.OPEN_WEATHER_API
      }&units=${getUnits()}&lang=${getLanguage()}`,
    );

    const fiveDays = createArrayOfDates(data.list);

    dispatch(actions.sucessCityData(fiveDays));
  } catch (error) {
    dispatch(actions.errorCityData(error));
  }
};

const createArrayOfDates = (data: []) => {
  let fiveDays = [];

  data.map(element => {
    if (!fiveDays.find(item => formatDate(element.dt_txt) === item.day)) {
      fiveDays.push({
        temp: element.main.temp,
        temp_min: element.main.temp_min,
        temp_max: element.main.temp_max,
        description: element.weather[0].description,
        day: formatDate(element.dt_txt),
        weekday: formatWeekDay(element.dt_txt),
        date: formatDateWithMonth(element.dt_txt),
      });
    }
  });

  return fiveDays;
};
