import React from 'react';
import {StatusBar, SafeAreaView, StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from 'store';

import {Screens} from 'screens';
import colors from 'values/colors';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaView style={styles.safe}>
          <StatusBar
            backgroundColor={colors.primary}
            barStyle="light-content"
          />
          <Screens />
        </SafeAreaView>
      </PersistGate>
    </Provider>
  );
};

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: colors.primary,
  },
});

export default App;
