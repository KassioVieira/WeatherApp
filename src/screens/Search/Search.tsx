import React, {useState} from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';

import SearchBar from 'components/SearchBar';
import {getCity} from 'store/cities/cities.usecases';
import {CitiesRequest} from 'store/cities/cities.types';
import Config from 'react-native-config';
import googlePlaces from 'services/GoogleService';
import {Card, Spacer} from 'components/Layout';
import {Body, Title} from 'components/Text';
import {AddButton, ListEmpty} from './Search.styles';
import {useNavigation} from '@react-navigation/core';
import colors from 'values/colors';
import {translate} from 'locales';

interface CityProps {
  description: string;
}

const Search = () => {
  const navigation = useNavigation();
  const [predictions, setPredictions] = useState({
    options: [],
    show: false,
  });
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();

  const add = (city: CityProps) => {
    const cityArray = city.description.split(',');
    const values: CitiesRequest = {
      city: cityArray[0],
      country: cityArray.length === 3 ? cityArray[2] : cityArray[1],
    };
    getCity(values, dispatch);
    setPredictions({options: [], show: false});
    navigation.goBack();
  };

  const onChange = async () => {
    if (search.trim() === '') return;
    try {
      const result = await googlePlaces.post(
        `/autocomplete/json?key=${Config.GOOGLE_PLACES_API}&input=${search}`,
      );

      if (result) {
        const {
          data: {predictions},
        } = result;
        setPredictions({options: predictions, show: true});
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View>
      <SearchBar
        onChange={(text: string) => {
          setSearch(text), onChange();
        }}
        close={() => navigation.goBack()}
      />
      <FlatList
        contentContainerStyle={styles.content}
        data={predictions.options}
        renderItem={({item}) => (
          <Card top={20}>
            <Title>{item.description}</Title>
            <Spacer />
            <AddButton onPress={() => add(item)}>
              <Body color={colors.primaryDark}>{translate('add')}</Body>
            </AddButton>
          </Card>
        )}
        ListEmptyComponent={() => <ListEmpty>{translate('search')}</ListEmpty>}
        keyExtractor={item => `${item.description}`}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    paddingBottom: 20,
  },
});

export default Search;
