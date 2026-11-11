import React, { useState } from 'react';
import { Alert, Text, TouchableOpacity, View } from 'react-native';
import { Button, Page } from '../components/common';
import { C } from '../theme';
import { styles } from '../styles';

const buyerTypes = [
  ['Retailer', 'Buying for reselling to customers', '▤'],
  ['Wholesaler', 'Buying in large quantities', '▦'],
  ['Consumer', 'Buying for personal use', '☺'],
  ['Institutional Buyer', 'Buying for businesses / organizations', '▦'],
];

export default function BuyerType({ navigation }) {
  const [selected, setSelected] = useState('Wholesaler');

  return (
    <Page>
      <View style={styles.row}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backCircle}
        >
          <Text style={styles.back}>‹</Text>
        </TouchableOpacity>
        <Text style={[styles.h1, { fontSize: 26 }]}>Buyer Type</Text>
      </View>
      <Text style={[styles.h2, { marginTop: 20 }]}>
        What type of buyer are you?
      </Text>
      <Text style={[styles.sub, { marginBottom: 16 }]}>
        This helps us match you with the right farmers.
      </Text>
      {buyerTypes.map(([name, description, icon]) => (
        <TouchableOpacity
          key={name}
          onPress={() => setSelected(name)}
          style={[
            styles.optionCard,
            selected === name && styles.optionSelected,
          ]}
        >
          <View style={styles.optionIcon}>
            <Text style={{ color: C.dark, fontSize: 20 }}>{icon}</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.bold}>{name}</Text>
            <Text style={styles.sub}>{description}</Text>
          </View>
          <Text style={{ color: C.green, fontSize: 20 }}>
            {selected === name ? '●' : '○'}
          </Text>
        </TouchableOpacity>
      ))}
      <Button
        title="Continue"
        onPress={() =>
          Alert.alert(
            'Buyer type selected',
            `Your selected category is ${selected}.`,
          )
        }
        style={{ marginTop: 18 }}
      />
    </Page>
  );
}
