import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function RegisterScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Account</Text>
      <TextInput style={styles.input} placeholder="Enter your email" placeholderTextColor="#999" />
      <TextInput style={styles.input} placeholder="Create a password" secureTextEntry placeholderTextColor="#999" />
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Age')}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
      <Text style={styles.footer}>Already have an account? <Text onPress={() => navigation.navigate('Login')} style={styles.link}>Sign In</Text></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 30,
  },
  input: {
    backgroundColor: '#1e1e1e',
    color: '#fff',
    padding: 14,
    borderRadius: 10,
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#10b981',
    padding: 16,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
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