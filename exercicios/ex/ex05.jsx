import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function Exercicio05() {
  return (
    <View style={styles.container}>
      <View style={[styles.box, { height: 50, backgroundColor: '#e74c3c' }]} />
      <View style={[styles.box, { height: 100, backgroundColor: '#2ecc71' }]} />
      <View style={[styles.box, { height: 75, backgroundColor: '#3498db' }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingTop: 40,
  },
  box: {
    width: 100,
  },
});
