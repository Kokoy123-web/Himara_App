import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Avatar, BottomNav, Button, Card, Page, Pill } from '../components/common';
import { styles } from '../styles';

export default function FarmerHome({ navigation }) {
  return (
    <View style={styles.flex}>
      <Page>
        <View style={styles.homeHeader}>
          <View style={{ flex: 1 }}>
            <Text style={styles.sub}>📍 Bunawan, Agusan del Sur</Text>
            <Text style={[styles.h1, { marginTop: 5 }]}>
              Maayong buntag,{"\n"}Mico Villa
            </Text>
          </View>
          <Avatar />
        </View>

        <Card>
          <Text style={styles.sectionTitle}>Your farm at a glance</Text>
          <View style={styles.statRow}>
            <View style={styles.stat}>
              <Text style={styles.statValue}>2</Text>
              <Text style={styles.sub}>Buyer requests</Text>
            </View>
            <View style={styles.stat}>
              <Text style={styles.statValue}>1,050 kg</Text>
              <Text style={styles.sub}>Listed volume</Text>
            </View>
          </View>
        </Card>

        <View style={styles.rowBetween}>
          <Text style={styles.sectionTitle}>Quick actions</Text>
          <Pill>Farmer account</Pill>
        </View>
        <View style={styles.grid}>
          <TouchableOpacity
            style={styles.actionTile}
            onPress={() => navigation.navigate('MatchedBuyers')}
          >
            <Text style={styles.tileIcon}>🤝</Text>
            <Text style={styles.tileTitle}>Matched buyers</Text>
            <Text style={styles.sub}>Find buyers for your harvest</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.actionTile}
            onPress={() =>
              navigation.navigate('HarvestDetail', {
                harvest: { name: 'H2W', price: '₱56.00/kg', volume: '490 kg' },
              })
            }
          >
            <Text style={styles.tileIcon}>🌾</Text>
            <Text style={styles.tileTitle}>My harvest</Text>
            <Text style={styles.sub}>View listed produce</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.actionTile}
            onPress={() => navigation.navigate('Cashout')}
          >
            <Text style={styles.tileIcon}>💳</Text>
            <Text style={styles.tileTitle}>Orders &amp; payouts</Text>
            <Text style={styles.sub}>Manage your earnings</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.actionTile}
            onPress={() => navigation.navigate('FarmerProfile')}
          >
            <Text style={styles.tileIcon}>👤</Text>
            <Text style={styles.tileTitle}>My profile</Text>
            <Text style={styles.sub}>Account information</Text>
          </TouchableOpacity>
        </View>

        <Card>
          <Text style={styles.sectionTitle}>Recommended buyer</Text>
          <Text style={styles.bold}>Syra May Suberi</Text>
          <Text style={styles.sub}>Needs 700 kg Rice · ₱57/kg</Text>
          <Button
            title="View matched buyers"
            onPress={() => navigation.navigate('MatchedBuyers')}
            style={{ marginTop: 12 }}
          />
        </Card>
      </Page>
      <BottomNav navigation={navigation} active="Home" />
    </View>
  );
}
