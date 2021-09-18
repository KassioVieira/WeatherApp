import React from 'react';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <Text>Weather App</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
