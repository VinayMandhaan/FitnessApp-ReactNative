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


const Home = () => {
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
    return(
        <View style={{backgroundColor:'#040506', flex:1}}>
            <ImageBackground source={require('../../assets/images/deadlift-barbell.jpg')} imageStyle={{opacity:0.5}} style={{width:'100%', height:250}}>
                <View style={{display:'flex', margin:30}}>
                    <Text style={{color:'white', fontSize:22, marginTop:40, fontWeight:'bold'}}>WORKOUT SESSIONS</Text>
                    <Text style={{color:'#d3d3d3', marginTop:20, fontWeight:'bold'}}>Live Happier and Healthier By Working Out Everyday</Text>
                </View>
            </ImageBackground>
            <ScrollView>
            <View>
                <View>
                    <Text style={{color:'white', textAlign:'center', fontWeight:'bold',fontSize:16,marginTop:15}}>WORKOUT FOR TODAY</Text>
                </View>
                <View>
                    <View style={{display:'flex', flexDirection:'row', borderRadius:10, justifyContent:'space-between', margin:20, backgroundColor:'#303030'}}>
                        <View style={{display:'flex', flexDirection:'column'}}>
                            <View style={{display:'flex', flexDirection:'row', margin:10, width:120}}>
                                <Icon name="dumbbell" color="#B02E14" size={20}/>
                                <Text style={{color:'white'}}>:</Text>
                                <Text style={{color:'white', marginLeft:5, fontWeight:'bold'}}>SHOULDERS AND ARMS</Text>
                            </View>
                            <View style={{display:'flex', flexDirection:'row', margin:10, width:120}}>
                                <Icon name="timer-outline" color="#B02E14" size={20}/>
                                <Text style={{color:'white'}}>:</Text>
                                <Text style={{color:'white', marginLeft:5, fontWeight:'bold'}}>60s</Text>
                            </View>
                            <View style={{display:'flex', flexDirection:'row', margin:10, width:120}}>
                                <Icon name="weight-lifter" color="#B02E14" size={20}/>
                                <Text style={{color:'white'}}>:</Text>
                                <Text style={{color:'white', marginLeft:5, fontWeight:'bold'}}>23 SETS</Text>
                            </View>
                        </View>
                        <View>
                            <Image source={require('../../assets/images/Bicep.jpg')} style={{width:190,height:150, borderTopRightRadius:10, borderBottomRightRadius:10, opacity:0.8}}/>
                        </View>
                    </View>
                </View>
                <View>
                    <Text style={{color:'white', textAlign:'center', fontWeight:'bold',fontSize:16,marginTop:15}}>SESSIONS</Text>
                </View>
                <ScrollView horizontal={true}>
                <View style={{flexDirection:'row'}}>
                {
                    newData.map(s => (
                        <View style={{margin:20}}>
                        <View style={{backgroundColor:'#303030', width:200, height:240, borderRadius:10, display:'flex'}}>
                            <ImageBackground source={require('../../assets/images/dumbbell-press.jpg')} imageStyle={{resizeMode:'stretch', opacity:0.5, borderRadius:10}}  style={{width:190,height:100, alignSelf:'center', marginTop:10}}>
                                <View style={{display:'flex', justifyContent:'center', alignContent:'center', alignItems:'center', height:100}}>
                                <Text style={{color:'#d3d3d3', textAlign:'center', fontWeight:'bold'}}>{s.session}</Text>
                                </View>
                            </ImageBackground>
                            <View style={{display:'flex', flexDirection:'column'}}>
                                <View style={{display:'flex', flexDirection:'row', margin:5, width:160}}>
                                    <Icon name="dumbbell" color="#B02E14" size={20}/>
                                    <Text style={{color:'white'}}>:</Text>
                                    <Text style={{color:'white', marginLeft:5, fontWeight:'bold'}}>{s.name}</Text>
                                </View>
                                <View style={{display:'flex', flexDirection:'row', margin:5, width:160}}>
                                    <Icon name="timer-outline" color="#B02E14" size={20}/>
                                    <Text style={{color:'white'}}>:</Text>
                                    <Text style={{color:'white', marginLeft:5, fontWeight:'bold'}}>{s.time}</Text>
                                </View>
                                <View style={{display:'flex', flexDirection:'row', margin:5, width:160}}>
                                    <Icon name="weight-lifter" color="#B02E14" size={20}/>
                                    <Text style={{color:'white'}}>:</Text>
                                    <Text style={{color:'white', marginLeft:5, fontWeight:'bold'}}>10 SETS</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    ))
                }
                </View>
                </ScrollView>
            </View>
            </ScrollView>
        </View>
    )
}

export default Home