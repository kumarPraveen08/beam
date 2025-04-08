import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

const IconButton = ({onPress, icon, style}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, style]}>
      <Ionicons name={icon} size={24} color="white" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 44,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 1,
    backgroundColor: '#212939',
    borderRadius: 22,
  },
});

export default IconButton;
