import {StatusBar} from 'expo-status-bar'
import React, { useEffect } from 'react';
import {StyleSheet, Text, View} from 'react-native'
import {Amplify, Auth} from 'aws-amplify'
import {withAuthenticator} from 'aws-amplify-react-native'
import TestComponent from './components/TestComponent'

// --- This is the part to add

import awsconfig from '../aws-exports'

Amplify.configure(awsconfig);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

const signUpConfig = {
    header: 'OrganicFresh Sign-Up',
    defaultCountryCode: '91',
    signUpFields: [
        {
            label: 'UserId',
            key: 'username',
            required: true,
            type: 'email',
            displayOrder: 1
        },
        {
            label: 'Name',
            key: 'name',
            required: true,
            type: 'string',
            displayOrder: 2
        },
        {
            label: 'Address',
            key: 'address',
            required: true,
            type: 'string'
        }
    ]
}

function App() {

    useEffect(() => {
        (async function getUserInfo() {
            const userInfo =  await Auth.currentUserInfo();
            console.log(userInfo);
        })();
    }, []);

    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
            }}>
            <Text>Hello, world!</Text>
        </View>
    )
}

export default withAuthenticator(App,{signUpConfig});