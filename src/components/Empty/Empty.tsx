import React from 'react';
import {StyleSheet} from 'react-native';
import LottieView from 'lottie-react-native';

import {Wrapper} from './Empty.styles';
import {Title, Body} from 'components/Text';
import {translate} from 'locales';

const Empty = () => {
  return (
    <Wrapper>
      <LottieView
        source={require('../../assets/Lottie/animation.json')}
        autoPlay
        style={styles.lottie}
      />
      <Title>{translate('empty')}</Title>
      <Body center top={20}>
        {translate('help')}
      </Body>
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  lottie: {
    width: '60%',
  },
});

export default Empty;
