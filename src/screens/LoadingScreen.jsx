import React, {useEffect} from 'react';
import {View, Text, ActivityIndicator, StyleSheet} from 'react-native';
import Wrapper from '../components/Wrapper';

export default function LoadingScreen({navigation}) {
  useEffect(() => {
    setTimeout(() => navigation.replace('Main'), 2000);
  }, []);

  return (
    <Wrapper style={styles.container}>
      <ActivityIndicator size="large" color="#8b5cf6" />
      <Text style={styles.text}>Creating your plan...</Text>
    </Wrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 16,
    marginTop: 20,
  },
});
