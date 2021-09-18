import Reactotron from 'reactotron-react-native';
import {reactotronRedux} from 'reactotron-redux';
import {NativeModules} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

declare global {
  interface Console {
    tron: any;
  }
}

export const reactotron = {
  initiate: () => {
    const {scriptURL} = NativeModules.SourceCode;
    const host = scriptURL.split('://')[1].split(':')[0];

    Reactotron.configure({host})
      .useReactNative()
      .use(reactotronRedux())
      .setAsyncStorageHandler(AsyncStorage)
      .connect()
      .clear();

    console.tron = Reactotron;
  },
  createEnhancer: () => Reactotron.createEnhancer(),
};
