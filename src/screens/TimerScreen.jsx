import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Wrapper from '../components/Wrapper';
import IconButton from '../components/IconButton';

export default function TimerScreen({navigation}) {
  const [isPaused, setIsPaused] = useState(true);

  return (
    <Wrapper style={styles.container}>
      <IconButton icon="close" onPress={() => navigation.goBack()} />
      <Text style={styles.title}>Breakfast Freestyle</Text>

      <View style={styles.circleTimer}>
        <Text style={styles.timeText}>20:00</Text>
        <Text style={styles.statusText}>{isPaused ? 'PAUSED' : 'RUNNING'}</Text>
      </View>

      <View style={styles.controls}>
        <TouchableOpacity>
          <Ionicons name="refresh" size={32} color="#aaa" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setIsPaused(!isPaused)}>
          <Ionicons
            name={isPaused ? 'play-circle' : 'pause-circle'}
            size={48}
            color="#8b5cf6"
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="close" size={32} color="#aaa" />
        </TouchableOpacity>
      </View>

      <View style={styles.descriptionBox}>
        <Text style={styles.descriptionTitle}>DESCRIPTION</Text>
        <Text style={styles.descriptionText}>
          Combine 2-3 ingredients to make a creative breakfast. For example, mix
          a fruit with a spice or topping you wouldn't usually pair.
        </Text>
      </View>
    </Wrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  circleTimer: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 6,
    borderColor: '#8b5cf6',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  timeText: {
    fontSize: 32,
    color: '#fff',
    fontWeight: 'bold',
  },
  statusText: {
    color: '#aaa',
    fontSize: 14,
    marginTop: 4,
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
    marginBottom: 30,
  },
  descriptionBox: {
    backgroundColor: '#111',
    padding: 16,
    borderRadius: 12,
    width: '100%',
  },
  descriptionTitle: {
    color: '#aaa',
    fontSize: 14,
    marginBottom: 6,
  },
  descriptionText: {
    color: '#fff',
    fontSize: 15,
  },
});
