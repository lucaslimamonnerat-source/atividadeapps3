import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function Exercicio07() {
  const items = ['Início', 'Buscar', 'Perfil', 'Config'];
  return (
    <View style={styles.container}>
      {items.map((item, index) => (
        <TouchableOpacity key={index} style={styles.item}>
          <Text style={styles.text}>{item}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    height: 60,
    backgroundColor: '#2c3e50',
  },
  item: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 12,
  },
});
