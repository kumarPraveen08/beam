import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  SectionList,
  RefreshControl,
  Image,
  Dimensions,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Wrapper from '../../components/Wrapper';
import {tasksBySection} from '../../utils/dummyData';

const {width, height} = Dimensions.get('window');

export default function HomeScreen({navigation}) {
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

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    // Simulate data fetch / or real reload logic
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  };

  return (
    <Wrapper>
      <SectionList
        sections={data}
        keyExtractor={item => item.id}
        onRefresh={onRefresh}
        refreshing={refreshing}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => (
          <>
            <View style={{alignSelf: 'center'}}>
              <Text style={styles.header}>Pillar</Text>
              <Image
                source={require('../../assets/sclupture.png')}
                style={[styles.image]}
              />
              <Text style={styles.date}>{formatted}</Text>
              <Text style={styles.username}>Praveen Prajapati</Text>
            </View>

            <View style={styles.statsRow}>
              <View style={styles.statBox}>
                <Text style={styles.label}>Pillar Score</Text>
                <Text style={styles.score}>39.3</Text>
              </View>
              <View style={styles.statBox}>
                <Text style={styles.label}>Streak</Text>
                <Text style={styles.score}>0 🔥</Text>
              </View>
            </View>
          </>
        )}
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
              <TouchableOpacity
                style={styles.startButton}
                onPress={() => navigation.navigate('Timer')}>
                <Text style={styles.startText}>START</Text>
              </TouchableOpacity>
            )}
          </View>
        )}
      />
    </Wrapper>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#1a1b20', padding: 20},
  header: {
    color: '#fff',
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  image: {
    width: height * 0.25,
    height: height * 0.25,
    marginBottom: 30,
    resizeMode: 'contain',
  },
  date: {color: '#8b5cf6', marginTop: 5, textAlign: 'center'},
  username: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center',
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    gap: 20,
  },
  statBox: {
    alignItems: 'center',
    padding: 20,
    paddingVertical: 25,
    backgroundColor: '#0F0F17',
    borderRadius: 12,
    flex: 1,
    gap: 8,
  },
  score: {fontSize: 32, color: '#fff', fontWeight: 700},
  label: {color: '#9AA0AF'},
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
  startButton: {
    backgroundColor: '#8b5cf6',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  startText: {color: '#fff', fontWeight: 'bold'},
  doneText: {textDecorationLine: 'line-through', color: '#9AA0AF'},
});
