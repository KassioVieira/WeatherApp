import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';

import {CitiesState} from 'store/cities/cities.types';
import {ApplicationState} from 'store';
import Empty from 'components/Empty/Empty';
import City from 'components/City';

const Cities = () => {
  const {data} = useSelector<ApplicationState, CitiesState>(
    ({cities}) => cities,
  );

  return (
    <View>
      <FlatList
        contentContainerStyle={styles.content}
        data={data.cities}
        renderItem={({item}) => <City {...item} />}
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
