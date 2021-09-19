import React from 'react';
import {StyleSheet} from 'react-native';
import LottieView from 'lottie-react-native';

import {Wrapper} from './Empty.styles';
import {Title, Body} from 'components/Text';

const Empty = () => {
  return (
    <Wrapper>
      <LottieView
        source={require('../../assets/Lottie/animation.json')}
        autoPlay
        style={styles.lottie}
      />
      <Title>Nenhuma cidade foi adicionada.</Title>
      <Body center top={20}>
        Tente Adicionar ima cidade usando o botão de busca.
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
