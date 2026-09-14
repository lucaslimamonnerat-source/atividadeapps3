import React from 'react';
import { View, StyleSheet } from 'react-native';

// Exercício 1: Container com fundo azul ocupando toda a tela
export default function Exercicio01() {
  return <View style={styles.container} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3498db',
  },
});
