import React, {useState} from 'react';
import {
  View,
  Text,
  SectionList,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Wrapper from '../../components/Wrapper';
import IconButton from '../../components/IconButton';
import {tasksBySection} from '../../utils/dummyData';
import CustomFooter from '../../components/CustomFooter';

export default function TasksScreen({navigation}) {
  const date = new Date();
  const options = {weekday: 'long', month: 'long', day: 'numeric'};
  const formatted = date.toLocaleDateString('en-US', options);
  const [data, setData] = useState(tasksBySection || []);

  const handlePress = (section, task) => {
    const newData = data.map(sec => {
      if (sec.title === section.title) {
        const updatedTasks = sec.data.map(item =>
          item.id === task.id ? {...item, done: !item.done} : item,
        );
        return {...sec, data: updatedTasks};
      }
      return sec;
    });

    setData(newData);
  };
  return (
    <Wrapper style={styles.container}>
      <View style={{alignSelf: 'center'}}>
        <Text style={styles.header}>Tasks</Text>
        <Text style={styles.date}>
          {formatted} • <Text style={{color: '#8b5cf6'}}>Today</Text>
        </Text>
        <Text style={styles.completed}>⚪ 90% completed</Text>
      </View>

      <SectionList
        sections={data}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        renderSectionHeader={({section: {title, data}}) => (
          <View style={styles.sectionHeader}>
            <Text style={styles.section}>{title}</Text>
            <Text style={styles.sectionTasks}>
              {data.length} {data.length > 1 ? 'tasks' : 'task'}
            </Text>
          </View>
        )}
        renderItem={({item, section}) => (
          <View style={styles.taskItem}>
            <TouchableOpacity onPress={() => handlePress(section, item)}>
              <Ionicons
                name={item.done ? 'checkmark-circle' : 'ellipse-outline'}
                size={30}
                color={item.done ? '#8b5cf6' : '#9AA0AF'}
              />
            </TouchableOpacity>
            <View style={styles.taskInfo}>
              <Text style={[styles.taskName, item.done && styles.doneText]}>
                {item.name}
              </Text>
              <Text style={styles.taskTime}>
                {item.time} • {item.category}
              </Text>
            </View>
            {!item.done && (
              <View style={styles.action}>
                <TouchableOpacity>
                  <Ionicons name="play-circle" size={28} color="#8b5cf6" />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Ionicons name="trash" size={28} color="#8b5cf6" />
                </TouchableOpacity>
              </View>
            )}
          </View>
        )}
        ListFooterComponent={<CustomFooter />}
      />

      <TouchableOpacity
        style={styles.fab}
        onPress={() => navigation.navigate('AddTask')}>
        <Ionicons name="add" size={28} color="#fff" />
      </TouchableOpacity>
    </Wrapper>
  );
}

const styles = StyleSheet.create({
  container: {},
  header: {
    fontSize: 26,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  date: {fontSize: 16, color: '#aaa', marginVertical: 4, textAlign: 'center'},
  completed: {
    color: '#fbbf24',
    fontSize: 14,
    marginBottom: 12,
    textAlign: 'center',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 32,
  },
  section: {color: '#8b5cf6', fontSize: 18, marginBottom: 10},
  sectionTasks: {color: '#9AA0AF', fontSize: 14, marginBottom: 10},
  taskItem: {
    flexDirection: 'row',
    alignItems: 'center',
    // marginBottom: 16,
    borderBottomColor: '#9AA0AF',
    borderBottomWidth: 0.5,
    paddingVertical: 20,
  },
  taskInfo: {flex: 1, marginHorizontal: 12},
  taskName: {fontSize: 16, color: '#fff'},
  taskTime: {fontSize: 12, color: '#9AA0AF'},
  action: {gap: 12, flexDirection: 'row'},
  fab: {
    position: 'absolute',
    right: 20,
    bottom: 30,
    backgroundColor: '#8b5cf6',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    elevation: 2,
    width: 60,
    height: 60,
    boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
  },
});
