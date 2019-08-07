import React from 'react';
import {Container} from './styles'
import {StatusBar} from 'react-native';
import Header from '../../components/Header'
import Card from '../../components/Card'
import Transations from '../../components/Transations'

const Main = () => (
  <Container>
    <StatusBar barStyle="light-content" backgroundColor="#065BEA" />

    <Header/>
    <Card/>
    <Transations/>
    {/* <Image
      source={{
        uri: 'https://s3-sa-east-1.amazonaws.com/rocketseat-cdn/rocketseat_logo.png',
      }}
      style={styles.logo}
      resizeMode="contain"
    /> */}
    </Container>
);

export default Main;
