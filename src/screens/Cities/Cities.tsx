import React from 'react';
import {View, FlatList, StyleSheet, Alert} from 'react-native';
import {useSelector} from 'react-redux';

import {CitiesState} from 'store/cities/cities.types';
import {ApplicationState} from 'store';
import Empty from 'components/Empty/Empty';
import City from 'components/City';

const Cities = () => {
  const {data} = useSelector<ApplicationState, CitiesState>(
    ({cities}) => cities,
  );

  const remove = (name: string) => {
    Alert.alert('Atenção', `remover ${name}`);
  };

  const open = (name: string) => {
    Alert.alert('Atenção', `detalhes ${name}`);
  };

  return (
    <View>
      <FlatList
        contentContainerStyle={styles.content}
        data={data.cities}
        renderItem={({item}) => (
          <City
            {...item}
            remove={() => remove(item.name)}
            onPress={() => open(item.name)}
          />
        )}
        keyExtractor={item => `${item.id}`}
        ListEmptyComponent={<Empty />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    paddingVertical: 30,
  },
});

export default Cities;
