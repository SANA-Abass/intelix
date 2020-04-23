import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

function SignInScreen(){
    return (
        <View style={styles.container}>
            <Text style={styles.text}> S'inscrire</Text>
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