import React from 'react';
import {View, FlatList, StyleSheet, Alert} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import {CitiesState} from 'store/cities/cities.types';
import {removeCity, favoriteCity} from 'store/cities/cities.usecases';
import {ApplicationState} from 'store';
import Empty from 'components/Empty/Empty';
import City from 'components/City';

const Cities = () => {
  const {data} = useSelector<ApplicationState, CitiesState>(
    ({cities}) => cities,
  );

  const dispatch = useDispatch();

  const remove = (id: number, name: string) => {
    Alert.alert('Atenção', `Deseja remover ${name} da lista de cidades?`, [
      {
        text: 'Cancel',
        onPress: () => {},
        style: 'cancel',
      },
      {text: 'OK', onPress: () => removeCity(id, dispatch)},
    ]);
  };

  const open = (name: string) => {
    Alert.alert('Atenção', `detalhes ${name}`);
  };

  return (
    <View>
      <FlatList
        contentContainerStyle={styles.content}
        data={data.reverse()}
        renderItem={({item}) => (
          <City
            {...item}
            remove={() => remove(item.id, item.name)}
            onPress={() => open(item.name)}
            favoritePress={() => favoriteCity(item.id, dispatch)}
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
