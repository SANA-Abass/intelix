import React from 'react';
import { SafeAreaView, Image, Text, FlatList, TouchableOpacity, Dimensions } from 'react-native';
import firebase from 'firebase';

import User from '../User';

export default class HomeScreen extends React.Component {
    static navigationOptions =  { 
        //header: null
        headerShown: false
    }

    state = {
        users: [],
        dbRef: firebase.database().ref('users')
    }

    componentDidMount() {
        this.state.dbRef.on('child_added', (val) => {
            let person = val.val();
            person.phone = val.key;
            if (person.phone === User.phone) {
                User.name = person.name;
                User.image = person.image ? person.image : null
            } else {
                this.setState((prevState) => {
                    return {
                        users: [...prevState.users, person]
                    }
                });
            }
            
        });
    }


    componentWillUnmount(){
        this.state.dbRef.off()
    }

    renderRow = ({ item }) => {
        return (
            <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Chat', item)}
                style={{ flexDirection:'row', padding: 10, alignItems:'center', borderBottomColor: '#ccc', borderBottomWidth: 1 }}>
                    <Image 
                        source={item.image ? {uri: item.image} : require('../images/profile2.png')}
                        style={{width:32, height:32, resizeMode:'cover', borderRadius:32, marginRight:5}}
                    />
                    <Text style={{ fontSize: 20 }}>{item.name}</Text>
            </TouchableOpacity>
        )
    }


    render() {
        const {height} = Dimensions.get('window');

        return (
            <SafeAreaView style={{height}}>
                <FlatList
                    data={this.state.users}
                    renderItem={this.renderRow}
                    keyExtractor={(item) => item.phone}
                    ListHeaderComponent={() => <Text style={{fontSize:30, marginVertical:10, marginLeft:10, fontWeight:'bold'}}>Chats</Text>}
                />
            </SafeAreaView>
        );
    }
}
