import React from 'react';

import {DayProps} from './Day.types';
import {Card, Row, Col, Spacer} from 'components/Layout';
import {Body, Title} from 'components/Text';
import colors from 'values/colors';
import {getTemp} from 'utils/temp';

const Day = ({
  temp,
  temp_min,
  temp_max,
  description,
  weekday,
  date,
}: DayProps) => {
  return (
    <Card top={10}>
      <Row>
        <Col>
          <Title>{weekday}</Title>
          <Body top={5}>{date}</Body>
        </Col>
        <Title color={colors.textPrimary} size={34}>
          {getTemp(temp)}
        </Title>
      </Row>
      <Spacer />
      <Row>
        <Col>
          <Body color={colors.textPrimary}>{description}</Body>
          <Body>
            {getTemp(temp_min)} - {getTemp(temp_max)}
          </Body>
        </Col>
      </Row>
    </Card>
  );
};

export default Day;
