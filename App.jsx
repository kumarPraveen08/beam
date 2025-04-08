import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import SplashScreen from './src/screens/SplashScreen.jsx';
import WelcomeScreen from './src/screens/WelcomeScreen.jsx';
import LoginScreen from './src/screens/LoginScreen.jsx';
import RegisterScreen from './src/screens/RegisterScreen.jsx';
import AgeScreen from './src/screens/Survey/AgeScreen.jsx';
import RelationshipScreen from './src/screens/Survey/RelationshipScreen.jsx';
import TimeManagementScreen from './src/screens/Survey/TimeManagementScreen.jsx';
import ExerciseScreen from './src/screens/Survey/ExerciseScreen.jsx';
import NotificationPrefScreen from './src/screens/Survey/NotificationPrefScreen.jsx';
import LoadingScreen from './src/screens/LoadingScreen.jsx';
import PaywallScreen from './src/screens/PaywallScreen.jsx';

// Tab Screens
import HomeScreen from './src/screens/tabs/HomeScreen.jsx';
import TasksScreen from './src/screens/tabs/TasksScreen.jsx';
import CelebritiesScreen from './src/screens/tabs/CelebritiesScreen.jsx';
import StatsScreen from './src/screens/tabs/StatsScreen.jsx';
import TimerScreen from './src/screens/TimerScreen.jsx';
import AddTaskScreen from './src/screens/AddTaskScreen.jsx';
import {StatusBar} from 'react-native';
import GuestScreen from './src/screens/GuestScreen.jsx';
import SingleCelebScreen from './src/screens/SingleCelebScreen.jsx';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          backgroundColor: '#1a1b20',
          height: 65,
          paddingTop: 5,
          borderTopWidth: 0,
        },
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'Home')
            iconName = focused ? 'home' : 'home-outline';
          else if (route.name === 'Tasks')
            iconName = focused ? 'view-list' : 'view-list-outline';
          else if (route.name === 'Celebrities')
            iconName = focused ? 'star' : 'star-outline';
          else if (route.name === 'Stats')
            iconName = focused ? 'chart-box' : 'chart-box-outline';
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#8b5cf6',
        tabBarInactiveTintColor: '#fff',
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Tasks" component={TasksScreen} />
      <Tab.Screen name="Celebrities" component={CelebritiesScreen} />
      <Tab.Screen name="Stats" component={StatsScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={'#1a1b20'} />
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          navigationBarColor: '#1a1b20',
          animation: 'slide_from_right',
        }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Guest" component={GuestScreen} />
        <Stack.Screen name="Age" component={AgeScreen} />
        <Stack.Screen name="Relationship" component={RelationshipScreen} />
        <Stack.Screen name="TimeManagement" component={TimeManagementScreen} />
        <Stack.Screen name="Exercise" component={ExerciseScreen} />
        <Stack.Screen name="Notifications" component={NotificationPrefScreen} />
        <Stack.Screen name="Loading" component={LoadingScreen} />
        <Stack.Screen name="Main" component={MainTabs} />
        <Stack.Screen
          name="Timer"
          component={TimerScreen}
          options={{animation: 'slide_from_bottom'}}
        />
        <Stack.Screen
          name="AddTask"
          component={AddTaskScreen}
          options={{animation: 'slide_from_bottom'}}
        />
        <Stack.Screen
          name="SingleCeleb"
          component={SingleCelebScreen}
          options={{animation: 'slide_from_bottom'}}
        />
        <Stack.Screen name="Paywall" component={PaywallScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
