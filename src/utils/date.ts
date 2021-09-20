import {getLanguageByDevice} from 'locales';
import moment from 'moment';

const weekdays = {
  Monday: 'Segunda',
  Tuesday: 'Terça',
  Wednesday: 'Quarta',
  Thursday: 'Quinta',
  Friday: 'Sexta',
  Saturday: 'Sábado',
  Sunday: 'Domingo',
};

const months = {
  January: 'Janeiro',
  February: 'Fevereiro',
  March: 'Março',
  April: 'Abril',
  May: 'Maio',
  June: 'Junho',
  July: 'Julho',
  August: 'Agosto',
  September: 'Setembro',
  October: 'Outubro',
  November: 'Novembro',
  December: 'Dezembro',
};

export const getTemp = (temp: number) => `${parseInt(temp)}º`;

export const formatWeekDay = (date: string) => {
  const day = moment(date).format('dddd');
  const language = getLanguageByDevice();
  return language === 'en' ? day : weekdays[day];
};

export const formatDateWithMonth = (date: string) => {
  const month = moment(date).format('MMMM');
  const day = moment(date).format('DD');

  const language = getLanguageByDevice();

  return language === 'en' ? `${month} ${day}` : `${day} de ${months[month]}`;
};

export const formatDate = (date: string) => {
  return moment(date).format('DD/MM/YYYY');
};
