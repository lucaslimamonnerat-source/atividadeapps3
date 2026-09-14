import React from 'react';
import { View, StyleSheet } from 'react-native';

// Exercício 6: Empilhar elementos verticalmente, centralizados, cores alternadas
export default function Exercicio06() {
  const colors = ['#e74c3c', '#2ecc71', '#e74c3c', '#2ecc71'];
  return (
    <View style={styles.container}>
      {colors.map((color, index) => (
        <View key={index} style={[styles.square, { backgroundColor: color }]} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 40,
  },
  square: {
    width: 80,
    height: 80,
    marginBottom: 10,
  },
});
