import React from 'react';
import { View, StyleSheet } from 'react-native';

// Exercício 3: Centralizar um quadrado vermelho no centro da tela
export default function Exercicio03() {
  return (
    <View style={styles.container}>
      <View style={styles.square} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  square: {
    width: 150,
    height: 150,
    backgroundColor: 'red',
  },
});
