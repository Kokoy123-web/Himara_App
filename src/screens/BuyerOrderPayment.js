import React, { useState } from 'react';
import { Alert, Text, TouchableOpacity, View } from 'react-native';
import {
  BottomNav,
  Button,
  Card,
  Heading,
  Page,
  Pill,
} from '../components/common';
import { C } from '../theme';
import { styles } from '../styles';

export default function BuyerOrderPayment({ navigation }) {
  const [receipt, setReceipt] = useState(false);
  const [cancelled, setCancelled] = useState(false);
  const status = cancelled
    ? 'Cancelled'
    : receipt
      ? 'Receipt submitted · Pending review'
      : 'Awaiting payment';

  const cancelOrder = () => {
    setCancelled(true);
    Alert.alert('Order cancelled', 'Demo unpaid order cancelled.');
  };

  return (
    <View style={styles.flex}>
      <Page>
        <Heading title="Buyer order payment" subtitle="Send GCash payment" />
        <Card>
          <Text style={styles.h2}>Rice (NSIC Rc222) · 300 kg</Text>
          <Text style={styles.sub}>Order HMR-DEMO-101</Text>
          <View style={{ marginVertical: 8 }}>
            <Pill>{status}</Pill>
          </View>
          <Text style={styles.sub}>
            Send the exact order amount to the Himara GCash account. Use the
            order reference and submit the receipt. An uploaded receipt is not
            proof of confirmed payment.
          </Text>
          <View style={styles.kv}>
            <Text style={styles.sub}>Buyer pays</Text>
            <Text style={styles.bold}>₱8,400.00</Text>
          </View>
          <View style={styles.kv}>
            <Text style={styles.sub}>Himara commission · 7%</Text>
            <Text style={styles.bold}>₱588.00</Text>
          </View>
          <View style={styles.kv}>
            <Text style={styles.sub}>Farmer share after payout</Text>
            <Text style={styles.bold}>₱7,812.00</Text>
          </View>
          <Text
            style={[
              styles.sub,
              { borderBottomWidth: 1, borderColor: C.line, paddingBottom: 10 },
            ]}
          >
            Ligtas na hawak sa Himara Admin GCash hanggang makumpirma ang
            delivery. 93% diretso sa magsasaka, 7% platform fee ni Himara.
          </Text>
          <Text style={[styles.h2, { marginTop: 12 }]}>
            Send GCash payment
          </Text>
          {[
            ['Account', 'Himara Escrow Admin (Demo)'],
            ['GCash number', '0917 888 4627'],
            ['Amount', '₱8,400.00'],
            ['Reference', 'HMR-DEMO-101'],
          ].map(([label, value]) => (
            <View key={label} style={styles.kv}>
              <Text style={styles.sub}>{label}</Text>
              <Text style={styles.bold}>{value}</Text>
            </View>
          ))}
          <View style={styles.notice}>
            <Text style={styles.sub}>
              Pay only to the account shown for this order. A screenshot is not
              payment confirmation; Himara admin checks the actual GCash
              transaction.
            </Text>
          </View>
          <Button
            title={receipt ? 'Receipt submitted' : 'Upload payment receipt'}
            outline
            onPress={() => setReceipt(true)}
            disabled={receipt}
          />
          <TouchableOpacity onPress={cancelOrder}>
            <Text style={styles.cancelText}>Cancel unpaid order</Text>
          </TouchableOpacity>
        </Card>
        <Card style={{ backgroundColor: C.purple }}>
          <Text style={{ color: '#4B2D8C', fontWeight: '800' }}>
            ▶ Test actions
          </Text>
          <Text style={styles.sub}>
            Simulation only. Receipt approval does not verify a real GCash
            transfer.
          </Text>
          <Button
            title="Reset demo order"
            outline
            onPress={() => {
              setReceipt(false);
              setCancelled(false);
            }}
            style={{ marginTop: 10 }}
          />
        </Card>
      </Page>
      <BottomNav navigation={navigation} active="History" buyer />
    </View>
  );
}
