import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigation, BottomNavigationTab } from '@ui-kitten/components';

import { HomeIcon, ShoppingCartIcon, PersonIcon } from '../assets/icons';
import { HomeStackNavigator, CartStackNavigator, ProfileStackNavigator } from './AppNavigator';

const { Navigator, Screen } = createBottomTabNavigator();

const BottomTabBar = ({ navigation, state }) => (
  <BottomNavigation
    selectedIndex={state.index}
    onSelect={index => navigation.navigate(state.routeNames[index])}
    appearance="noIndicator"
  >
    <BottomNavigationTab icon={HomeIcon} title="Home" />
    <BottomNavigationTab icon={ShoppingCartIcon} title="Cart" />
    <BottomNavigationTab icon={PersonIcon} title="Profile" />
  </BottomNavigation>
);

const BottomTabNavigator = () => (
  <Navigator tabBar={props => <BottomTabBar {...props} />}>
    <Screen name="Home" component={HomeStackNavigator} />
    <Screen name="Cart" component={CartStackNavigator} />
    <Screen name="Profile" component={ProfileStackNavigator} />
  </Navigator>
);

export default BottomTabNavigator;
