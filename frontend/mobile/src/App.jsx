import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TestComponent from './components/TestComponent';

// --- This is the part to add

import Amplify from "aws-amplify";
import config from "../aws-exports";

import { withAuthenticator } from "aws-amplify-react-native"

Amplify.configure(config);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const signUpConfig = {
    hideAllDefaults: true,
    signUpFields: [
        {
            label: 'Email',
            key: 'email',
            required: true,
            displayOrder: 1,
            type: 'string',
        },
        {
            label: 'Password',
            key: 'password',
            required: true,
            displayOrder: 2,
            type: 'password',
        },
    ],
}

const App = () => {
    return (
        <>
            <Text>Open up App.js to start working on your app!</Text>
            <StatusBar style="auto" />
        </>
    )
}

export default withAuthenticator(App, true)