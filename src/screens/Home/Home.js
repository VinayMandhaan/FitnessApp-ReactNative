import React, {useEffect, useState} from 'react';
import {
    ActivityIndicator,
    Image,
    ImageBackground,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
    Dimensions
} from 'react-native';
import {TextInput} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {excercise_reports, get_excercise} from '../../actions/excercise'
import {useDispatch, useSelector} from 'react-redux'
import Toast from 'react-native-simple-toast';
import { useFocusEffect } from '@react-navigation/native'
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height

const Home = (props) => {
    const dispatch = useDispatch()
    const userExcercise = useSelector(state=>state.excercise.excercises);
    const loading = useSelector(state=>state.excercise.loading);
    const newData = [
        {
            id:1,
            session:"SESSION 01",
            name:'Barbell Press',
            time:'90s',
        },
        {
            id:2,
            session:"SESSION 02",
            name:'Front Dumbell Raises',
            time:'90s',
        },
        {
            id:1,
            session:"SESSION 03",
            name:'Bicep EZ Bar Curls',
            time:'90s',
        }
    ]

    const getExcercises = () => {
        // console.log('Function Called')
        dispatch(get_excercise())
        dispatch(excercise_reports())
    }


    const getExerciseName = () => {
        var exName
        exName =  userExcercise && !userExcercise.is_off && userExcercise.excersize[0].excersize.type
        return exName
    }

    const getTotalSets = () => {
        var totalSets
        totalSets = userExcercise && !userExcercise.is_off && userExcercise.excersize.map(s => s.excersize.sets)
        var newSets = totalSets && totalSets.map(i => Number(i))
        var userSets = newSets && newSets.reduce((a,b) => a + b, 0)
        return userSets
    }

    const getExcerciseImage = () => {
        var exImg
        exImg =  userExcercise && !userExcercise.is_off && userExcercise.excersize[0].excersize.type_image
        return exImg
    }

    useEffect(() => {
        // console.log('UseEffect Called')
        getExcercises()
    },[])
    // console.log(userExcercise && userExcercise.excersize.map(s => console.log(s.excersize.name)),'HEY')

    // console.log(userExcercise && userExcercise.excersize[0].excersize.image)
    // console.log(userExcercise.is_completed,'ex')
    const showComplete = () => {
        Toast.show('Excercise Already Completed', Toast.SHORT)
    }
    return (
        loading ? 
        (
            <View style={{display:'flex', flex:1, justifyContent:'center'}}>
                <ActivityIndicator color="#B02E14" size={'large'}/>
            </View>
        ):
        <View style={{backgroundColor:'#040506', flex:1}}>
            <ImageBackground source={require('../../assets/images/deadlift-barbell.jpg')} imageStyle={{opacity:0.5}} style={{width:'100%', height:height-550}}>
                <View style={{display:'flex', margin:30}}>
                    <Text style={{color:'white', fontSize:22, marginTop:40, fontFamily:'Poppins-Bold'}}>WORKOUT SESSIONS</Text>
                    <Text style={{color:'#d3d3d3', marginTop:20, fontFamily:'Poppins-Regular'}}>Live Happier and Healthier By Working Out Everyday</Text>
                </View>
            </ImageBackground>
            <ScrollView>
            {
                userExcercise && userExcercise.is_off ? 
                (
                    <View style={{display:'flex', flexDirection:'row', borderRadius:10, justifyContent:'space-between', margin:20, backgroundColor:'#303030'}}>
                    <View style={{display:'flex', justifyContent:'center', width:'50%'}}>
                            <Text style={{color:'white', fontFamily:'Poppins-Bold', textAlign:'center'}}>REST DAY</Text>
                    </View>
                    <View>
                        <Image source={require('../../assets/images/Bicep.jpg')} style={{width:width-200,height:height-620, borderTopRightRadius:10, borderBottomRightRadius:10, opacity:0.8}}/>
                    </View>
                </View>
                ):
                (
                    <View>
                    <View>
                        <Text style={{color:'white', textAlign:'center', fontFamily:'Poppins-SemiBold',fontSize:16,marginTop:15}}>WORKOUT FOR TODAY</Text>
                    </View>
                    <View>
                    <TouchableOpacity onPress={()=>userExcercise.is_completed ? showComplete() : props.navigation.navigate('Workout', {
                        userData:userExcercise
                    })}>
                        <View style={{display:'flex', flexDirection:'row', borderRadius:10, justifyContent:'space-between', margin:20, backgroundColor:'#303030'}}>
                            <View style={{display:'flex', flexDirection:'column'}}>
                                <View style={{display:'flex', flexDirection:'row', margin:10, width:120}}>
                                    <Icon name="dumbbell" color="#B02E14" size={20}/>
                                    <Text style={{color:'white'}}>:</Text>
                                    <Text style={{color:'white', marginLeft:5, fontFamily:'Poppins-Regular'}}>{getExerciseName()}</Text>
                                </View>
                                {/* <View style={{display:'flex', flexDirection:'row', margin:10, width:120}}>
                                    <Icon name="timer-outline" color="#B02E14" size={20}/>
                                    <Text style={{color:'white'}}>:</Text>
                                    <Text style={{color:'white', marginLeft:5, fontFamily:'Poppins-Regular'}}>60s</Text>
                                </View> */}
                                <View style={{display:'flex', flexDirection:'row', margin:10, width:120}}>
                                    <Icon name="weight-lifter" color="#B02E14" size={20}/>
                                    <Text style={{color:'white'}}>:</Text>
                                    <Text style={{color:'white', marginLeft:5, fontFamily:'Poppins-Regular'}}>{getTotalSets()}</Text>
                                </View>
                            </View>
                            <View>
                                <Image source={{uri:getExcerciseImage()}} style={{width:190,height:150, borderTopRightRadius:10, borderBottomRightRadius:10, opacity:0.6}}/>
                            </View>
                            <View style={{position:'absolute', right:10, top:10}}>
                                {
                                    userExcercise && userExcercise.is_completed  ? <Icon name="check-circle" color="green" size={25}/> : null
                                } 
                            </View>
                        </View>
                    </TouchableOpacity>
                    </View>
                    <View>
                        <Text style={{color:'white', textAlign:'center', fontFamily:'Poppins-SemiBold',fontSize:16,marginTop:15}}>SESSIONS</Text>
                    </View>
                    <ScrollView horizontal={true}>
                    <View style={{flexDirection:'row'}}>
                    {
                        userExcercise && !userExcercise.is_off && userExcercise.excersize.map(s => (
                            <View style={{margin:20}}>
                            <View style={{backgroundColor:'#303030', width:200, height:240, borderRadius:10, display:'flex'}}>
                                <ImageBackground source={{uri:s.excersize.image}} imageStyle={{resizeMode:'center', opacity:0.5, borderBottomLeftRadius:10, borderBottomRightRadius:10}}  style={{width:180, height:120, alignSelf:'center'}}>
                                    <View style={{display:'flex', justifyContent:'center', alignContent:'center', alignItems:'center', height:100}}>
                                    <Text style={{color:'#d3d3d3', textAlign:'center', fontFamily:'Poppins-SemiBold'}}>{s.session}</Text>
                                    </View>
                                </ImageBackground>
                                <View style={{display:'flex', flexDirection:'column'}}>
                                    <View style={{display:'flex', flexDirection:'row', margin:5, width:160}}>
                                        <Icon name="dumbbell" color="#B02E14" size={20}/>
                                        <Text style={{color:'white'}}>:</Text>
                                        <Text style={{color:'white', marginLeft:5, fontFamily:'Poppins-Regular'}}>{s.excersize.name}</Text>
                                    </View>
                                    <View style={{display:'flex', flexDirection:'row', margin:5, width:160}}>
                                        <Icon name="timer-outline" color="#B02E14" size={20}/>
                                        <Text style={{color:'white'}}>:</Text>
                                        <Text style={{color:'white', marginLeft:5, fontFamily:'Poppins-Regular'}}>{s.excersize.rest} rest</Text>
                                    </View>
                                    <View style={{display:'flex', flexDirection:'row', margin:5, width:160}}>
                                        <Icon name="weight-lifter" color="#B02E14" size={20}/>
                                        <Text style={{color:'white'}}>:</Text>
                                        <Text style={{color:'white', marginLeft:5, fontFamily:'Poppins-Regular'}}>{s.excersize.sets}</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        ))
                    }
                    </View>
                    </ScrollView>
                </View>
                )
            }
        </ScrollView>
        </View>
    )
}

export default Home