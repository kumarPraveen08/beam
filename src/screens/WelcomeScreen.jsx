import React from 'react';
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';
import Wrapper from '../components/Wrapper';
import AuthButton from '../components/AuthButton';

const {width, height} = Dimensions.get('window');

export default function WelcomeScreen({navigation}) {
  return (
    <Wrapper style={styles.container}>
      <Text style={styles.title}>Welcome</Text>
      <Text style={styles.subtitle}>Rome wasn't built in one day</Text>
      <Image
        source={require('../assets/sclupture.png')}
        style={[styles.image]}
      />
      <View style={styles.buttonWrapper}>
        <AuthButton
          icon="mail"
          title="Continue with Email"
          onPress={() => navigation.navigate('Login')}
        />
        <AuthButton
          icon="person"
          title="Continue as Guest"
          onPress={() => navigation.navigate('Guest')}
        />
      </View>
      <Text style={styles.terms}>
        By continuing you agree to our{' '}
        <Text style={styles.link}>Terms of Service</Text> and{' '}
        <Text style={styles.link}>Privacy Policy</Text>
      </Text>
    </Wrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#aaa',
    marginBottom: 20,
  },
  image: {
    width: height * 0.3,
    height: height * 0.3,
    marginBottom: 30,
    resizeMode: 'contain',
  },
  buttonWrapper: {
    width: '100%',
  },
  terms: {
    marginTop: 30,
    color: '#aaa',
    textAlign: 'center',
    fontSize: 12,
  },
  link: {
    color: '#8b5cf6',
  },
});
