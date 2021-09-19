import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {useDispatch} from 'react-redux';
import Config from 'react-native-config';

import colors from 'values/colors';
import {NavBarProps} from './NavBar.types';

import {Header, Title} from './NavBar.styles';
import {getCity} from 'store/cities/cities.usecases';
import {CitiesRequest} from 'store/cities/cities.types';

interface CityProps {
  description: string;
}

const NavBar = ({title}: NavBarProps) => {
  const [isOpen, setOpen] = useState(false);
  const dispatch = useDispatch();

  const handleOnPress = () => {
    setOpen(!isOpen);
  };

  const add = (city: CityProps) => {
    const cityArray = city.description.split(',');
    const values: CitiesRequest = {
      city: cityArray[0],
      country: cityArray.length === 3 ? cityArray[2] : cityArray[1],
    };
    getCity(values, dispatch);
    setOpen(false);
  };

  const renderSearhcInput = () => {
    return (
      <>
        <TouchableOpacity onPress={handleOnPress}>
          <Icon name="close" size={30} color={colors.secondary} />
        </TouchableOpacity>
        <GooglePlacesAutocomplete
          placeholder=""
          minLength={4}
          onPress={(data: CityProps) => {
            add(data);
          }}
          listViewDisplayed={false}
          query={{
            key: Config.GOOGLE_PLACES_API,
            language: 'pt_BR',
          }}
          styles={{
            listView: {
              zIndex: 9,
              position: 'absolute',
              top: 51,
            },
            textInput: {
              color: colors.textSecondary,
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
