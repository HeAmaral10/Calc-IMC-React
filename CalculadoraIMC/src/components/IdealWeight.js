import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function IdealWeight({ height }) {
  const heightInMeters = parseFloat(height) / 100;
  const minWeight = (18.5 * heightInMeters * heightInMeters).toFixed(1);
  const maxWeight = (24.9 * heightInMeters * heightInMeters).toFixed(1);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Peso ideal: {minWeight} kg - {maxWeight} kg</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    color: 'blue',
    fontWeight: 'bold',
    backgroundColor: 'lightyellow',
    padding: 10,
    borderRadius: 10,
    borderWidth: 2,
  },
});