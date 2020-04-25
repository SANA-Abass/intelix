import React from 'react';
import {TextInput, Text, StyleSheet, View} from 'react-native';

import Color from '../utils/Colors';
import Constants from '../constants/Constants';

const EmailTextField = ({term, placeholder, OnTermChange, onValidateEmailAddress, error }) => {
    return(
        <View>
            <Text styles={styles.ErrorText}> {error} </Text>
            <View style={styles.TextFieldView}>
                <TextInput
                    autoCorrect = {false}
                    style = {styles.TextField}
                    placeholder = {placeholder}
                    value = {term}
                    onChangeText = {OnTermChange}
                    onEndEditing = {onValidateEmailAddress}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    TextField:{
        fontSize: 14,
        flex: 1,
        marginHorizontal: 20
    },

    TextFieldView:{
        height: Constants.screenHeight * 0.06,
        width: Constants.screenWidth * 0.85,
        borderRadius: 50,
        marginTop: 5,
        marginBottom: 10,
        borderColor: Color.intelixGreen,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Color.smoke,
    },

    ErrorText: {
        fontSize: 12,
        color: 'red',
        marginBottom: -5,
        marginHorizontal: 20
    }
});

export default EmailTextField;