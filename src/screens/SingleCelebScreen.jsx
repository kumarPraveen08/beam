import React, {useEffect, useState} from 'react';
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
import {RadarChart} from '@salmonco/react-native-radar-chart';

const celeb = {
  name: 'Elon Musk',
  score: [
    {label: 'Nutrition', value: 95},
    {label: 'Strength', value: 60},
    {label: 'Focus', value: 85},
    {label: 'Relationships', value: 75},
    {label: 'Spirituality', value: 30},
    {label: 'Time Management', value: 65},
  ],
  routine: [1, 2, 3, 4, 5, 6, 7],
  habit: [1, 2, 3, 4, 5, 6, 7, 8],
};

export default function SingleCelebScreen({navigation}) {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const totalScore = celeb.score.reduce(
      (total, item) => total + item?.value,
      0,
    );
    setTotal((totalScore / 6).toFixed(1));
  }, []);

  const handleTask = () => {
    let id = new Date();
    id = Math.floor(id / 1000);
    // addTask({ id, name, description, time: selectedTime, category: selectedCategory, done: false })
  };

  const handlePress = item => {
    console.log(`this ${item} selected!`);
  };

  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}>
        <IconButton
          icon="close"
          style={{top: 10}}
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.title}>{celeb.name}</Text>
        <View style={styles.radar}>
          <RadarChart
            data={celeb.score}
            maxValue={100}
            gradientColor={{
              startColor: '#1a1b20aa',
              endColor: '#1a1b20aa',
              count: 5,
            }}
            scale={1}
            stroke={['#9AA0AF', '#9AA0AF', '#9AA0AF', '#9AA0AF', '#9AA0AF']}
            strokeWidth={[1, 1, 1, 1, 1]}
            strokeOpacity={[0.13, 0.13, 0.13, 0.13, 0.13]}
            labelColor="#9AA0AF"
            dataFillColor="#8b5cf6"
            dataFillOpacity={0.5}
            dataStroke="#8b5cf6"
            dataStrokeWidth={2}
            divisionStroke="#9AA0AF"
            divisionStrokeWidth={1}
            divisionStrokeOpacity={0.13}
            isCircle
          />
          <View style={styles.totalScoreContainer}>
            <Text style={styles.totalScore}>{total}</Text>
            <Text style={styles.totalScoreText}>Total Score</Text>
          </View>
        </View>

        <View style={styles.grid}>
          {celeb.score.map((item, index) => (
            <View style={styles.statCard} key={index}>
              <View style={styles.statHeader}>
                <Text style={styles.statLabel}>{item.label}</Text>
                <Text style={[styles.statValue, {color: 'white'}]}>
                  {item.value.toFixed(1)} /100
                  <Ionicons name="trending-up" size={12} color={item.color} />
                </Text>
              </View>
              <View
                style={[
                  styles.progressLine,
                  {backgroundColor: item.color, opacity: 0.7},
                ]}
              />
              <Text style={styles.potential}>
                +{100 - item.value}% potential
              </Text>
            </View>
          ))}
        </View>

        <View style={{marginBottom: 12}}>
          <Text style={styles.sectionTitle}>Daily Routine</Text>
          <View style={styles.list}>
            {celeb.routine.map((item, index) => {
              return (
                <TouchableOpacity
                  onPress={() => handlePress(item)}
                  style={styles.taskItem}>
                  <TouchableOpacity onPress={() => handlePress(item)}>
                    <Ionicons
                      name={
                        index === 5 ? 'checkmark-circle' : 'ellipse-outline'
                      }
                      size={30}
                      color={index === 5 ? '#8b5cf6' : '#9AA0AF'}
                    />
                  </TouchableOpacity>
                  <View style={styles.taskInfo}>
                    <Text
                      style={[styles.taskName, index === 5 && styles.doneText]}>
                      task {index}
                    </Text>
                    <Text style={styles.taskTime}>
                      this is some description for this particular task that you
                      should know about
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
        <View style={{marginBottom: 12}}>
          <Text style={styles.sectionTitle}>Sucess Habits</Text>
          <View style={styles.list}>
            {celeb.habit.map((item, index) => {
              return (
                <View style={styles.descriptionBox}>
                  <Ionicons name="star" color="yellow" size={18} />
                  <Text style={styles.descriptionText}>
                    Combine 2-3 ingredients to make a creative breakfast. For
                    example, mix a fruit with a spice or topping you wouldn't
                    usually pair.
                  </Text>
                </View>
              );
            })}
          </View>
        </View>
        <View style={{height: 100}} />
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.submitBtn} onPress={handleTask}>
          <Text style={styles.submitText}>Copy Their Routine</Text>
        </TouchableOpacity>
      </View>
    </>
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
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#1a1b20',
    alignItems: 'center',
    paddingHorizontal: 20,
    justifyContent: 'center',
    borderTopColor: '#9AA0AF20',
    borderTopWidth: 1,
  },
  submitBtn: {
    width: '100%',
    backgroundColor: '#8b5cf6',
    padding: 16,
    borderRadius: 30,
    marginVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  submitText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  close: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 1,
  },
  radar: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  totalScoreContainer: {
    backgroundColor: '#121418aa',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
    borderRadius: 50,
    width: 80,
    height: 80,
  },
  totalScore: {
    fontSize: 18,
    fontWeight: 500,
    color: 'white',
  },
  totalScoreText: {
    fontSize: 11,
    fontWeight: 500,
    color: 'white',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 32,
  },
  statCard: {
    backgroundColor: '#121418',
    borderRadius: 12,
    padding: 16,
    width: '48%',
    marginBottom: 16,
    gap: 10,
    borderColor: '#9AA0AF20',
    borderWidth: 1,
  },
  statValue: {fontSize: 24, fontWeight: 'bold', color: 'white'},
  statLabel: {fontSize: 14, color: '#9AA0AF'},
  potential: {color: '#9AA0AF', fontSize: 12},
  sectionTitle: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  taskItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#121418',
    borderRadius: 12,
  },
  taskInfo: {flex: 1, marginHorizontal: 12},
  taskName: {fontSize: 16, color: '#fff', fontWeight: 500},
  taskTime: {fontSize: 14, color: '#9AA0AF'},
  list: {
    gap: 12,
  },
  descriptionBox: {
    backgroundColor: '#111',
    padding: 16,
    borderRadius: 12,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  descriptionText: {
    color: '#fff',
    fontSize: 15,
  },
});
