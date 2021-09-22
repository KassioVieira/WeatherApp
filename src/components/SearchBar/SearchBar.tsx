import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import colors from 'values/colors';

import {Header, Input} from './SearchBar.styles';
import {SearchBarProps} from './SearchBar.types';

const SearchBar = ({onChange, close}: SearchBarProps) => {
  return (
    <Header>
      <TouchableOpacity onPress={close}>
        <Icon name="close" size={30} color={colors.secondary} />
      </TouchableOpacity>
      <Input autoFocus={true} onChangeText={text => onChange(text)} />
    </Header>
  );
};

export default SearchBar;
