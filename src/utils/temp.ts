import {getMetric} from './language';

export const getTemp = (temp: number) => `${parseInt(temp)} º${getMetric()}`;
