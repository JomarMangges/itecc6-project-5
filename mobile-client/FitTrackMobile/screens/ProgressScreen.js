import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Card } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function ProgressScreen() {
  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content style={styles.content}>
          <MaterialCommunityIcons name="chart-line" size={48} color="#4caf50" />
          <Text style={styles.title}>Progress Tracking</Text>
          <Text style={styles.subtitle}>Coming Soon! 📊</Text>
        </Card.Content>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  card: {
    width: '100%',
    maxWidth: 350,
    padding: 20,
    elevation: 4,
    borderRadius: 12,
  },
  content: {
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
  },
});
