export enum CityTypes {
  LOAD_CITY_DATA = 'LOAD_CITY_DATA',
  ERROR_CITY_DATA = 'ERROR_CITY_DATA',
  SUCCESS_CITY_DATA = 'SUCCESS_CITY_DATA',
}

type CityType = Object;

export interface CityState {
  readonly data: [CityType];
  readonly error: object | null;
  readonly loading: boolean;
}
