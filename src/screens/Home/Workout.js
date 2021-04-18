import React, {useEffect} from 'react';
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
import Entypo from 'react-native-vector-icons/Entypo'
import {get_excercise} from '../../actions/excercise'
import {useDispatch, useSelector} from 'react-redux'


const Workout = (props) => {
    const dispatch = useDispatch()
    const {userData} = props.route.params
    const newData = [
        {
            id:1,
            session:'Flat Dumbbell Press Press',
            sets:10,
            reps:10
        },
        {
            id:2,
            session:'Reverse Grip Barbell Rows',
            sets:10,
            reps:10
        },
        {
            id:3,
            session:'Dumbbell Pullovers',
            sets:10,
            reps:10
        },
        {
            id:4,
            session:'One Arm Dumbbell Reps',
            sets:10,
            reps:10
        },
        {
            id:5,
            session:'One Arm Dumbbell Reps',
            sets:10,
            reps:10
        }
    ]

    const getExerciseName = () => {
        var exName
        exName = userData && userData.excersize[0].excersize.type
        return exName
    }

    const getTotalSets = () => {
        var totalSets
        totalSets = userData && userData.excersize.map(s => s.excersize.sets)
        var newSets = totalSets.map(i => Number(i))
        var userSets = newSets.reduce((a,b) => a + b, 0)
        return userSets
    }

    const getTotalSessions = () => {
        var totalSessions
        totalSessions = userData && userData.excersize.length
        return totalSessions
    }

    const getExcerciseImage = () => {
        var exImg
        exImg =  userData && !userData.is_off && userData.excersize[0].excersize.type_image
        return exImg
    }

    console.log(userData,'EX')

    return (
        <View style={{display:'flex', flex:1}}>
            <ImageBackground source={{uri:getExcerciseImage()}} imageStyle={{opacity:0.5}} style={{width:'100%', height:250}}>
                <View style={{margin:30, borderRadius:80/2, borderColor:'white', borderWidth:2, height:40, width:40, justifyContent:'center', alignItems:'center'}}>
                    <TouchableOpacity onPress={()=>props.navigation.pop()}>
                        <Icon name="chevron-left" color="white" size={30}/>
                    </TouchableOpacity>
                </View>
                <View style={{display:'flex', margin:30, position:'absolute', bottom:0, width:200}}>
                    <Text style={{color:'white', fontSize:22,fontFamily:'Poppins-Bold'}}>{getExerciseName()}</Text>
                    <Text style={{color:'white', fontSize:22,fontFamily:'Poppins-Bold'}}>WORKOUT</Text>
                </View>
            </ImageBackground>

            <View style={{margin:20}}>
                <View style={{display:'flex', flexDirection:'row'}}>
                    <View style={{flexDirection:'row', margin:8}}>
                        <Icon name="timer-outline" color="#B02E14" size={20}/>
                        <Text style={{color:'white', marginLeft:5, fontFamily:'Poppins-Light'}}>Duration: <Text style={{color:'#B02E14', fontFamily:'Poppins-Regular'}}>15 Mins</Text></Text>
                    </View>
                    <View style={{flexDirection:'row', margin:8}}>
                        <Icon name="weight-lifter" color="#B02E14" size={20}/>
                        <Text style={{color:'white', marginLeft:5, fontFamily:'Poppins-Light'}}>Sessions: <Text style={{color:'#B02E14', fontFamily:'Poppins-Regular'}}>{getTotalSessions()}</Text></Text>
                    </View>
                    <View style={{flexDirection:'row', margin:8}}>
                        <Icon name="dumbbell" color="#B02E14" size={20}/>
                        <Text style={{color:'white', marginLeft:5, fontFamily:'Poppins-Light'}}>Sets: <Text style={{color:'#B02E14', fontFamily:'Poppins-Regular'}}>{getTotalSets()}</Text></Text>
                    </View>
                </View>
            </View>
            <ScrollView>
            <View>
                {
                    userData && userData.excersize.map((s,i) => (
                        <View style={{backgroundColor:'#303030', margin:20, borderRadius:10, padding:20}}>
                            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                                <View style={{flexDirection:'column'}}>
                                    {/* <Text style={{color:'white'}}>{userExcercise.excersize[i]._id}</Text> */}
                                    <Text style={{color:'white', fontFamily:'Poppins-SemiBold'}}>{s.excersize.name}</Text>
                                    <Text style={{color:'#d3d3d3', fontFamily:'Poppins-Light'}}>Status: { userData.excersize[i].isCompleted ?  <Icon name='check-circle' color='green' size={16}/> : <Entypo name='circle-with-cross' color='red' size={16}/>}</Text>
                                </View>
                                <View style={{flexDirection:'column'}}>
                                    <Text style={{color:'#d3d3d3', fontFamily:'Poppins-Light'}}>Reps: <Text style={{color:'#B02E14', fontFamily:'Poppins-Bold'}}>{s.excersize.reps}</Text></Text>
                                    <Text style={{color:'#d3d3d3', fontFamily:'Poppins-Light'}}>Sets: <Text style={{color:'#B02E14', fontFamily:'Poppins-Bold'}}>{s.excersize.sets}</Text></Text>
                                </View>
                            </View>
                        </View>
                    ))
                }
            </View>
            </ScrollView>
            <View>
                <TouchableOpacity onPress={()=>props.navigation.navigate('Sessions', {
                    userSession:userData
                })} style={{backgroundColor:'#F12908', margin:10, padding:20, borderRadius:10}}>
                    <Text style={{color:'white', fontWeight:'bold', textAlign:'center'}}>START WORKOUT</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Workout