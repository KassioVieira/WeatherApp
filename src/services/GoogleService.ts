import axios from 'axios';
import Config from 'react-native-config';

const googlePlaces = axios.create({
  baseURL: Config.GOOGLE_PLACES_URL,
});

export default googlePlaces;
