export interface CityProps {
  name: string;
  id: number;
  main: Main;
  weather: Weather;
  country: String;
  favorite: boolean;
  remove: Function;
  onPress: Function;
  favoritePress: Function;
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
