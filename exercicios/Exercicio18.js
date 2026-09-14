import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Exercício 18: Balões de mensagem estilo WhatsApp
const MESSAGES = [
  { id: '1', text: 'Oi, tudo bem?', sender: 'Ana', time: '09:12', mine: false },
  { id: '2', text: 'Tudo ótimo, e você?', sender: 'Eu', time: '09:13', mine: true },
];

export default function Exercicio18() {
  return (
    <View style={styles.container}>
      {MESSAGES.map((msg) => (
        <View
          key={msg.id}
          style={[styles.bubbleWrapper, { alignSelf: msg.mine ? 'flex-end' : 'flex-start' }]}
        >
          <View style={[styles.bubble, msg.mine ? styles.sent : styles.received]}>
            {!msg.mine && <Text style={styles.sender}>{msg.sender}</Text>}
            <Text style={styles.text}>{msg.text}</Text>
            <Text style={styles.time}>{msg.time}</Text>
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    backgroundColor: '#e5ddd5',
  },
  bubbleWrapper: {
    maxWidth: '75%',
    marginBottom: 10,
  },
  bubble: {
    borderRadius: 10,
    padding: 10,
  },
  sent: {
    backgroundColor: '#dcf8c6',
  },
  received: {
    backgroundColor: '#ffffff',
  },
  sender: {
    fontWeight: 'bold',
    fontSize: 12,
    marginBottom: 2,
    color: '#3498db',
  },
  text: {
    fontSize: 14,
  },
  time: {
    fontSize: 10,
    color: '#7f8c8d',
    alignSelf: 'flex-end',
    marginTop: 4,
  },
});
