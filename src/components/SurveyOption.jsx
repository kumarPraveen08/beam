import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';

const SurveyOption = ({onPress, option}) => {
  return (
    <TouchableOpacity style={styles.option} onPress={onPress}>
      <Text style={[styles.optionText]}>{option}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  option: {
    backgroundColor: '#212939',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  optionText: {
    color: '#9AA0AF',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default SurveyOption;
