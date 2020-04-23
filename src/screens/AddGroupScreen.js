import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

function AddGroupScreen(){
    return (
        <View style={styles.container}>
            <Text style={styles.text}> Ajouter un groupe</Text>
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

export default AddGroupScreen;