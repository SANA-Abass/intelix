import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';
import Color from '../utils/Colors';

const Button = (props) => {
    const {title = 'Valider', style = {},textStyle = {}, onPress} = props;
    return (
        <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
            <Text style={[styles.text, textStyle]}> {title} </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button:{
        display: 'flex',
        height: 50,
        borderRadius: 100,
        paddingLeft: 20,
        paddingRight: 20,
        justifyContent: 'center',
        alignItems: 'center',
        margin:20,
        backgroundColor: Color.intelixGreen,
        shadowColor: Color.intelixGreen,
        shadowOpacity: 0.4,
        shadowOffset: {height:10, width:10},
        shadowRadius: 100
    },

    text: {
        fontSize: 16,
        textTransform: 'uppercase',
        fontWeight: 'bold',
        color: Color.white
    }
});

export default Button;