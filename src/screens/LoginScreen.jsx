import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Wrapper from '../components/Wrapper';
import IconButton from '../components/IconButton';

export default function LoginScreen({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(true);

  const handleRegister = () => {
    if (
      email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      ) &&
      password.length > 6
    ) {
      navigation.navigate('Guest');
    }
  };

  useEffect(() => {
    if (password.length > 6) {
      setLoading(false);
    }
  }, [password, setLoading]);
  return (
    <Wrapper style={styles.container}>
      <IconButton icon="chevron-back" onPress={() => navigation.goBack()} />
      <Text style={styles.title}>Welcome Back</Text>
      <Text style={styles.subtitle}>Sign in to continue</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        placeholderTextColor="#9AA0AF"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter your password"
        secureTextEntry
        placeholderTextColor="#9AA0AF"
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity
        style={styles.button}
        disabled={loading}
        onPress={handleRegister}>
        <Text
          style={[styles.buttonText, {color: loading ? '#7F7D96' : 'white'}]}>
          Sign In
        </Text>
      </TouchableOpacity>

      <Text style={styles.footer}>
        Need an account?{' '}
        <Text
          onPress={() => navigation.navigate('Register')}
          style={styles.link}>
          Sign Up
        </Text>
      </Text>
    </Wrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#aaa',
    marginBottom: 30,
  },
  input: {
    backgroundColor: '#212939',
    color: '#fff',
    padding: 14,
    borderRadius: 10,
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#543D92',
    padding: 16,
    borderRadius: 10,
    marginTop: 10,
  },
  buttonText: {
    color: '#7F7D96',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  footer: {
    marginTop: 20,
    color: '#aaa',
    textAlign: 'center',
  },
  link: {
    color: '#8b5cf6',
  },
});
