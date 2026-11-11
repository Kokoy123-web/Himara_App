import React, { useState } from 'react';
import { Alert, Text } from 'react-native';
import { Button, Card, Field, Heading, Page } from '../components/common';
import { styles } from '../styles';

export default function CashIn({ navigation, route }) {
  const [amount, setAmount] = useState('100');

  const confirm = () => {
    const numericAmount = Number(amount);
    if (!Number.isFinite(numericAmount) || numericAmount <= 0) {
      Alert.alert('Invalid amount', 'Enter an amount greater than zero.');
      return;
    }

    route.params?.onCashIn?.(numericAmount);
    Alert.alert(
      'Demo cash-in',
      `₱${numericAmount.toFixed(2)} test balance added. No real GCash transfer was made.`,
    );
    navigation.goBack();
  };

  return (
    <Page>
      <Heading
        title="GCash cash-in"
        subtitle="Add test balance to your HIMARA wallet"
      />
      <Card>
        <Text style={styles.sub}>
          Simulation only. This adds test balance; it does not open GCash or
          transfer real money.
        </Text>
        <Field
          label="Cash-in amount"
          value={amount}
          onChangeText={setAmount}
          placeholder="₱ 100"
          keyboardType="numeric"
        />
        <Button title="Confirm cash-in" onPress={confirm} />
        <Button
          title="Cancel"
          outline
          onPress={() => navigation.goBack()}
          style={{ marginTop: 10 }}
        />
      </Card>
    </Page>
  );
}
