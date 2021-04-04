
import React from 'react';
import {
    Image,
    Text,
    TouchableOpacity,
    View,
    ImageBackground
} from 'react-native';
import {TextInput} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

const Register = () => {
    return (
        <View style={{backgroundColor:'#040506', flex:1}}>
            <ImageBackground source={require('../../assets/images/gym.jpg')} imageStyle={{opacity:0.3, resizeMode:'cover'}} style={{width:'100%', height:'100%'}}>
            <View style={{marginTop:40}}>
                {/* <Text style={{color:'white', fontSize:24, fontWeight:'bold', textAlign:'center'}}>FITNESS APP</Text> */}
            </View>
            <View style={{marginTop:40, margin:40}}>
                <Text style={{color:'white', fontSize:24, fontWeight:'bold', textAlign:'center'}}>REGISTER TO STAY FIT</Text>
            </View>
            <View style={{marginTop:50}}>

            </View>
            <View style={{margin:20}}>
            <TextInput
                mode='flat'
                right={<TextInput.Icon name={() => <EvilIcons name={'user'} size={30} color="black" />} />}
                theme={{roundness:10, colors: { placeholder: 'black', text: 'black', primary: '#040506'}}}
                style={{borderRadius:10, borderColor:'red'}}
                label="Username"
            />
            </View>
            <View style={{margin:20}}>
            <TextInput
                mode='flat'
                right={<TextInput.Icon name={() => <Icon name={'email'} size={20} />} />}
                theme={{roundness:10, colors: { placeholder: 'black', text: 'black', primary: '#040506'}}}
                style={{borderRadius:10, borderColor:'red'}}
                label="Email"
            />
            </View>
            <View style={{margin:20}}>
            <TextInput
                mode='flat'
                right={<TextInput.Icon name={() => <Icon name={'vpn-key'} size={20} />} />}
                theme={{roundness:10, colors: { placeholder: 'black', text: 'black', primary: '#040506'}}}
                style={{borderRadius:10, borderColor:'red'}}
                label="Password"
            />
            </View>
            <View>
                <TouchableOpacity style={{backgroundColor:'#B02E14', alignContent:'center', padding:15, margin:20, borderRadius:10}}>
                    <Text style={{textAlign:'center', color:'white', fontWeight:'bold', fontSize:16}}>Register</Text>
                </TouchableOpacity>
            </View>
            <View style={{alignContent:'center'}}>
                <TouchableOpacity>
                    <Text style={{color:'white', textAlign:'center', fontWeight:'bold'}}>Already Have An Account? <Text style={{color:'#B02E14', fontWeight:'bold'}}>Login</Text></Text>
                </TouchableOpacity>
            </View>
            {/* <View style={{alignItems:'center', marginTop:20}}>
                <TouchableOpacity>
                    <Image source={require('../../assets/images/google.png')} style={{width:60, height:60}}/>
                </TouchableOpacity>
            </View> */}
        </ImageBackground>
        </View>
    )
}

export default Register