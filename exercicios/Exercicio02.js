import React from 'react';
import { View, StyleSheet } from 'react-native';

// Exercício 2: 3 quadrados coloridos na horizontal
export default function Exercicio02() {
  return (
    <View style={styles.container}>
      <View style={[styles.square, { backgroundColor: 'red' }]} />
      <View style={[styles.square, { backgroundColor: 'green' }]} />
      <View style={[styles.square, { backgroundColor: 'blue' }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  square: {
    width: 100,
    height: 100,
  },
});

export default Exercicio02