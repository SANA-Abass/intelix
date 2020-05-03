import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Alert, Image, SafeAreaView, KeyboardAvoidingView } from 'react-native';

import Color from '../utils/Colors';
import Utility from '../utils/Utility';
import Images from '../constants/Images';
import Strings from '../constants/Strings';
import Constants from '../constants/Constants';
import Button from '../components/Button';
import DismissKeyboard from '../components/DismissKeyboard';
import EmailTextField from '../components/EmailTextField';
import PasswordTextField from '../components/PasswordTextField';
import firebase from '../firebase/Firebase';

function SignInScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [isLoading, setIsLoading] = useState('');

    validateEmailAddressField = () => {
        const isValidateEmail = Utility.isEmailValid(email);
        isValidateEmail ? setEmailError('') : setEmailError(Strings.InvalidEmailAdress);
        return isValidateEmail;
    }

    validatePasswordField = () => {
        const isValidField = Utility.isValidField(password);
        isValidField ? setPasswordError('') : setPasswordError(Strings.PasswordFieldEmpty);
        return isValidField;
    }

    performAuth = () => {
        const isValidEmail = validateEmailAddressField();
        const isValidPassword = validatePasswordField();
        if(isValidEmail && isValidPassword){
            setEmailError('');
            setPasswordError('');
            registration(email, password);
        }
    }

    registration = (email, password) => {
        try {
            setIsLoading(true);
            firebase.auth().signInWithEmailAndPassword(email, password)
                .then(user => {
                    setIsLoading(false);
                    Alert.alert('Vous êtes connecté !')
                }).catch((error) => {
                    firebase.auth().createUserWithEmailAndPassword(email, password)
                        .then(user => {
                            setIsLoading(false);
                            Alert.alert("Nouveau utilisateur crée .. soyez akwaba ! ")
                        }).catch((error) => {
                            setIsLoading(false);
                            console.log('error');
                            Alert.alert(error.message);
                        })
                })
        } catch (error) {
            setIsLoading(false);
            Alert.alert(error.message);
        }
    }

    return (
        <DismissKeyboard>
            <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
                <View>
                    <SafeAreaView>
                        <Image style={styles.logo} source={Images.logo} />

                        <EmailTextField
                            term={email}
                            error={emailError}
                            placeholder={Strings.EmailPlaceHolder}
                            onTermChange={newEmail => { setEmail(newEmail) }}
                            onValidateEmailAddress={validateEmailAddressField}
                        />

                        <PasswordTextField
                            term={password}
                            error={passwordError}
                            placeholder={Strings.PasswordPlaceHolder}
                            onTermChange={newPassword => { setPassword(newPassword) }}
                            onValidatePasswordField={validatePasswordField}
                        />

                        <Button
                            title={Strings.Join}
                            onPress = {performAuth}
                            isLoading = {isLoading}
                        />
                    </SafeAreaView>
                </View>
            </KeyboardAvoidingView>
        </DismissKeyboard>
    )
}

const styles = StyleSheet.create({
    logo: {
        alignSelf: 'center',
        height: 128,
        width: 200,
        margin: 0.04 * Constants.screenHeight
    },

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Color.intelixGray
    }
});

export default SignInScreen;