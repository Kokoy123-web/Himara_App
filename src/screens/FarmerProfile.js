import React from 'react';
import { Alert, Text, View } from 'react-native';
import { Avatar, BottomNav, Button, Card, Heading, Page, Pill } from '../components/common';
import { styles } from '../styles';

const profileRows = [
  ['Full Name', 'Mico Villa'],
  ['Account type', 'Community farmer'],
  ['Location', 'Bunawan, Agusan del Sur'],
  ['Crops', 'Rice and local produce'],
  ['Payment method', 'Manual GCash payout'],
];

export default function FarmerProfile({ navigation }) {
  return (
    <View style={styles.flex}>
      <Page>
        <Heading
          title="Farmer Profile"
          subtitle="Your account and trading information"
        />
        <View style={{ alignItems: 'center', marginBottom: 18 }}>
          <Avatar size={76} />
          <Text style={[styles.h2, { marginTop: 10 }]}>Mico Villa</Text>
          <Pill>Verified farmer</Pill>
        </View>
        {profileRows.map(([label, value]) => (
          <Card key={label} style={styles.profileRow}>
            <View style={{ flex: 1 }}>
              <Text style={styles.sub}>{label}</Text>
              <Text style={styles.bold}>{value}</Text>
            </View>
          </Card>
        ))}
        <Button
          title="Log out"
          outline
          onPress={() => Alert.alert('HIMARA', 'Demo log out action.')}
        />
      </Page>
      <BottomNav navigation={navigation} active="Profile" />
    </View>
  );
}
