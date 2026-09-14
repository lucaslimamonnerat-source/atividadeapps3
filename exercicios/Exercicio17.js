import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Exercício 17: Dashboard com 4 métricas em grid 2x2
const METRICS = [
  { icon: '💰', value: 'R$ 12.4k', label: 'Vendas' },
  { icon: '👥', value: '1.2k', label: 'Usuários' },
  { icon: '📦', value: '340', label: 'Pedidos' },
  { icon: '⭐', value: '4.8', label: 'Avaliação' },
];

export default function Exercicio17() {
  return (
    <View style={styles.container}>
      {METRICS.map((m, index) => (
        <View key={index} style={styles.cardWrapper}>
          <View style={styles.card}>
            <Text style={styles.icon}>{m.icon}</Text>
            <Text style={styles.value}>{m.value}</Text>
            <Text style={styles.label}>{m.label}</Text>
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 8,
    backgroundColor: '#f5f6fa',
  },
  cardWrapper: {
    width: '50%',
    padding: 8,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    height: 120,
    justifyContent: 'center',
  },
  icon: {
    fontSize: 24,
    marginBottom: 6,
  },
  value: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  label: {
    fontSize: 12,
    color: '#7f8c8d',
  },
});
