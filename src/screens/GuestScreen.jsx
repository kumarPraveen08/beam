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
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function GuestScreen({navigation}) {
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(true);

  const handleRegister = () => {
    if (name.length > 3) {
      navigation.navigate('Age');
    }
  };

  useEffect(() => {
    if (name.length > 3) {
      setLoading(false);
    }
  }, [name, setLoading]);

  return (
    <Wrapper style={styles.container}>
      <IconButton icon="chevron-back" onPress={() => navigation.goBack()} />

      <Text style={styles.title}>What's your name?</Text>
      <Text style={styles.subtitle}>
        We'll use this to personalize your experience
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Enter your full name"
        placeholderTextColor="#9AA0AF"
        value={name}
        onChangeText={setName}
      />

      <TouchableOpacity
        style={styles.button}
        disabled={loading}
        onPress={handleRegister}>
        <Text
          style={[styles.buttonText, {color: loading ? '#7F7D96' : 'white'}]}>
          Continue
        </Text>
        <Ionicons
          name={'arrow-forward'}
          size={18}
          color={loading ? '#7F7D96' : 'white'}
        />
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
    flexDirection: 'row',
    gap: 12,
    justifyContent: 'center',
    alignItems: 'center',
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
