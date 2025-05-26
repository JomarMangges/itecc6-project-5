import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';

export default function App() {
  const [workouts, setWorkouts] = useState([]);
  const [exercise, setExercise] = useState('');
  const [sets, setSets] = useState('');
  const [reps, setReps] = useState('');
  const [weight, setWeight] = useState('');

  const fetchWorkouts = async () => {
    const res = await axios.get('http://localhost:3000/workouts');
    setWorkouts(res.data);
  };

  const addWorkout = async () => {
    await axios.post('http://localhost:3000/workouts', {
      exercise,
      sets: parseInt(sets),
      reps: parseInt(reps),
      weight: parseFloat(weight)
    });
    fetchWorkouts();
  };

  useEffect(() => {
    fetchWorkouts();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Fitness Workout Log</Text>
      <TextInput style={styles.input} placeholder="Exercise" value={exercise} onChangeText={setExercise} />
      <TextInput style={styles.input} placeholder="Sets" keyboardType="numeric" value={sets} onChangeText={setSets} />
      <TextInput style={styles.input} placeholder="Reps" keyboardType="numeric" value={reps} onChangeText={setReps} />
      <TextInput style={styles.input} placeholder="Weight" keyboardType="decimal-pad" value={weight} onChangeText={setWeight} />
      <Button title="Add Workout" onPress={addWorkout} />
      <FlatList
        data={workouts}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <Text>{item.exercise} - {item.sets} sets x {item.reps} reps @ {item.weight}kg</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, paddingTop: 50 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  input: { borderBottomWidth: 1, marginBottom: 10, padding: 5 }
});
