
import React, {useState} from 'react';
import {
    Image,
    ImageBackground,
    Text,
    TouchableOpacity,
    View,
    Dimensions
} from 'react-native';
import {TextInput} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {googleLogin, login} from '../../actions/auth'
import {useSelector, useDispatch} from 'react-redux'
import {GoogleSignin, statusCodes} from '@react-native-community/google-signin';
const Login = (props) => {
    const dispatch = useDispatch()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onSubmit = () => {
        const formData = {
            email:email,
            password:password
        }
        dispatch(login(formData))
    }

    GoogleSignin.configure({
        webClientId:
          '320386011325-23hmvov9305cg28da9sr6sa6lh8jo2kb.apps.googleusercontent.com',
        // iosClientId:"925551315399-9iht6r5pgs15r00tmfuuor961rh3ktb7.apps.googleusercontent.com",
        androidClientId:
          '320386011325-3md7ue5o3t21a2upbegue00jofl4dgnd.apps.googleusercontent.com',
        offlineAccess: false,
      });
    

    const socialAuth = async (type) => {
        let data = {};
 
          try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            // this.setState({ userInfo });
            // console.log("signIn: ", userInfo);
            console.log(userInfo)
    
            const tokens = await GoogleSignin.getTokens();
    
            dispatch(googleLogin(tokens.accessToken))
           
          } catch (error) {
            alert(error);
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
              // user cancelled the login flow
              console.log('user cancelled the login flow');
            } else if (error.code === statusCodes.IN_PROGRESS) {
              console.log('operation (e.g. sign in) is in progress already');
              // operation (e.g. sign in) is in progress already
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
              console.log('play services not available or outdated');
              // play services not available or outdated
            } else {
              console.log('some other error happened:', error.message);
              // some other error happened
            }
          }
        
      };



    return (
        <View style={{flex:1}}>
            <ImageBackground source={require('../../assets/images/gym.jpg')} imageStyle={{opacity:0.3, resizeMode:'cover'}} style={{width:'100%', height:'100%'}}>
            <View style={{marginTop:40}}>
                {/* <Text style={{color:'white', fontSize:24, fontWeight:'bold', textAlign:'center'}}>FITNESS APP</Text> */}
            </View>
            <View style={{marginTop:40, margin:40}}>
                <Text style={{fontFamily:'Poppins-Bold',color:'white', fontSize:24, textAlign:'center'}}>LOGIN TO STAY FIT</Text>
                <View style={{backgroundColor:'white', width:Dimensions.get('window').width - 150, height:2, flexDirection:'row', alignSelf:'center'}}>
                </View>
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
                onChangeText={(e)=>setEmail(e)}
            />
            </View>
            <View style={{margin:20}}>
            <TextInput
                mode='flat'
                right={<TextInput.Icon name={() => <Icon name={'vpn-key'} size={20} />} />}
                theme={{roundness:10, colors: { placeholder: 'black', text: 'black', primary: '#040506'}}}
                style={{borderRadius:10, borderColor:'red'}}
                label="Password"
                onChangeText={(e)=>setPassword(e)}
                secureTextEntry={true}

            />
            <View>
                <TouchableOpacity>
                    <Text style={{color:'white', marginTop:5,fontFamily:'Poppins-SemiBold'}}>Forgot Your <Text style={{color:'#B02E14', fontFamily:'Poppins-Bold'}}>Password?</Text></Text>
                </TouchableOpacity>
            </View>
            </View>
            <View>
                <TouchableOpacity onPress={()=>onSubmit()} style={{backgroundColor:'#B02E14', alignContent:'center', padding:15, margin:20, borderRadius:10}}>
                    <Text style={{textAlign:'center', color:'white', fontFamily:'Poppins-Bold', fontSize:16}}>LOGIN</Text>
                </TouchableOpacity>
            </View>
            <View style={{alignContent:'center'}}>
                <TouchableOpacity onPress={()=>props.navigation.navigate('SignUp')}>
                    <Text style={{color:'white', textAlign:'center', fontFamily:'Poppins-SemiBold'}}>Don't Have An Account Yet? <Text style={{color:'#B02E14', fontFamily:'Poppins-Bold'}}>SIGNUP</Text></Text>
                </TouchableOpacity>
            </View>
            <View>
                <Text style={{color:'white', fontFamily:'Poppins-Bold', fontSize:18, textAlign:'center'}}>OR</Text>
            </View>
            <View style={{alignItems:'center', marginTop:20}}>
                <TouchableOpacity  onPress={() => socialAuth('google')}>
                    <Image  source={require('../../assets/images/google.png')} style={{width:60, height:60}}/>
                </TouchableOpacity>
            </View>
            </ImageBackground>
        </View>
    )
}

export default Login