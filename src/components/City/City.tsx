import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Swipeable} from 'react-native-gesture-handler';

import {CityProps} from './City.types';
import {Favorite, Remove} from './City.styles';
import {Body, Title} from 'components/Text';
import {Card, Row, Col, Spacer} from 'components/Layout';
import colors from 'values/colors';
import {getTemp} from 'utils/temp';
import {translate} from 'locales';

const City = ({
  name,
  main,
  weather,
  country,
  favorite,
  remove,
  onPress,
  favoritePress,
}: CityProps) => {
  const rightAction = () => {
    return (
      <Remove onPress={remove}>
        <Icon color={colors.secondary} size={30} name="trash-can-outline" />
        <Body color={colors.secondary}>{translate('delete')}</Body>
      </Remove>
    );
  };

  return (
    <Swipeable
      containerStyle={{marginTop: 16}}
      renderRightActions={rightAction}
      onSwipeableRightOpen={() => console.log('Opening')}>
      <Card onPress={onPress}>
        <Row>
          <Col>
            <Title>{name}</Title>
            <Body top={5} style={{marginLeft: -5}}>
              {country}
            </Body>
          </Col>
          <Title color={colors.textPrimary} size={34}>
            {getTemp(main.temp)}
          </Title>
        </Row>
        <Spacer />
        <Row>
          <Col>
            <Body color={colors.textPrimary}>{weather[0].description}</Body>
            <Body>
              {getTemp(main.temp_min)} - {getTemp(main.temp_max)}
            </Body>
          </Col>
          <Favorite onPress={favoritePress}>
            <Icon
              name={favorite ? 'heart' : 'heart-outline'}
              color={colors.favorite}
              size={25}
            />
          </Favorite>
        </Row>
      </Card>
    </Swipeable>
  );
};

export default City;
