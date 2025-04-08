import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import SurveyOption from '../../components/SurveyOption';
import Wrapper from '../../components/Wrapper';
import IconButton from '../../components/IconButton';

export default function RelationshipScreen({navigation}) {
  const options = ['Single', 'In a relationship', 'Married', 'Other'];
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelection = ({option}) => {
    setSelectedOption(option);
    navigation.navigate('Exercise');
  };

  return (
    <Wrapper style={styles.container}>
      <IconButton icon="chevron-back" onPress={() => navigation.goBack()} />
      <Text style={styles.title}>Relationship status?</Text>
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
