import {Title} from 'components/Text';
import React from 'react';
import {Modal, StyleSheet} from 'react-native';
import LottieView from 'lottie-react-native';

import {Container, Content} from './Loading.styles';
import {LoadingProps} from './Loading.types';
import {translate} from 'locales';

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
          <Title>{translate('loading')}</Title>
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
