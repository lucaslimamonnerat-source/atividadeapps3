import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Exercicio08() {
  return (
    <View style={styles.container}>
      <View style={styles.avatar} />
      <Text style={styles.name}>João Silva</Text>
      <Text style={styles.bio}>Desenvolvedor React Native apaixonado por UI</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#95a5a6',
    marginBottom: 12,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  bio: {
    fontSize: 14,
    color: '#7f8c8d',
    textAlign: 'center',
  },
});
