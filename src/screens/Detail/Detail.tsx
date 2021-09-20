import React, {useEffect} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';

import {useSelector, useDispatch} from 'react-redux';
import {ApplicationState} from 'store';
import {CitiesRequest} from 'store/cities/cities.types';
import {CityState} from 'store/city/city.types';
import {getFiveDays} from 'store/city/city.usecases';

import Day from 'components/Day';
import Loading from 'components/Loading';
import {Body} from 'components/Text';

const Detail = ({route}) => {
  const {title, country} = route.params;
  const dispatch = useDispatch();
  const {data, loading} = useSelector<ApplicationState, CityState>(
    ({city}) => city,
  );

  useEffect(() => {
    const values: CitiesRequest = {
      city: title,
      country,
    };
    getFiveDays(values, dispatch);
  }, []);

  return (
    <View>
      <FlatList
        contentContainerStyle={styles.content}
        data={data}
        renderItem={({item}) => <Day {...item} />}
        keyExtractor={item => item.day}
        ListEmptyComponent={<View />}
        ListHeaderComponent={
          <Body center top={20}>
            Previsão para os próximos 5 dias
          </Body>
        }
      />
      <Loading show={loading} />
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    paddingTop: 10,
    paddingBottom: 80,
  },
});

export default Detail;
