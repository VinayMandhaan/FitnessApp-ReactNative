import React, {useEffect, useState} from 'react';
import {
    Image,
    ImageBackground,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import {TextInput} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {get_excercise, complete_session} from '../../actions/excercise'
import {useDispatch, useSelector} from 'react-redux'


const Sessions = (props) => {    
    const dispatch = useDispatch()
    const {userSession} = props.route.params
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [updatedExcercise, setUpdatedExcercise] = useState([])


    const getExcercises = () => {
        setUpdatedExcercise(userSession.excersize.filter(x => x.isCompleted == false))
    }

    const getCurrentExcercise = () => {
        if(selectedIndex < updatedExcercise.length-1){
            console.log(updatedExcercise[selectedIndex]._id,'IDDD')
            const data = {
                excersize_id : updatedExcercise[selectedIndex]._id,
                status:true
            }
            dispatch(complete_session(data))
            setSelectedIndex(selectedIndex => selectedIndex + 1)
        }else{
            props.navigation.navigate('Main')
        }
    }

    useEffect(() => {
        getExcercises()
    },[])

    // console.log(userExcercise && updatedExcercise[selectedIndex] && updatedExcercise[selectedIndex].excersize.name,'Updated')
    return (
        <View style={{backgroundColor:'#040506', flex:1}}>
            <ImageBackground source={{uri:updatedExcercise[selectedIndex] && updatedExcercise[selectedIndex].excersize.image}} imageStyle={{opacity:0.5, resizeMode:'cover'}} style={{width:'100%', height:300}}>
                <View style={{margin:30, borderRadius:80/2, borderColor:'white', borderWidth:2, height:40, width:40, justifyContent:'center', alignItems:'center'}}>
                    <TouchableOpacity onPress={()=>props.navigation.pop()}>
                        <Icon name="chevron-left" color="white" size={30}/>
                    </TouchableOpacity>
                </View>
                <View style={{display:'flex', margin:30, alignItems:'center'}}>
                    <Text style={{color:'white', fontSize:22,fontFamily:'Poppins-Bold'}}>{updatedExcercise[selectedIndex] && updatedExcercise[selectedIndex].excersize.name.toUpperCase()}</Text>
                    <Text style={{color:'white', fontSize:22,fontFamily:'Poppins-Bold'}}>SESSION</Text>
                </View>
            </ImageBackground>
            <View>
            <View>
                <Text style={{color:'white', fontSize:18,fontFamily:'Poppins-Bold', textAlign:'center', margin:20}}>SESSION COMPLETED {selectedIndex}/{updatedExcercise && updatedExcercise.length}</Text>
            </View>
            <View style={{backgroundColor:'#303030', margin:20, borderRadius:10, padding:20}}>
                <View>
                    <View style={{flexDirection:'column'}}>
                        <Text style={{color:'white', fontFamily:'Poppins-SemiBold', fontSize:16}}>Reps: <Text style={{color:'#B02E14', fontFamily:'Poppins-Bold', fontSize:20}}>{updatedExcercise[selectedIndex] && updatedExcercise[selectedIndex].excersize.reps}</Text></Text>
                        <Text style={{color:'white', fontFamily:'Poppins-SemiBold', fontSize:16}}>Sets: <Text style={{color:'#B02E14', fontFamily:'Poppins-Bold', fontSize:20}}>{updatedExcercise[selectedIndex] && updatedExcercise[selectedIndex].excersize.sets}</Text></Text>
                        <Text style={{color:'white', fontFamily:'Poppins-SemiBold', fontSize:16}}>Rest: <Text style={{color:'#B02E14', fontFamily:'Poppins-Bold', fontSize:20}}>{updatedExcercise[selectedIndex] && updatedExcercise[selectedIndex].excersize.rest}</Text></Text>
                        <Text style={{color:'white', fontFamily:'Poppins-SemiBold', fontSize:16}}>Tempo: <Text style={{color:'#B02E14', fontFamily:'Poppins-Bold', fontSize:20}}>{updatedExcercise[selectedIndex] && updatedExcercise[selectedIndex].excersize.tempo}</Text></Text>

                    
                    </View>
                </View>
            </View>
            </View>
            <View style={{position:'absolute', bottom:10, width:'100%'}}>
                <TouchableOpacity onPress={()=>getCurrentExcercise()} style={{backgroundColor:'#F12908', margin:10, padding:20, borderRadius:10}}>
                    <Text style={{color:'white', fontWeight:'bold', textAlign:'center'}}>COMPLETED</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Sessions