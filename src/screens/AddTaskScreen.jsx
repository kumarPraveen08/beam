import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import IconButton from '../components/IconButton';
// import useTasksStore from '../store/tasksStore';
import Ionicons from 'react-native-vector-icons/Ionicons';

const categories = ['Nutrition', 'Strength', 'Focus', 'Relationships'];
const times = ['8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM'];
const durations = ['5m', '15m', '25m', '30m', '45m', '60m'];
const mode = ['Easy', 'Medium', 'Hard', 'Extra Hard', 'Extreme'];

export default function AddTaskScreen({navigation}) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Strength');
  const [selectedTime, setSelectedTime] = useState('8:00 AM');
  const [selectedDuration, setSelectedDuration] = useState('25m');
  const [selectedMode, setSelectedMode] = useState('Medium');
  // const { addTask } = useTasksStore();

  const handleTask = () => {
    let id = new Date();
    id = Math.floor(id / 1000);
    // addTask({ id, name, description, time: selectedTime, category: selectedCategory, done: false })
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <IconButton
        icon="close"
        onPress={() => navigation.goBack()}
        style={{top: 10}}
      />
      <Text style={styles.title}>New Task</Text>

      <Text style={styles.label}>TITLE</Text>
      <TextInput
        value={name}
        onChangeText={setName}
        style={styles.input}
        placeholder="Task title"
        placeholderTextColor="#9AA0AF"
      />

      <Text style={styles.label}>CATEGORY</Text>
      <View style={styles.row}>
        {categories.map(cat => (
          <TouchableOpacity
            key={cat}
            style={[styles.chip, selectedCategory === cat && styles.chipActive]}
            onPress={() => setSelectedCategory(cat)}>
            <Text
              style={
                selectedCategory === cat
                  ? styles.chipTextActive
                  : styles.chipText
              }>
              {cat}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.label}>TIME</Text>
      <View style={styles.row}>
        {times.map(t => (
          <TouchableOpacity
            key={t}
            style={[styles.chip, selectedTime === t && styles.chipActive]}
            onPress={() => setSelectedTime(t)}>
            <Text
              style={
                selectedTime === t ? styles.chipTextActive : styles.chipText
              }>
              {t}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.label}>DURATION (MINUTES)</Text>
      <View style={styles.row}>
        {durations.map(d => (
          <TouchableOpacity
            key={d}
            style={[styles.chip, selectedDuration === d && styles.chipActive]}
            onPress={() => setSelectedDuration(d)}>
            <Text
              style={
                selectedDuration === d ? styles.chipTextActive : styles.chipText
              }>
              {d}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.label}>TYPE</Text>
      <View style={styles.row}>
        {mode.map(d => (
          <TouchableOpacity
            key={d}
            style={[styles.chip, selectedMode === d && styles.chipActive]}
            onPress={() => setSelectedMode(d)}>
            <Text
              style={
                selectedMode === d ? styles.chipTextActive : styles.chipText
              }>
              {d}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.label}>DESCRIPTION</Text>
      <TextInput
        value={description}
        onChangeText={setDescription}
        style={[styles.input, {height: 100}]}
        multiline
        placeholder="Task description"
        placeholderTextColor="#9AA0AF"
      />

      <TouchableOpacity style={styles.submitBtn} onPress={handleTask}>
        <Text style={styles.submitText}>Create Task</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {padding: 20, backgroundColor: '#1a1b20', flexGrow: 1},
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },
  label: {color: '#888', fontSize: 14, marginBottom: 6},
  input: {
    borderWidth: 0.5,
    borderColor: '#9AA0AF',
    borderRadius: 10,
    padding: 14,
    color: '#fff',
    marginBottom: 16,
    backgroundColor: '#15161B',
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginBottom: 28,
    marginTop: 8,
  },
  chip: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: '#15161B',
    borderRadius: 20,
  },
  chipActive: {backgroundColor: '#fff'},
  chipText: {color: '#fff'},
  chipTextActive: {color: '#000', fontWeight: 500},
  submitBtn: {
    backgroundColor: '#8b5cf6',
    padding: 16,
    borderRadius: 30,
    marginTop: 20,
    alignItems: 'center',
  },
  submitText: {color: '#fff', fontWeight: 'bold', fontSize: 16},
  close: {
    // width: 44,
    // height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 1,
    // backgroundColor: '#212939',
    // borderRadius: 22,
  },
});
