import {getLanguageByDevice} from 'locales';

export const getLanguage = () => {
  return getLanguageByDevice() === 'en' ? 'en' : 'pt_BR';
};

export const getUnits = () => {
  return getLanguageByDevice() === 'en' ? 'imperial' : 'metric';
};

export const getMetric = () => {
  return getLanguageByDevice() === 'en' ? 'F' : 'C';
};
