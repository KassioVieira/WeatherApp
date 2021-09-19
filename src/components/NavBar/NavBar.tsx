import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

import colors from 'values/colors';
import {NavBarProps} from './NavBar.types';

import {Header, Title} from './NavBar.styles';

interface CityProps {
  description: string;
}

const NavBar = ({title}: NavBarProps) => {
  const [isOpen, setOpen] = useState(false);

  const handleOnPress = () => {
    setOpen(!isOpen);
  };

  const add = (city: CityProps) => {
    console.tron.log(city.description);
  };

  const renderSearhcInput = () => {
    return (
      <>
        <TouchableOpacity onPress={handleOnPress}>
          <Icon name="close" size={30} color={colors.secondary} />
        </TouchableOpacity>
        {/* <Input autoFocus={true} /> */}
        <GooglePlacesAutocomplete
          placeholder=""
          onPress={(data: CityProps) => {
            add(data);
          }}
          listViewDisplayed={false}
          query={{
            key: 'AIzaSyAAIXdgMWTWmPKqPds5FZPMAaFc9C7LJBU',
            language: 'pt_BR',
          }}
          styles={{
            listView: {
              zIndex: 9,
              position: 'absolute',
              top: 51,
            },
          }}
        />
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
