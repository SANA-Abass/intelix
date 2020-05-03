import React from 'react';
import {TouchableOpacity, StyleSheet, Text, ActivityIndicator, View} from 'react-native';
import Color from '../utils/Colors';

const Button = (props) => {
    const {title = 'Valider', style = {},textStyle = {}, onPress, isLoading} = props;

    const loader = () => {
        return (
            <ActivityIndicator animating={isLoading}/>
        )
    }

    const button = () => {
        return (
            <TouchableOpacity onPress={onPress} style={[styles.Button, style]}>
                <Text style={[styles.Text, textStyle]}> {title} </Text>
            </TouchableOpacity>
        )
    }

    return(
        <View style={[styles.button, style]}>
            {isLoading ? loader() : button()}
        </View>
    )
    
}

const styles = StyleSheet.create({
    Button:{
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

    Text: {
        fontSize: 16,
        textTransform: 'uppercase',
        fontWeight: 'bold',
        color: Color.white
    }
});

export default Button;