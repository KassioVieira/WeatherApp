import React from 'react';
import {StatusBar, SafeAreaView, StyleSheet} from 'react-native';

import {Screens} from 'screens';
import colors from 'values/colors';

const App = () => {
  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar backgroundColor={colors.primary} barStyle="light-content" />
      <Screens />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: colors.primary,
  },
});

export default App;
