import React from 'react';
import {
    Image,
    Text,
    TouchableOpacity,
    Dimensions,
    View,
    ImageBackground,
    ScrollView
} from 'react-native';
import {TextInput} from 'react-native-paper';
import { ContributionGraph } from "react-native-chart-kit";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Report = () => {
    const commitsData = [
        { date: "2017-01-01", count: 3 ? 10 : 0 },
        { date: "2017-01-02", count: 2 ? 8 : 0 },
        { date: "2017-01-03", count: 1 ? 6 : 0 },
        { date: "2017-01-04", count: 0 ? 0 : 0 },
        { date: "2017-01-05", count: 3 ? 10 : 0 },
        { date: "2017-01-06", count: 1 ? 4 : 0 },
        { date: "2017-01-30", count: 2 ? 7 : 0  },
        { date: "2017-01-31", count: 3 ? 10 : 0 },
        { date: "2017-03-01", count: 2 ? 7 : 0  },
        { date: "2017-04-02", count: 3 ? 10 : 0 },
        { date: "2017-03-05", count: 2 ? 7 : 0  },
        { date: "2017-02-30", count: 3 ? 10 : 0 }
      ];

      const newData = [
          {
              id:1,
              name:'SHOULDER AND ARMS',
              sessions:3,
              date:'4-4/2021',
              status:true,
              statusText:'Completed'
          },
          {
            id:2,
            name:'LEGS',
            sessions:2,
            date:'4-2/2021',
            status:false,
            statusText:'Not Completed'
        },
        {
            id:3,
            name:'BACK AND CHEST',
            sessions:3,
            date:'4-1/2021',
            status:true,
            statusText:'Completed'
        },
        {
            id:4,
            name:'SHOULDER AND ARMS',
            sessions:0,
            date:'4-5/2021',
            status:false,
            statusText:'Left'
        },
      ]
      const chartConfig = {
        backgroundGradientFrom: "#1E2923",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#08130D",
        backgroundGradientToOpacity: 0.5,
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false // optional,
      };
    return(
        <View style={{backgroundColor:'#040506', flex:1}}>
            <ImageBackground source={require('../../assets/images/flat.jpg')} imageStyle={{opacity:0.5, resizeMode:'stretch'}} style={{width:'100%', height:250}}>
                <View style={{display:'flex', margin:30}}>
                    <Text style={{color:'white', fontSize:22, marginTop:40, fontFamily:'Poppins-Bold'}}>WORKOUT REPORTS</Text>
                    <Text style={{color:'#d3d3d3', marginTop:20, fontFamily:'Poppins-Regular'}}>Check Your Reports To Keep Track</Text>
                </View>
            </ImageBackground>
            <ScrollView>
            <View>
                <Text style={{color:'white', fontFamily:'Poppins-SemiBold', fontSize:20, textAlign:'center', margin:10}}>WORKOUT CONTRIBUTION GRAPH</Text>
            </View>
            <View>
                <ContributionGraph
                    values={commitsData}
                    endDate={new Date("2017-04-01")}
                    numDays={105}
                    width={Dimensions.get("window").width}
                    height={220}
                    chartConfig={chartConfig}
                    onDayPress={(e) => console.log(e)}
                />
            </View>
            <View style={{display:'flex', flexDirection:'row'}}>
                <View style={{margin:8, padding:10, width:110, alignItems:'center', borderRadius:10, borderRightColor:'white', borderLeftColor:'#B02E14', borderWidth:1, borderTopColor:'white', borderBottomColor:'#B02E14'}}>
                    <Text style={{color:'white', fontFamily:'Poppins-Regular'}}>10 Days</Text>
                </View>
                <View style={{margin:8, padding:10, width:110, alignItems:'center', borderRadius:10, borderRightColor:'white', borderLeftColor:'#B02E14', borderWidth:1, borderTopColor:'white', borderBottomColor:'#B02E14'}}>
                    <Text style={{color:'white', fontFamily:'Poppins-Regular'}}>20 Days</Text>
                </View>
                <View style={{margin:8, padding:10, width:110, alignItems:'center', borderRadius:10, borderRightColor:'white', borderLeftColor:'#B02E14', borderWidth:1, borderTopColor:'white', borderBottomColor:'#B02E14'}}>
                    <Text style={{color:'white', fontFamily:'Poppins-Regular'}}>1 Month</Text>
                </View>
            </View>
            <View>
                {
                    newData.map(s => (
                        <View style={{backgroundColor:'#303030', margin:30, padding:10, borderRadius:10, elevation:5}}>
                            <View style={{display:'flex', flexDirection:'row', marginBottom:10, justifyContent:'center',  alignItems:'center'}}>
                            <Icon name="dumbbell" color="#B02E14" size={20}/>
                                <Text style={{color:'white', fontFamily:'Poppins-SemiBold', marginLeft:10}}>{s.name}</Text>
                            </View>
                            <View style={{display:'flex', flexDirection:'row', marginBottom:10}}>
                            <Icon name="weight-lifter" color="#B02E14" size={20}/>
                                <Text style={{marginLeft:10, fontFamily:'Poppins-Light', color:'#d3d3d3'}}>Sessions: <Text style={{color:'white', fontFamily:'Poppins-Regular'}}>{s.sessions}</Text></Text>
                            </View>
                            <View style={{display:'flex', flexDirection:'row', marginBottom:10}}>
                            <Icon name="calendar" color="#B02E14" size={20}/>
                                <Text style={{marginLeft:10, fontFamily:'Poppins-Light', color:'#d3d3d3'}}>Date: <Text style={{color:'white', fontFamily:'Poppins-Regular'}}>{s.date}</Text></Text>
                            </View>
                            <View style={{display:'flex', flexDirection:'row', marginBottom:10}}>
                            {
                                s.status ? <Icon name="check-all" color="green" size={20}/> : <Icon name="progress-close" color="#B02E14" size={20}/>
                            }
                                <Text style={{marginLeft:10, fontFamily:'Poppins-Light', color:'#d3d3d3'}}>Status: <Text style={{color:'white', fontFamily:'Poppins-Regular'}}>{s.statusText}</Text></Text>
                            </View>
                        </View>
                    ))
                }
            </View>
            </ScrollView>
        </View>
    )
}

export default Report