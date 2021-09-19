import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {CityProps} from './City.types';
import {Card, Row, Col, Spacer, Favorite} from './City.styles';
import {Body, Title} from 'components/Text';
import colors from 'values/colors';

const City = ({name, main, weather, favorite}: CityProps) => {
  const getTemp = (temp: number) => `${temp.toFixed(0)}º`;

  return (
    <Card>
      <Row>
        <Col>
          <Title>{name}</Title>
          <Body top={5}>Brasil</Body>
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
        <Favorite>
          <Icon
            name={favorite ? 'heart' : 'heart-outline'}
            color={colors.favorite}
            size={25}
          />
        </Favorite>
      </Row>
    </Card>
  );
};

export default City;
