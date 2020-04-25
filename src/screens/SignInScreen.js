import React from 'react';
import {StyleSheet, View, Text} from 'react-native';


import Strings from '../constants/Strings';
import Button from '../components/Button';
import EmailTextField from '../components/EmailTextField';

function SignInScreen(){
    return (
        <View style={styles.container}>
            <Text style={styles.text}> S'inscrire</Text>
            <EmailTextField></EmailTextField>
            <Button title={Strings.Join}></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e1e1e1'
    },
    text: {
        color: '#101010',
        fontSize: 24,
        fontWeight:'bold'
    }
});

export default SignInScreen;