import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import SurveyOption from '../../components/SurveyOption';
import Wrapper from '../../components/Wrapper';
import IconButton from '../../components/IconButton';

export default function TimeManagementScreen({navigation}) {
  const options = ['Very well', 'Okay', 'Not great', 'Terrible'];
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelection = ({option}) => {
    setSelectedOption(option);
    navigation.navigate('Notifications');
  };

  return (
    <Wrapper style={styles.container}>
      <IconButton icon="chevron-back" onPress={() => navigation.goBack()} />
      <Text style={styles.title}>How well do you manage your time?</Text>
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
