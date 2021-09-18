import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from 'values/colors';
import {NavBarProps} from './NavBar.types';

import {Header, Title, Input} from './NavBar.styles';

const NavBar = ({title}: NavBarProps) => {
  const [isOpen, setOpen] = useState(false);

  const handleOnPress = () => {
    setOpen(!isOpen);
  };

  const renderSearhcInput = () => {
    return (
      <>
        <TouchableOpacity onPress={handleOnPress}>
          <Icon name="close" size={30} color={colors.secondary} />
        </TouchableOpacity>
        <Input autoFocus={true} />
      </>
    );
  };

  const renderNormal = () => {
    return (
      <>
        <Title>{title}</Title>
        <TouchableOpacity onPress={handleOnPress}>
          <Icon name="magnify" color={colors.secondary} size={30} />
        </TouchableOpacity>
      </>
    );
  };

  return (
    <Header justify={isOpen}>
      {isOpen ? renderSearhcInput() : renderNormal()}
    </Header>
  );
};

export default NavBar;
