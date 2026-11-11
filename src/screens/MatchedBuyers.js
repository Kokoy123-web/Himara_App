import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Avatar, BottomNav, Button, Card, Heading, Page, Pill } from '../components/common';
import buyers from '../data/buyers';
import { styles } from '../styles';

export default function MatchedBuyers({ navigation }) {
  const openHarvest = (buyer) =>
    navigation.navigate('HarvestDetail', {
      buyer,
      harvest: { name: 'H2W', price: '₱56.00/kg', volume: '490 kg' },
    });

  return (
    <View style={styles.flex}>
      <Page>
        <Heading
          title={'Matched Buyers\n(Recommended)'}
          subtitle="Procurement requests matched with your harvests and local crop demands."
        />
        {buyers.map((buyer) => (
          <TouchableOpacity
            key={buyer.id}
            activeOpacity={0.85}
            onPress={() => openHarvest(buyer)}
          >
            <Card>
              <View style={styles.row}>
                <Avatar
                  initials={buyer.name
                    .split(' ')
                    .map((part) => part[0])
                    .slice(0, 2)
                    .join('')}
                  size={42}
                />
                <View style={{ flex: 1 }}>
                  <Text style={styles.bold}>{buyer.name}</Text>
                  <Text style={styles.sub}>
                    {buyer.type} · {buyer.location}
                  </Text>
                </View>
                <Text style={styles.chevron}>›</Text>
              </View>
              <View style={{ marginTop: 12 }}>
                <Pill>Recommended match</Pill>
              </View>
              <Text style={styles.matchNeed}>
                {buyer.need} · {buyer.price}
              </Text>
              <Button
                title="View harvest details"
                outline
                onPress={() => openHarvest(buyer)}
                style={{ marginTop: 12 }}
              />
            </Card>
          </TouchableOpacity>
        ))}
        <View style={styles.statRow}>
          <Card style={styles.statCard}>
            <Text style={styles.statValue}>2</Text>
            <Text style={styles.sub}>Buyer requests</Text>
          </Card>
          <Card style={styles.statCard}>
            <Text style={styles.statValue}>1,050kg</Text>
            <Text style={styles.sub}>Listed volume</Text>
          </Card>
        </View>
      </Page>
      <BottomNav navigation={navigation} active="Home" />
    </View>
  );
}
