import data from 'store/cities/cities.data';

export enum CitiesTypes {
  LOAD_PULL_DATA = 'LOAD_PULL_DATA',
  ERROR_PULL_DATA = 'ERROR_PULL_DATA',
  SUCCESS_PULL_DATA = 'SUCCESS_PULL_DATA',
}

type CitiesType = typeof data;

export interface CitiesState {
  readonly data: CitiesType;
  readonly error: object | null;
  readonly loading: boolean;
}
