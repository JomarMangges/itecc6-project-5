import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, Text, Card } from 'react-native-paper';

export default function AddWorkoutScreen({ navigation }) {
  const [form, setForm] = useState({ exercise: '', reps: '', sets: '' });

  const handleChange = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  const handleSubmit = () => {
    if (!form.exercise || !form.reps || !form.sets) {
      alert('Please fill out all fields.');
      return;
    }
    console.log('Workout submitted:', form);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Title title="Add Workout" />
        <Card.Content>
          <TextInput
            label="Exercise"
            mode="outlined"
            value={form.exercise}
            onChangeText={(text) => handleChange('exercise', text)}
            style={styles.input}
          />
          <TextInput
            label="Reps"
            mode="outlined"
            keyboardType="numeric"
            value={form.reps}
            onChangeText={(text) => handleChange('reps', text)}
            style={styles.input}
          />
          <TextInput
            label="Sets"
            mode="outlined"
            keyboardType="numeric"
            value={form.sets}
            onChangeText={(text) => handleChange('sets', text)}
            style={styles.input}
          />
          <Button mode="contained" onPress={handleSubmit} style={styles.button}>
            Save Workout
          </Button>
        </Card.Content>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#f4f6f8',
    flex: 1,
  },
  card: {
    paddingVertical: 16,
  },
  input: {
    marginBottom: 12,
  },
  button: {
    marginTop: 10,
  },
});
