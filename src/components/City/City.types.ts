export interface CityProps {
  name: string;
  id: number;
  main: Main;
  weather: Weather;
  sys: Sys;
  favorite: boolean;
  remove: Function;
  onPress: Function;
}

interface Main {
  temp: number;
  humidity: number;
  temp_min: number;
  temp_max: number;
}

interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}
interface Sys {
  country: string;
}
