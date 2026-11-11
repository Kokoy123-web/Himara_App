import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { Avatar } from '../components/common';
import buyers from '../data/buyers';
import { C } from '../theme';
import { styles } from '../styles';

export default function ChatScreen({ navigation, route }) {
  const buyer = route.params?.buyer || buyers[0];
  const [messages, setMessages] = useState([
    'hi',
    'hi',
    'hello',
    'goodnight',
    'morning',
    'hehdhhws',
  ]);
  const [message, setMessage] = useState('');

  const send = () => {
    const trimmedMessage = message.trim();
    if (!trimmedMessage) return;
    setMessages((currentMessages) => [...currentMessages, trimmedMessage]);
    setMessage('');
  };

  return (
    <KeyboardAvoidingView
      style={styles.flex}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <View style={styles.chatHeader}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.back}>‹</Text>
        </TouchableOpacity>
        <Avatar initials="SS" size={40} />
        <View>
          <Text style={styles.bold}>{buyer.name}</Text>
          <Text style={styles.sub}>Needs 700 kg Rice · ₱57/kg</Text>
        </View>
      </View>
      <ScrollView
        style={styles.chatBody}
        contentContainerStyle={{ padding: 18, gap: 14 }}
      >
        {messages.map((currentMessage, index) => {
          const isMine = index === 2 || index === 4;
          return (
            <View
              key={index}
              style={[styles.bubble, isMine ? styles.myBubble : styles.theirBubble]}
            >
              <Text style={{ color: isMine ? '#fff' : C.ink }}>
                {currentMessage}
              </Text>
            </View>
          );
        })}
      </ScrollView>
      <View style={styles.messageBar}>
        <TextInput
          value={message}
          onChangeText={setMessage}
          placeholder="Message"
          style={[styles.input, { flex: 1, borderRadius: 24, marginBottom: 0 }]}
        />
        <TouchableOpacity onPress={send} style={styles.send}>
          <Text style={{ color: '#fff', fontSize: 20 }}>➤</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}
