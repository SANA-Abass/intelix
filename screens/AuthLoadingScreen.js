/*
import React from 'react';
import { ActivityIndicator, AsyncStorage, StatusBar, View, ActivityIndicatorComponent } from 'react-native';
import firebase from 'firebase';

import User from '../User';

export default class AuthLoadingScreen extends React.Component {
    constructor(props) {
        super(props);
        this._bootstrapAsync();
    }

    componentDidMount() {
        var firrrrrrebaseConfig = {
            apiKey: "AIzaSyB2kpFHK7ceYpDnVKwJFv5tIfNufRD6Q7I",
            authDomain: "intelix-corp.firebaseapp.com",
            databaseURL: "https://intelix-corp.firebaseio.com",
            projectId: "intelix-corp",
            storageBucket: "intelix-corp.appspot.com",
            messagingSenderId: "598762463157",
            appId: "1:598762463157:web:7e150e41eae63e9203c3fc",
            measurementId: "G-3HLY1E5JMS"
        };
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);
    }

    _bootstrapAsync = async () => {
        User.phone = await AsyncStorage.getItem('userPhone');
        this.props.navigation.navigate(User.phone ? 'App' : 'Auth');
    };

    render() {
        return (
            <View>
                <ActivityIndicator />
                <StatusBar barStyle="default" />
            </View>
        );
    }
}
*/