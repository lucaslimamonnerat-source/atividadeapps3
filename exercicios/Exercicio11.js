import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Exercício 11: Barra de navegação inferior com 3 ícones (space-around)
export default function Exercicio11() {
  const icons = ['🏠', '🔍', '👤'];
  return (
    <View style={styles.container}>
      {icons.map((icon, index) => (
        <View key={index} style={styles.iconWrapper}>
          <Text style={styles.icon}>{icon}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    height: 60,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ecf0f1',
  },
  iconWrapper: {
    padding: 10,
  },
  icon: {
    fontSize: 24,
  },
});
