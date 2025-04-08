import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Wrapper from '../../components/Wrapper';
import SurveyOption from '../../components/SurveyOption';
import IconButton from '../../components/IconButton';

export default function AgeScreen({navigation}) {
  const options = ['18-24', '25-34', '35-44', '45+'];
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelection = ({option}) => {
    setSelectedOption(option);
    navigation.navigate('Relationship');
  };

  return (
    <Wrapper style={styles.container}>
      <IconButton icon="chevron-back" onPress={() => navigation.goBack()} />
      <Text style={styles.title}>What’s your age?</Text>
      <Text style={styles.subtitle}>
        This helps us to personalize your experience
      </Text>
      {options.map((option, index) => (
        <SurveyOption key={index} onPress={handleSelection} option={option} />
      ))}
    </Wrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    color: '#fff',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 16,
    color: '#aaa',
    marginBottom: 30,
  },
});
