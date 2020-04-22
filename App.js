import React from 'react';
import {Image} from 'react-native';
import {createSwitchNavigator, createAppContainer } from 'react-navigation';
import {createStackNavigator } from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import AuthLoadingScreen from './screens/AuthLoadingScreen';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import ChatScreen from './screens/ChatScreen';
import ProfileScreen from './screens/ProfileScreen';

const AppStack = createStackNavigator({
  Home: HomeScreen,
  Chat: ChatScreen
});

AppStack.navigationOptions = ({navigation}) => {
  let tabBarVisible = navigation.state.index === 0;
  return{
    tabBarVisible
  };
}

const AuthStack = createStackNavigator({Login: LoginScreen});

const TabNavigator = createBottomTabNavigator({
  Chats: AppStack,
  Profile: ProfileScreen
},{

  defaultNavigationOptions:({navigation}) =>({
    tabBarIcon:({focused, horizontal, tintColor}) => {
      const { routeName } = navigation.state;
      let imageName = require('./images/chats1.png');
      if(routeName === 'Profile'){
        imageName = require('./images/profile1.png');
      }
      if(routeName === 'blabla'){
       
      }
      return <Image source={imageName} style={{width:25, resizeMode:'contain', tintColor}}/>
    }
  }),
  tabBarOptions: {
    activeTintColor: 'tomato',
    inactiveTintColor: 'gray'
  }
});

export default createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: TabNavigator,
    Auth: AuthStack
  },
  {
    initialRouteName: 'AuthLoading',
  }
));