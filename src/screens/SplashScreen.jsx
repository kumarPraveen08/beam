import React, {useEffect} from 'react';
import {View, Image, StyleSheet, Dimensions} from 'react-native';
import Wrapper from '../components/Wrapper';

const {width, height} = Dimensions.get('window');

export default function SplashScreen({navigation}) {
  useEffect(() => {
    setTimeout(() => navigation.replace('Welcome'), 2000);
  }, []);

  return (
    <Wrapper style={styles.container}>
      <Image source={require('../assets/sclupture.png')} style={styles.logo} />
    </Wrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: height * 0.2,
    height: height * 0.2,
    resizeMode: 'contain',
    backgroundColor: 'white',
    borderRadius: 32,
    padding: 20,
  },
});
