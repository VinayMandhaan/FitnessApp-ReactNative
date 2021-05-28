import React, {useEffect} from 'react';
import {
    Image,
    ImageBackground,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
    Dimensions,
    ActivityIndicator
} from 'react-native';
import {TextInput} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch, useSelector} from 'react-redux'
import { leftover_excercise } from '../../actions/excercise';

const Leftover = (props) => {
    const dispatch = useDispatch()
    const userLeftOver = useSelector(state=>state.excercise.leftover);
    const loading = useSelector(state=>state.excercise.loading);
    const newData = [
        {
            id:1,
            name:'SHOULDER AND ARMS',
            sessions:'3',
            sets:'23'
        },
        {
            id:2,
            name:'LEGS',
            sessions:'3',
            sets:'23'
        },
        {
            id:3,
            name:'SHOULDER AND ARMS',
            sessions:'3',
            sets:'23'
        },
    ]

    const getLeftOver = () => {
        dispatch(leftover_excercise())
    }

    const getTotalSets = (val) => {
        var totalSets
        totalSets = val && !val.is_off && val.excersize.map(s => s.excersize.sets)
        var newSets = totalSets && totalSets.map(i => Number(i))
        var userSets = newSets && newSets.reduce((a,b) => a + b, 0)
        return userSets
    }

    const getExcersieName = (val) => {
       return val.excersize[0].excersize.type
    }

    useEffect(() => {
        console.log(userLeftOver)
        getLeftOver()
    },[])

    return (
        loading ? 
        (
            <View style={{display:'flex', flex:1, justifyContent:'center'}}>
                <ActivityIndicator color="#B02E14" size={'large'}/>
            </View>
        ) :
        <View style={{flex:1}}>
            <View style={{margin:20, marginTop:40, flexDirection:'row'}}>
                <View style={{margin:5, borderRadius:80/2, borderColor:'white', borderWidth:2, height:40, width:40, justifyContent:'center', alignItems:'center'}}>
                    <TouchableOpacity onPress={()=>props.navigation.pop()}>
                        <Icon name="chevron-left" color="white" size={30}/>
                    </TouchableOpacity>
                </View>
                <View style={{marginLeft:10, marginTop:5}}>
                <Text style={{color:'white', fontFamily:'Poppins-Bold', fontSize:20}}>LEFTOVER EXERCISES</Text>
                <View style={{backgroundColor:'white', width:Dimensions.get('window').width - 190, height:2}}>
                </View>
                </View>
            </View>
            <ScrollView>
            <View>
                {
                    userLeftOver && userLeftOver.length > 0 ? userLeftOver.map((s,i) => (
                    <View style={{backgroundColor:'#303030', margin:20, padding:20, borderRadius:10}}>
                        <View style={{display:'flex', flexDirection:'row', marginBottom:10, justifyContent:'center',  alignItems:'center'}}>
                            <Text style={{color:'white', fontFamily:'Poppins-SemiBold', marginLeft:10}}>{getExcersieName(s)}</Text>
                        </View>
                        <View style={{display:'flex'}}>
                        <View style={{flexDirection:'row', margin:8}}>
                            <Icon name="weight-lifter" color="#B02E14" size={20}/>
                            <Text style={{color:'white', marginLeft:5, fontFamily:'Poppins-Light'}}>Sessions: <Text style={{color:'white', fontFamily:'Poppins-Regular'}}>{s.excersize.length}</Text></Text>
                        </View>
                        <View style={{flexDirection:'row', margin:8}}>
                            <Icon name="dumbbell" color="#B02E14" size={20}/>
                            <Text style={{color:'white', marginLeft:5, fontFamily:'Poppins-Light'}}>Sets: <Text style={{color:'white', fontFamily:'Poppins-Regular'}}>{getTotalSets(s)}</Text></Text>
                        </View>
                        <View style={{flexDirection:'row', margin:8}}>
                            <Icon name="calendar" color="#B02E14" size={20}/>
                            <Text style={{color:'white', marginLeft:5, fontFamily:'Poppins-Light'}}>Week: <Text style={{color:'white', fontFamily:'Poppins-Regular'}}>{s.week} - {s.day.toUpperCase()}</Text></Text>
                        </View>
                        <View>
                        <TouchableOpacity onPress={()=>props.navigation.navigate('Workout', {
                            userData:s
                        })} style={{backgroundColor:'#F12908', margin:20, padding:10, borderRadius:10}}>
                            <Text style={{color:'white', fontWeight:'bold', textAlign:'center'}}>START</Text>
                        </TouchableOpacity>
                        </View>
                        </View>
                    </View>
                    )) : <Text style={{color:'white', textAlign:'center', fontFamily:'Poppins-SemiBold'}}>NO LEFTOVER EXERCISES</Text>
                }
            </View>
            </ScrollView>
        </View>
    )
}

export default Leftover