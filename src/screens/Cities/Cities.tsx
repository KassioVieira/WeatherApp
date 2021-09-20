import React from 'react';
import {View, FlatList, StyleSheet, Alert} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import {CitiesState} from 'store/cities/cities.types';
import {removeCity, favoriteCity} from 'store/cities/cities.usecases';
import {ApplicationState} from 'store';
import Empty from 'components/Empty/Empty';
import City from 'components/City';
import {useNavigation} from '@react-navigation/core';
import Loading from 'components/Loading';

interface CitySelected {
  id: number;
  name: string;
  country: string;
}

const Cities = () => {
  const {data, loading} = useSelector<ApplicationState, CitiesState>(
    ({cities}) => cities,
  );

  const dispatch = useDispatch();
  const navigation = useNavigation();

  const remove = ({id, name}: CitySelected) => {
    Alert.alert('Atenção', `Deseja remover ${name} da lista de cidades?`, [
      {
        text: 'Cancel',
        onPress: () => {},
        style: 'cancel',
      },
      {text: 'OK', onPress: () => removeCity(id, dispatch)},
    ]);
  };

  const open = ({name, country}: CitySelected) => {
    navigation.navigate('Detail', {title: name, country});
  };

  console.tron.log('Loading ', loading);
  return (
    <View>
      <FlatList
        contentContainerStyle={styles.content}
        data={data}
        renderItem={({item}) => (
          <City
            {...item}
            remove={() => remove(item)}
            onPress={() => open(item)}
            favoritePress={() => favoriteCity(item.id, dispatch)}
          />
        )}
        keyExtractor={item => `${item.id}`}
        ListEmptyComponent={<Empty />}
      />
      <Loading show={loading} />
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    paddingBottom: 20,
  },
});

export default Cities;
