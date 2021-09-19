import Empty from 'components/Empty/Empty';
import React from 'react';
import {View, Text, FlatList} from 'react-native';

const Cities = () => {
  return (
    <View>
      <FlatList
        data={[]}
        renderItem={({item}) => (
          <View>
            <Text>{item.city}</Text>
          </View>
        )}
        keyExtractor={item => item.city}
        ListEmptyComponent={<Empty />}
      />
    </View>
  );
};

export default Cities;
