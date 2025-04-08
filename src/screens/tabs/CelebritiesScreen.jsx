import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import Wrapper from '../../components/Wrapper';
import {RadarChart} from '@salmonco/react-native-radar-chart';
import {celebrities} from '../../utils/dummyData';
import CustomFooter from '../../components/CustomFooter';

const getColor = match => {
  if (match < 25) return 'tomato';
  if (match < 50) return 'cyan';
  if (match < 75) return '#ff00ff';
  if (match < 100) return 'yellow';
};

export default function CelebritiesScreen({navigation}) {
  return (
    <Wrapper style={[styles.container, {paddingBottom: 0}]}>
      <View style={{alignSelf: 'center'}}>
        <Text style={styles.title}>Celebrities</Text>
        <Text style={styles.subtitle}>Learn From World-Class Leaders</Text>
      </View>
      <TextInput
        placeholder="Search"
        placeholderTextColor="#9AA0AF"
        style={styles.search}
      />
      <FlatList
        data={celebrities}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        initialNumToRender={10}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('SingleCeleb')}
            style={styles.card}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                source={{
                  uri: 'https://cdn-icons-png.flaticon.com/256/8044/8044578.png',
                }}
                style={styles.avatar}
              />
              <View>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={[styles.match]}>
                  <Text
                    style={{
                      color: getColor(parseInt(item.match)),
                      fontSize: 14,
                    }}>
                    {item.match}
                  </Text>{' '}
                  Match
                </Text>
              </View>
            </View>
            <View>
              <RadarChart
                data={item.score}
                maxValue={100}
                gradientColor={{count: 1}}
                dataFillColor="#0000ff"
                dataFillOpacity={0.5}
                dataStroke="#0000ff"
                dataStrokeWidth={1.5}
                divisionStroke="#9AA0AF"
                divisionStrokeWidth={0}
                strokeWidth={[1]}
                strokeOpacity={[0.13]}
                size={90}
              />
            </View>
          </TouchableOpacity>
        )}
        ListFooterComponent={<CustomFooter />}
      />
    </Wrapper>
  );
}

const styles = StyleSheet.create({
  container: {},
  title: {
    fontSize: 26,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#aaa',
    marginVertical: 4,
    textAlign: 'center',
    marginBottom: 20,
  },
  search: {
    borderWidth: 1,
    borderColor: '#9AA0AF20',
    borderRadius: 10,
    padding: 12,
    marginBottom: 20,
    backgroundColor: '#121418',
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#121418',
    paddingLeft: 14,
    borderRadius: 10,
    marginBottom: 14,
    borderColor: '#9AA0AF20',
    borderWidth: 1,
    justifyContent: 'space-between',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 14,
    borderColor: '#9AA0AF20',
    borderWidth: 1,
    filter: 'grayscale(100%)',
    resizeMode: 'contain',
  },
  name: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
  match: {
    fontSize: 12,
    color: '#9AA0AF',
  },
});
