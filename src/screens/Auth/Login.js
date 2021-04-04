
import React from 'react';
import {
    Image,
    ImageBackground,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import {TextInput} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
const Login = (props) => {
    return (
        <View style={{flex:1}}>
            <ImageBackground source={require('../../assets/images/gym.jpg')} imageStyle={{opacity:0.3, resizeMode:'cover'}} style={{width:'100%', height:'100%'}}>
            <View style={{marginTop:40}}>
                {/* <Text style={{color:'white', fontSize:24, fontWeight:'bold', textAlign:'center'}}>FITNESS APP</Text> */}
            </View>
            <View style={{marginTop:40, margin:40}}>
                <Text style={{fontFamily:'Poppins-Bold',color:'white', fontSize:24, textAlign:'center'}}>LOGIN TO STAY FIT</Text>
            </View>
            <View style={{marginTop:50}}>

            </View>
            <View style={{margin:20}}>
            <TextInput
                mode='flat'
                right={<TextInput.Icon name={() => <Icon name={'email'} size={20} />} />}
                theme={{roundness:10, colors: { placeholder: 'black', text: 'black', primary: '#040506'}}}
                style={{borderRadius:10, borderColor:'red',fontFamily:'OpenSans-Regular'}}
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
            <View>
                <TouchableOpacity>
                    <Text style={{color:'white', marginTop:5,fontFamily:'Poppins-SemiBold'}}>Forgot Your <Text style={{color:'#B02E14', fontFamily:'Poppins-Bold'}}>Password?</Text></Text>
                </TouchableOpacity>
            </View>
            </View>
            <View>
                <TouchableOpacity onPress={()=>props.navigation.navigate('Main')} style={{backgroundColor:'#B02E14', alignContent:'center', padding:15, margin:20, borderRadius:10}}>
                    <Text style={{textAlign:'center', color:'white', fontFamily:'Poppins-Bold', fontSize:16}}>LOGIN</Text>
                </TouchableOpacity>
            </View>
            <View style={{alignContent:'center'}}>
                <TouchableOpacity>
                    <Text style={{color:'white', textAlign:'center', fontFamily:'Poppins-SemiBold'}}>Don't Have An Account Yet? <Text style={{color:'#B02E14', fontFamily:'Poppins-Bold'}}>SignUp</Text></Text>
                </TouchableOpacity>
            </View>
            <View>
                <Text style={{color:'white', fontFamily:'Poppins-Bold', fontSize:18, textAlign:'center'}}>OR</Text>
            </View>
            <View style={{alignItems:'center', marginTop:20}}>
                <TouchableOpacity>
                    <Image source={require('../../assets/images/google.png')} style={{width:60, height:60}}/>
                </TouchableOpacity>
            </View>
            </ImageBackground>
        </View>
    )
}

export default Login