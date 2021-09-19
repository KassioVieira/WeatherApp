import axios from 'axios';
import Config from 'react-native-config';

const baseURL = Config.BASE_URL;

const instance = axios.create({
  baseURL,
});

export default instance;
