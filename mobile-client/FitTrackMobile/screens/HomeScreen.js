import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { Card, Text, Button, Title } from 'react-native-paper';

const dummyWorkouts = [
  { id: '1', exercise: 'Push Ups', reps: 12, sets: 3 },
  { id: '2', exercise: 'Squats', reps: 15, sets: 4 },
];

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Title style={styles.heading}>🏋️ Your Workouts</Title>

      <FlatList
        data={dummyWorkouts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Card style={styles.card}>
            <Card.Content>
              <Text style={styles.title}>{item.exercise}</Text>
              <Text>Reps: {item.reps} | Sets: {item.sets}</Text>
            </Card.Content>
          </Card>
        )}
      />

      <View style={styles.buttons}>
        <Button
          mode="contained"
          onPress={() => navigation.navigate('Add Workout')}
          style={styles.button}
        >
          Add Workout
        </Button>
        <Button
          mode="outlined"
          onPress={() => navigation.navigate('Progress')}
          style={styles.button}
        >
          View Progress
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f9fafc',
    flex: 1,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  card: {
    marginBottom: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 4,
  },
  buttons: {
    marginTop: 20,
  },
  button: {
    marginVertical: 5,
  },
});
