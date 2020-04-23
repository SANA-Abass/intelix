import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SignInScreen from '../screens/SignInScreen';
import GroupScreen from '../screens/GroupScreen';
import ChatsScreen from '../screens/ChatsScreen';
import AddGroupScreen from '../screens/AddGroupScreen';

// import firebase from '../firebase/Firebase';
// import AsyncStorage from '@react-native-community/async-storage';

const Stack = createStackNavigator();

// function UserStackNavigator(){
//     return(
//         <Stack.Navigator name="SignIn">
//             <Stack.Screen
//                name="SignInScreen"
//                component={SignInScreen}
//                options={{headerShown: false}} 
//             />
//         </Stack.Navigator>
//     )
// }

function ChatFlow(){
    // console.log(firebase.auth().currentUser);
    // const user = firebase.auth().currentUser;
    return (
        <NavigationContainer>
            <Stack.Navigator name="chat">
                <Stack.Screen
                    name="SignIn Screen"
                    component={SignInScreen}
                    options={{headerShown: false, title: 'Chat'}} 
                />
                <Stack.Screen
                    name="Group Screen"
                    component={GroupScreen}
                    options={{title: 'Groupes'}} 
                />
                <Stack.Screen
                    name="Add Group Screen"
                    component={AddGroupScreen}
                    options={{title: 'Chat'}} 
                />
                <Stack.Screen
                    name="Chats Screen"
                    component={ChatsScreen}
                    options={{title: 'Chat'}} 
                />
                
            </Stack.Navigator>
        </NavigationContainer>
    );
}

// getData = async() => {
//     try{
//         const value = await AsyncStorage.getItem('@isLoggedIn');
//         if(value !== null){
//             return value;
//         }
//     }catch(e){
//         return null;
//     }
//     return value;
// }

// const getUserId = async () => {
//     let userId = '';
//     try{
//         userId = await AsyncStorage.getItem('@isLoggedIn');
//     }catch(error){
//         console.log(error.message);
//     }
//     return userId;
// }

function MainStackNavigator(){
    // console.log(firebase.auth()currentUser);
   // const user = firebase.auth().currentUser;
    // const data = getData();
    //console.log(data);
    return(
        ChatFlow()
    );
}

export default MainStackNavigator;