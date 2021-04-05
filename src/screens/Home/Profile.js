import React from 'react';
import {
    Image,
    Text,
    TouchableOpacity,
    View,
    Dimensions
} from 'react-native';
import {TextInput} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';


const Profile = (props) => {
    return(
        <View style={{backgroundColor:'#040506', flex:1}}>
            <View style={{margin:20, marginTop:40}}>
                <Text style={{color:'white', fontFamily:'Poppins-Bold', fontSize:20}}>PROFILE</Text>
                <View style={{backgroundColor:'white', width:Dimensions.get('window').width - 315, height:2}}>
                </View>
            </View>
            <View>
                <TouchableOpacity onPress={()=>props.navigation.navigate('Leftover')}>
                <View style={{backgroundColor:'#303030', margin:20, padding:10, elevation:2, borderRadius:10, display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                    <Text style={{color:'white', fontFamily:'Poppins-SemiBold'}}>View Left Over Excerises</Text>
                    <Icon name="chevron-right" color="white" size={20}/>
                </View>
                </TouchableOpacity>
                <View style={{backgroundColor:'#303030', margin:20, padding:10, elevation:2, borderRadius:10, display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                    <Text style={{color:'white', fontFamily:'Poppins-SemiBold'}}>Logout</Text>
                    <Icon name="logout" color="white" size={20}/>
                </View>
            </View>
        </View>
    )
}

export default Profile