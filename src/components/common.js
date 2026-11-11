import React from 'react';
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { C } from '../theme';
import { styles } from '../styles';

export function Page({ children, scroll = true, style }) {
  const content = <View style={[styles.page, style]}>{children}</View>;

  return scroll ? (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.scrollContent}
      showsVerticalScrollIndicator={false}
    >
      {content}
    </ScrollView>
  ) : (
    <View style={styles.screen}>{content}</View>
  );
}

export function Heading({ title, subtitle }) {
  return (
    <View style={{ marginBottom: 16 }}>
      <Text style={styles.h1}>{title}</Text>
      {subtitle ? <Text style={styles.sub}>{subtitle}</Text> : null}
    </View>
  );
}

export function Card({ children, style }) {
  return <View style={[styles.card, style]}>{children}</View>;
}

export function Button({ title, onPress, outline = false, disabled = false, style }) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      disabled={disabled}
      style={[
        styles.button,
        outline && styles.buttonOutline,
        disabled && styles.buttonDisabled,
        style,
      ]}
    >
      <Text
        style={[
          styles.buttonText,
          outline && styles.buttonOutlineText,
          disabled && { color: '#EAF5EA' },
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}

export function Label({ children }) {
  return <Text style={styles.label}>{children}</Text>;
}

export function Field({
  label,
  value,
  onChangeText,
  placeholder,
  keyboardType = 'default',
}) {
  return (
    <View style={{ marginBottom: 12 }}>
      {label ? <Label>{label}</Label> : null}
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#8A948C"
        keyboardType={keyboardType}
        style={styles.input}
      />
    </View>
  );
}

export function Pill({ children, dark = false }) {
  return (
    <View style={[styles.pill, dark && { backgroundColor: C.dark }]}>
      <Text style={[styles.pillText, dark && { color: '#fff' }]}>{children}</Text>
    </View>
  );
}

export function Avatar({ initials = 'MV', size = 48 }) {
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor: C.green,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text style={{ color: '#fff', fontWeight: '800', fontSize: size * 0.3 }}>
        {initials}
      </Text>
    </View>
  );
}

export function BottomNav({ navigation, active = 'Home', buyer = false }) {
  const items = buyer
    ? [
        ['⌂', 'Home', 'FarmerHome'],
        ['⌕', 'Search', 'MatchedBuyers'],
        ['▤', 'Posts', 'MatchedBuyers'],
        ['◷', 'History', 'BuyerOrderPayment'],
        ['●', 'Profile', 'BuyerProfile'],
      ]
    : [
        ['⌂', 'Home', 'FarmerHome'],
        ['▤', 'My Harvests', 'HarvestDetail'],
        ['◷', 'Transactions', 'Cashout'],
        ['●', 'Profile', 'FarmerProfile'],
      ];

  return (
    <View style={styles.bottomNav}>
      {items.map(([icon, label, route]) => (
        <TouchableOpacity
          key={label}
          style={styles.navItem}
          onPress={() => navigation.navigate(route)}
        >
          <Text style={[styles.navIcon, active === label && { color: C.dark }]}>
            {icon}
          </Text>
          <Text style={[styles.navLabel, active === label && { color: C.dark }]}>
            {label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
