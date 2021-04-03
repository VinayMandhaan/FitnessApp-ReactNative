import React from 'react';
import {
    Image,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import {TextInput} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';


const Profile = () => {
    return(
        <View style={{backgroundColor:'#040506', flex:1}}>
            <View style={{margin:20, marginTop:40}}>
                <Text style={{color:'white', fontWeight:'bold', fontSize:20}}>PROFILE</Text>
            </View>
            <View>
                <View style={{backgroundColor:'#303030', margin:20, padding:10, elevation:2, borderRadius:10, display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                    <Text style={{color:'white', fontWeight:'bold'}}>View Left Over Excerises</Text>
                    <Icon name="chevron-right" color="white" size={20}/>
                </View>
                <View style={{backgroundColor:'#303030', margin:20, padding:10, elevation:2, borderRadius:10, display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                    <Text style={{color:'white', fontWeight:'bold'}}>Logout</Text>
                    <Icon name="logout" color="white" size={20}/>
                </View>
            </View>
        </View>
    )
}

export default Profile