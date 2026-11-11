import React from 'react';
import { Alert, Text, View } from 'react-native';
import { Button, Card, Page, Pill } from '../components/common';
import buyers from '../data/buyers';
import { styles } from '../styles';

export default function HarvestDetail({ navigation, route }) {
  const harvest = route.params?.harvest || {
    name: 'H2W',
    price: '₱56.00/kg',
    volume: '490 kg',
  };
  const buyer = route.params?.buyer || buyers[0];

  return (
    <Page>
      <View style={styles.harvestHero}>
        <Text style={{ fontSize: 54 }}>🌾</Text>
      </View>
      <View style={styles.rowBetween}>
        <Text style={styles.h1}>{harvest.name}</Text>
        <Text style={styles.price}>{harvest.price}</Text>
      </View>
      <View style={styles.row}>
        <Pill>Community farmer</Pill>
        <Pill>0 km away</Pill>
      </View>

      <Text style={[styles.h2, { marginTop: 20, marginBottom: 8 }]}>
        Harvest details
      </Text>
      <Card>
        <View style={styles.kv}>
          <Text style={styles.sub}>Orderable volume</Text>
          <Text style={styles.bold}>{harvest.volume} orderable</Text>
        </View>
        <View style={styles.kv}>
          <Text style={styles.sub}>Quality</Text>
          <Text style={styles.bold}>Standard</Text>
        </View>
        <View style={styles.kv}>
          <Text style={styles.sub}>Source</Text>
          <Text style={styles.bold}>Mico Villa · Bunawan</Text>
        </View>
      </Card>
      <Card>
        <Text style={styles.bold}>Interested buyer</Text>
        <Text>{buyer.name}</Text>
        <Text style={styles.sub}>
          {buyer.need} · {buyer.price}
        </Text>
      </Card>
      <Button title="Create GCash order" disabled onPress={() => {}} />
      <Text style={[styles.sub, { textAlign: 'center', marginVertical: 8 }]}>
        Payment is manually verified by Himara admin. No automatic transfer or
        escrow is provided.
      </Text>
      <Button
        title="Message Mico"
        outline
        onPress={() => navigation.navigate('Chat', { buyer })}
      />
      <Button
        title="Continue to buyer order payment"
        onPress={() =>
          navigation.navigate('BuyerOrderPayment', { harvest, buyer })
        }
        style={{ marginTop: 10 }}
      />
      <Button
        title="Call"
        outline
        onPress={() =>
          Alert.alert('Call', 'Calls need a configured phone integration.')
        }
        style={{ marginTop: 10 }}
      />
    </Page>
  );
}
