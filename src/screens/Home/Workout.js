import React from 'react';
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

const Workout = () => {
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
    return (
        <View style={{display:'flex', flex:1}}>
            <ImageBackground source={require('../../assets/images/chest.jpg')} imageStyle={{opacity:0.5}} style={{width:'100%', height:250}}>
                <View style={{margin:30, borderRadius:80/2, borderColor:'white', borderWidth:2, height:40, width:40, justifyContent:'center', alignItems:'center'}}>
                    <Icon name="chevron-left" color="white" size={30}/>
                </View>
                <View style={{display:'flex', margin:30, position:'absolute', bottom:0, width:200}}>
                    <Text style={{color:'white', fontSize:22,fontWeight:'bold'}}>BACK AND CHEST</Text>
                    <Text style={{color:'white', fontSize:22,fontWeight:'bold'}}>WORKOUT</Text>
                </View>
            </ImageBackground>

            <View style={{margin:20}}>
                <View style={{display:'flex', flexDirection:'row'}}>
                    <View style={{flexDirection:'row', margin:8}}>
                        <Icon name="timer-outline" color="#B02E14" size={20}/>
                        <Text style={{color:'white', marginLeft:5}}>Duration: <Text style={{color:'#B02E14'}}>15 Mins</Text></Text>
                    </View>
                    <View style={{flexDirection:'row', margin:8}}>
                        <Icon name="weight-lifter" color="#B02E14" size={20}/>
                        <Text style={{color:'white', marginLeft:5}}>Sessions: <Text style={{color:'#B02E14'}}>3</Text></Text>
                    </View>
                    <View style={{flexDirection:'row', margin:8}}>
                        <Icon name="dumbbell" color="#B02E14" size={20}/>
                        <Text style={{color:'white', marginLeft:5}}>Sets: <Text style={{color:'#B02E14'}}>23</Text></Text>
                    </View>
                </View>
            </View>
            <ScrollView>
            <View>
                {
                    newData.map(s => (
                        <View style={{backgroundColor:'#303030', margin:20, borderRadius:10, padding:20}}>
                            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                                <Text style={{color:'white', fontWeight:'bold'}}>{s.session}</Text>
                                <View style={{flexDirection:'column'}}>
                                    <Text style={{color:'#d3d3d3'}}>Reps: <Text style={{color:'#B02E14', fontWeight:'bold'}}>{s.reps}</Text></Text>
                                    <Text style={{color:'#d3d3d3'}}>Sets: <Text style={{color:'#B02E14', fontWeight:'bold'}}>{s.sets}</Text></Text>
                                </View>
                            </View>
                        </View>
                    ))
                }
            </View>
            </ScrollView>
            <View>
                <TouchableOpacity style={{backgroundColor:'#F12908', margin:10, padding:20, borderRadius:10}}>
                    <Text style={{color:'white', fontWeight:'bold', textAlign:'center'}}>START WORKOUT</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Workout