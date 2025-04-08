import React, {useEffect, useState} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {RadarChart} from '@salmonco/react-native-radar-chart';
import SegmentedControl from '@react-native-segmented-control/segmented-control';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {Dimensions} from 'react-native';
import Wrapper from '../../components/Wrapper';
import {celebrities} from '../../utils/dummyData';

const Tab = createMaterialTopTabNavigator();
const screenWidth = Dimensions.get('window').width;

const categories = [
  {label: 'Nutrition', value: 60.0, potential: 40, color: '#8b5cf6'},
  {label: 'Strength', value: 35.2, potential: 40, color: '#ff4d4d'},
  {label: 'Focus', value: 35.2, potential: 40, color: '#ff4d4d'},
  {label: 'Relationships', value: 35.0, potential: 65, color: '#ff4d4d'},
  {label: 'Spirituality', value: 35.4, potential: 40, color: '#ff4d4d'},
  {label: 'Time Management', value: 35.0, potential: 40, color: '#ff4d4d'},
];

function ProgressTab() {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.scrollviewContainer}>
      <Text style={styles.header}>Your Evaluation</Text>
      <Text style={styles.subtext}>Current vs Potential</Text>

      {/* Score Card */}
      <View style={styles.scoreCard}>
        <Text style={styles.label}>Pillar Score</Text>
        <View style={styles.scoreRow}>
          <Text style={styles.score}>39.3</Text>
          <Text style={styles.growth}>↑ +60.7%</Text>
          <Text style={styles.growthText}>Potential Growth</Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Your Current Stats</Text>

      <View style={styles.grid}>
        {categories.map((item, index) => (
          <View style={styles.statCard} key={index}>
            <View style={styles.statHeader}>
              <Text style={[styles.statValue, {color: item.color}]}>
                {item.value.toFixed(1)}{' '}
                <Ionicons name="trending-up" size={12} color={item.color} />
              </Text>
              <Text style={styles.statLabel}>{item.label}</Text>
            </View>
            <View
              style={[
                styles.progressLine,
                {backgroundColor: item.color, opacity: 0.7},
              ]}
            />
            <Text style={styles.potential}>+{item.potential}% potential</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

function GraphTab() {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const totalScore = celebrities.reduce(
      (total, item) => total + item?.value,
      0,
    );
    setTotal((totalScore / 6).toFixed(1));
  }, []);

  //#13d182
  return (
    <View style={styles.radarContainer}>
      <Text style={[styles.header, {marginTop: 20}]}>
        Your Evaluation Graph
      </Text>
      <Text style={styles.subtext}>Overall Score</Text>
      <View style={styles.radar}>
        <RadarChart
          data={categories}
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
          dataFillColor="#13d182"
          dataFillOpacity={0.5}
          dataStroke="#13d182"
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
    </View>
  );
}

export default function StatsScreen() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <Wrapper style={styles.container}>
      <SegmentedControl
        values={['Progress', 'Graph']}
        selectedIndex={activeIndex}
        onChange={event =>
          setActiveIndex(event.nativeEvent.selectedSegmentIndex)
        }
        backgroundColor="#121418"
        tintColor="#1a1b20"
        style={{height: 50, borderRadius: 25}}
        sliderStyle={{borderRadius: 25}}
        appearance="dark"
      />
      {activeIndex === 0 ? <ProgressTab /> : <GraphTab />}
    </Wrapper>
  );
}

const styles = StyleSheet.create({
  container: {},
  radarContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollviewContainer: {
    flex: 1,
    backgroundColor: '#1a1b20',
    paddingTop: 20,
  },
  header: {
    fontSize: 22,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtext: {
    fontSize: 14,
    color: '#9AA0AF',
    textAlign: 'center',
    marginBottom: 20,
  },
  scoreCard: {
    backgroundColor: '#121418',
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
  },
  label: {color: '#9AA0AF', fontSize: 14, marginBottom: 6},
  scoreRow: {flexDirection: 'row', alignItems: 'center', gap: 8},
  score: {fontSize: 32, color: '#fff', fontWeight: 'bold'},
  growth: {color: '#4ade80', fontSize: 16},
  growthText: {color: '#9AA0AF', fontSize: 12},
  sectionTitle: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 12,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  statCard: {
    backgroundColor: '#121418',
    borderRadius: 12,
    padding: 16,
    width: '48%',
    marginBottom: 16,
    gap: 10,
  },
  statHeader: {marginBottom: 10},
  statValue: {fontSize: 24, fontWeight: 'bold'},
  statLabel: {fontSize: 14, color: '#9AA0AF'},
  progressLine: {
    height: 2,
    marginVertical: 10,
    borderRadius: 1,
  },
  potential: {color: '#9AA0AF', fontSize: 12},
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
});
