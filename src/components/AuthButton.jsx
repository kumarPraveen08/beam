import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

const AuthButton = ({onPress, title, icon}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Ionicons name={icon} size={20} color={'white'} />
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#212939',
    padding: 16,
    borderRadius: 12,
    marginBottom: 10,
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#1F2B36',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
});

export default AuthButton;
