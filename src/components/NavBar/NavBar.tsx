import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import colors from 'values/colors';
import {NavBarProps} from './NavBar.types';

import {Header} from './NavBar.styles';
import {Title} from 'components/Text';
import {useNavigation} from '@react-navigation/core';

const NavBar = ({title}: NavBarProps) => {
  const navigation = useNavigation();
  return (
    <Header>
      <Title color={colors.secondary}>{title}</Title>
      <TouchableOpacity onPress={() => navigation.navigate('Search')}>
        <Icon name="magnify" color={colors.secondary} size={30} />
      </TouchableOpacity>
    </Header>
  );
};

export default NavBar;
