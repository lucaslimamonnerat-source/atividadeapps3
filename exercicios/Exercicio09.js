import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Exercício 9: 4 cards em 2 colunas (flexWrap + 50% de largura)
export default function Exercicio09() {
  const cards = [1, 2, 3, 4];
  return (
    <View style={styles.container}>
      {cards.map((c) => (
        <View key={c} style={styles.cardWrapper}>
          <View style={styles.card}>
            <Text style={styles.text}>Card {c}</Text>
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  cardWrapper: {
    width: '50%',
    padding: 10,
  },
  card: {
    height: 120,
    backgroundColor: '#ecf0f1',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
  },
});
