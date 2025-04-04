import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function Classification({ imc }) {
  const getClassification = (imc) => {
    if (imc < 18.5) return 'Abaixo do peso';
    if (imc < 24.9) return 'Peso normal';
    if (imc < 29.9) return 'Sobrepeso';
    if (imc < 34.9) return 'Obesidade grau 1';
    if (imc < 39.9) return 'Obesidade grau 2';
    return 'Obesidade grau 3';
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Classificação: {getClassification(imc)}</Text>
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