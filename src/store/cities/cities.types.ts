export enum CitiesTypes {
  LOAD_PULL_DATA = 'LOAD_PULL_DATA',
  ERROR_PULL_DATA = 'ERROR_PULL_DATA',
  SUCCESS_PULL_DATA = 'SUCCESS_PULL_DATA',
  REMOVE_PULL_DATA = 'REMOVE_PULL_DATA',
  FAVORITE_CITY = 'FAVORITE_CITY',
}

type CitiesType = Object;

export interface CitiesState {
  readonly data: [CitiesType];
  readonly error: object | null;
  readonly loading: boolean;
}

export interface CitiesRequest {
  city: string;
  country: string;
}
