import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const DATA = [
  { id: '1', name: 'Camiseta', price: 'R$ 39,90' },
  { id: '2', name: 'Calça Jeans', price: 'R$ 89,90' },
  { id: '3', name: 'Tênis', price: 'R$ 199,90' },
];

export default function Exercicio16() {
  return (
    <FlatList
      data={DATA}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <View style={styles.photo} />
          <View style={styles.info}>
            <Text style={styles.name}>{item.name}</Text>
          </View>
          <Text style={styles.price}>{item.price}</Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ecf0f1',
  },
  photo: {
    width: 50,
    height: 50,
    borderRadius: 8,
    backgroundColor: '#dfe6e9',
    marginRight: 12,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 15,
    fontWeight: '500',
  },
  price: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#27ae60',
  },
});
