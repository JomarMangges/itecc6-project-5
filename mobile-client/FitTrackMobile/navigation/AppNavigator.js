import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import AddWorkoutScreen from '../screens/AddWorkoutScreen';
import ProgressScreen from '../screens/ProgressScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Add Workout" component={AddWorkoutScreen} />
      <Stack.Screen name="Progress" component={ProgressScreen} />
    </Stack.Navigator>
  );
}
