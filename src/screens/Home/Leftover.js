import React from 'react';
import {
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

const Leftover = (props) => {
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
    return (
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
                    newData.map(s => (
                    <View style={{backgroundColor:'#303030', margin:20, padding:20, borderRadius:10}}>
                        <View style={{display:'flex', flexDirection:'row', marginBottom:10, justifyContent:'center',  alignItems:'center'}}>
                            <Text style={{color:'white', fontFamily:'Poppins-SemiBold', marginLeft:10}}>{s.name}</Text>
                        </View>
                        <View style={{display:'flex'}}>
                        <View style={{flexDirection:'row', margin:8}}>
                            <Icon name="weight-lifter" color="#B02E14" size={20}/>
                            <Text style={{color:'white', marginLeft:5, fontFamily:'Poppins-Light'}}>Sessions: <Text style={{color:'white', fontFamily:'Poppins-Regular'}}>{s.sessions}</Text></Text>
                        </View>
                        <View style={{flexDirection:'row', margin:8}}>
                            <Icon name="dumbbell" color="#B02E14" size={20}/>
                            <Text style={{color:'white', marginLeft:5, fontFamily:'Poppins-Light'}}>Sets: <Text style={{color:'white', fontFamily:'Poppins-Regular'}}>{s.sets}</Text></Text>
                        </View>
                        <View style={{flexDirection:'row', margin:8}}>
                            <Icon name="calendar" color="#B02E14" size={20}/>
                            <Text style={{color:'white', marginLeft:5, fontFamily:'Poppins-Light'}}>Date: <Text style={{color:'white', fontFamily:'Poppins-Regular'}}>4-4-2021</Text></Text>
                        </View>
                        <View>
                        <TouchableOpacity style={{backgroundColor:'#F12908', margin:20, padding:10, borderRadius:10}}>
                            <Text style={{color:'white', fontWeight:'bold', textAlign:'center'}}>START</Text>
                        </TouchableOpacity>
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

export default Leftover