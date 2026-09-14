import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function Exercicio04() {
  return (
    <View style={styles.container}>
      <View style={[styles.square, { backgroundColor: '#e74c3c' }]} />
      <View style={[styles.square, { backgroundColor: '#2ecc71' }]} />
      <View style={[styles.square, { backgroundColor: '#3498db' }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  square: {
    width: 80,
    height: 80,
  },
});
