import {Title} from 'components/Text';
import React from 'react';
import {Modal, StyleSheet} from 'react-native';
import LottieView from 'lottie-react-native';

import {Container, Content} from './Loading.styles';
import {LoadingProps} from './Loading.types';

const Loading = ({show}: LoadingProps) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={show}
      onRequestClose={() => {
        console.log('close');
      }}>
      <Container>
        <Content>
          <LottieView
            source={require('../../assets/Lottie/loading.json')}
            autoPlay
            style={styles.lottie}
          />
          <Title>Carregando...</Title>
        </Content>
      </Container>
    </Modal>
  );
};

const styles = StyleSheet.create({
  lottie: {
    width: '60%',
  },
});

export default Loading;
