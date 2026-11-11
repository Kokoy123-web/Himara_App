import React, { useState } from 'react';
import { Alert, Text, View } from 'react-native';
import { BottomNav, Button, Card, Field, Heading, Page, Pill } from '../components/common';
import { styles } from '../styles';

export default function Cashout({ navigation }) {
  const [amount, setAmount] = useState('');
  const [number, setNumber] = useState('0917 888 4627');

  return (
    <View style={styles.flex}>
      <Page>
        <Heading title="Orders & payouts" subtitle="Request a GCash cashout" />
        <View style={styles.wallet}>
          <Text style={styles.walletBrand}>HIMARA AGRO-PAY</Text>
          <Text style={styles.walletSmall}>AVAILABLE BALANCE</Text>
          <Text style={styles.walletAmount}>₱0.00</Text>
          <Text style={styles.walletSmall}>Simulation only</Text>
        </View>
        <Card>
          <Text style={styles.bold}>Rice (NSIC Rc222) · 300 kg</Text>
          <Text style={styles.sub}>Order HMR-DEMO-101</Text>
          <Pill>Awaiting payment</Pill>
        </Card>
        <Card>
          <Text style={styles.bold}>Request GCash cashout</Text>
          <Text style={styles.sub}>
            Available balance: ₱0.00. ₱100 minimum. Simulation only; no money
            will be sent.
          </Text>
          <View style={styles.notice}>
            <Text style={styles.bold}>ⓘ Demo Testing</Text>
            <Text style={styles.sub}>
              Add demo harvest earnings to test the cashout flow.
            </Text>
            <Button
              title="⊕ Add ₱5,000 demo harvest earnings"
              outline
              onPress={() =>
                Alert.alert(
                  'Demo balance',
                  '₱5,000 test earnings added for this session.',
                )
              }
              style={{ marginTop: 10 }}
            />
          </View>
          <Field
            label="Amount in pesos"
            value={amount}
            onChangeText={setAmount}
            placeholder="Enter amount"
            keyboardType="numeric"
          />
          <Field
            label="GCash number"
            value={number}
            onChangeText={setNumber}
            placeholder="09XX XXX XXXX"
            keyboardType="phone-pad"
          />
          <Button
            title="Submit request"
            onPress={() =>
              Alert.alert(
                'Cashout request',
                `Demo request for ₱${amount || '0'} submitted.`,
              )
            }
          />
        </Card>
      </Page>
      <BottomNav navigation={navigation} active="Transactions" />
    </View>
  );
}
