import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BuyerOrderPayment from '../screens/BuyerOrderPayment';
import BuyerProfile from '../screens/BuyerProfile';
import BuyerType from '../screens/BuyerType';
import CashIn from '../screens/CashIn';
import Cashout from '../screens/Cashout';
import ChatScreen from '../screens/ChatScreen';
import FarmerHome from '../screens/FarmerHome';
import FarmerProfile from '../screens/FarmerProfile';
import HarvestDetail from '../screens/HarvestDetail';
import MatchedBuyers from '../screens/MatchedBuyers';
import { C } from '../theme';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor={C.bg} />
      <Stack.Navigator
        initialRouteName="FarmerHome"
        screenOptions={{
          headerShown: false,
          animation: 'slide_from_right',
          contentStyle: { backgroundColor: C.bg },
        }}
      >
        <Stack.Screen
          name="FarmerHome"
          component={FarmerHome}
          options={{ title: 'Farmer Home' }}
        />
        <Stack.Screen
          name="MatchedBuyers"
          component={MatchedBuyers}
          options={{ title: 'Matched Buyers' }}
        />
        <Stack.Screen name="Chat" component={ChatScreen} options={{ title: 'Chat' }} />
        <Stack.Screen
          name="FarmerProfile"
          component={FarmerProfile}
          options={{ title: 'Farmer Profile' }}
        />
        <Stack.Screen
          name="Cashout"
          component={Cashout}
          options={{ title: 'Request GCash Cashout' }}
        />
        <Stack.Screen
          name="HarvestDetail"
          component={HarvestDetail}
          options={{ title: 'Harvest Detail' }}
        />
        <Stack.Screen
          name="BuyerOrderPayment"
          component={BuyerOrderPayment}
          options={{ title: 'Buyer Order Payment' }}
        />
        <Stack.Screen
          name="BuyerProfile"
          component={BuyerProfile}
          options={{ title: 'Buyer Profile / Wallet' }}
        />
        <Stack.Screen
          name="CashIn"
          component={CashIn}
          options={{
            title: 'GCash Cash-in',
            presentation: 'modal',
            animation: 'slide_from_bottom',
          }}
        />
        <Stack.Screen
          name="BuyerType"
          component={BuyerType}
          options={{ title: 'Buyer Type' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
