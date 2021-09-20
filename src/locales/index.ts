import {Platform, NativeModules} from 'react-native';
import I18n from 'i18n-js';
import en from './en-US';
import pt from './pt-BR';

const normalizeTranslate = {
  en_US: 'en_US',
  pt_BR: 'pt_BR',
  en: 'en_US',
  pt_US: 'pt_BR',
};

export const getLanguageByDevice = () => {
  return Platform.OS === 'ios'
    ? NativeModules.SettingsManager.settings.AppleLanguages[0]
    : NativeModules.I18nManager.localeIdentifier;
};

I18n.translations = {
  en_US: en,
  pt_BR: pt,
};

const setLanguageToI18n = () => {
  let language = getLanguageByDevice();
  if (language.includes('-')) {
    language = language.replace('-', '_');
  }
  const translateNormalize = normalizeTranslate[language];
  const iHaveThisLanguage =
    I18n.translations.hasOwnProperty(translateNormalize);
  iHaveThisLanguage
    ? (I18n.locale = translateNormalize)
    : (I18n.defaultLocale = 'en_US');
};

setLanguageToI18n();

export const translate = key => I18n.t(key);
