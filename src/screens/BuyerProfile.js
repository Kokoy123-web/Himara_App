import React, { useState } from 'react';
import { Text, View } from 'react-native';
import {
  Avatar,
  BottomNav,
  Button,
  Card,
  Page,
  Pill,
} from '../components/common';
import { C } from '../theme';
import { styles } from '../styles';

export default function BuyerProfile({ navigation }) {
  const [balance, setBalance] = useState(100);

  return (
    <View style={styles.flex}>
      <Page>
        <View style={styles.buyerProfileHead}>
          <Avatar initials="SM" size={76} />
          <Text style={[styles.h1, { fontSize: 23, marginTop: 8 }]}>
            Syra May Suberi
          </Text>
          <Text style={styles.sub}>
            Agricultural buyer &amp; trader · Bunawan
          </Text>
          <View style={styles.row}>
            <Pill>Verified business</Pill>
            <Pill>Wholesaler</Pill>
          </View>
        </View>
        <View style={styles.wallet}>
          <Text style={styles.walletBrand}>HIMARA PAY</Text>
          <Text style={styles.walletSmall}>AVAILABLE BALANCE</Text>
          <Text style={styles.walletAmount}>₱{balance.toFixed(2)}</Text>
          <Text style={styles.walletSmall}>
            SYRA MAY SUBERI · ₱30 per feature · Simulation only
          </Text>
          <Button
            title="⊕ Cash in"
            onPress={() =>
              navigation.navigate('CashIn', {
                onCashIn: (amount) =>
                  setBalance((currentBalance) => currentBalance + amount),
              })
            }
            style={{ marginTop: 14 }}
          />
        </View>
        <View style={styles.statRow}>
          <Card style={styles.statCard}>
            <Text style={styles.statValue}>2</Text>
            <Text style={styles.sub}>My active demands</Text>
          </Card>
          <Card style={styles.statCard}>
            <Text style={[styles.bold, { color: C.dark }]}>Wholesaler</Text>
            <Text style={styles.sub}>Registered category</Text>
          </Card>
        </View>
        <Text style={styles.sectionTitle}>Trading &amp; preferences</Text>
        <Card style={styles.profileRow}>
          <View>
            <Text style={styles.bold}>🛍 Sourcing focus</Text>
            <Text style={styles.sub}>
              Rice, Corn, Banana &amp; Local Produce
            </Text>
          </View>
        </Card>
        <Card style={styles.profileRow}>
          <View style={{ flex: 1 }}>
            <Text style={styles.bold}>💳 Payment method</Text>
            <Text style={styles.sub}>GCash &amp; Direct Settlement</Text>
          </View>
          <Pill>Verified</Pill>
        </Card>
      </Page>
      <BottomNav navigation={navigation} active="Profile" buyer />
    </View>
  );
}
