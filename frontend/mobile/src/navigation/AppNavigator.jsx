import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ProductView from '../screens/ProductView';
import CartView from '../screens/CartView';
import ProfileView from '../screens/ProfileView';

const Stack = createStackNavigator();

const HomeStackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={ProductView} options={{ headerShown: false }} />
  </Stack.Navigator>
);

const CartStackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Cart" component={CartView} />
  </Stack.Navigator>
);

const ProfileStackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Profile" component={ProfileView} />
  </Stack.Navigator>
);

export { HomeStackNavigator, CartStackNavigator, ProfileStackNavigator };
