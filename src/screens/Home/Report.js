import React, {useEffect, useState} from 'react';
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
import { BarChart } from "react-native-chart-kit";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch, useSelector} from 'react-redux'
import { excercise_reports } from '../../actions/excercise';

const Report = () => {
    const dispatch = useDispatch()
    const userReports = useSelector(state=>state.excercise.reports);
    const [comp,setComp] = useState([])
    const [uncomp, setUnComp] = useState([])
    const [status, setStatus] = useState(false)

    const data = {
        labels: ["Completed", "Not Completed"],
        datasets: [
          {
            data: [comp.length,uncomp.length]
          }
        ]
      };

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
        backgroundGradientFrom: "white",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "white",
        backgroundGradientToOpacity: 0.5,
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 2,
        useShadowColorFromDataset: false, // optional,
        fillShadowGradient:'white',
        fillShadowGradientOpacity:1,
      };

      const getReports = () => {
        dispatch(excercise_reports())
        getCompleted()
      }

      useEffect(() => {
          getReports()
      },[])

      const getCompleted = () => {
        var compExercise = [ ...comp]
        var unCompExercise = [...uncomp]
        userReports && userReports.map(s => {
            s.excersize && s.excersize.map(v => {
                if(v.isCompleted){
                    compExercise.push(v._id)
                }else if(!v.isCompleted){
                    unCompExercise.push(v._id)
                }
                // setCompleted(compExercise)

            })
         })
         setComp(compExercise)
         setUnComp(unCompExercise)
      }

    const getExcersieName = (val) => {
        return val.excersize[0].excersize.type
        
    }


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
                <Text style={{color:'white', fontFamily:'Poppins-SemiBold', fontSize:20, textAlign:'center', margin:10}}>WORKOUT CONTRIBUTION CHART</Text>
            </View>
            <View>
            {
                userReports && (
                    <BarChart
                        data={data}
                        fromZero={true}
                        width={Dimensions.get('window').width}
                        height={280}
                        yAxisLabel=""
                        chartConfig={chartConfig}
                        verticalLabelRotation={0}
                    />
                )
            }

            </View>
            {/* <View style={{display:'flex', flexDirection:'row'}}>
                <View style={{margin:8, padding:10, width:110, alignItems:'center', borderRadius:10, borderRightColor:'white', borderLeftColor:'#B02E14', borderWidth:1, borderTopColor:'white', borderBottomColor:'#B02E14'}}>
                    <Text style={{color:'white', fontFamily:'Poppins-Regular'}}>10 Days</Text>
                </View>
                <View style={{margin:8, padding:10, width:110, alignItems:'center', borderRadius:10, borderRightColor:'white', borderLeftColor:'#B02E14', borderWidth:1, borderTopColor:'white', borderBottomColor:'#B02E14'}}>
                    <Text style={{color:'white', fontFamily:'Poppins-Regular'}}>20 Days</Text>
                </View>
                <View style={{margin:8, padding:10, width:110, alignItems:'center', borderRadius:10, borderRightColor:'white', borderLeftColor:'#B02E14', borderWidth:1, borderTopColor:'white', borderBottomColor:'#B02E14'}}>
                    <Text style={{color:'white', fontFamily:'Poppins-Regular'}}>1 Month</Text>
                </View>
            </View> */}
            <View>
                {
                    userReports && userReports.map(s => (
                        <View style={{backgroundColor:'#303030', margin:30, padding:10, borderRadius:10, elevation:5}}>
                            <View style={{display:'flex', flexDirection:'row', marginBottom:10, justifyContent:'center',  alignItems:'center'}}>
                            <Icon name="dumbbell" color="#B02E14" size={20}/>
                                <Text style={{color:'white', fontFamily:'Poppins-SemiBold', marginLeft:10}}>{getExcersieName(s)}</Text>
                            </View>
                            <View style={{display:'flex', flexDirection:'row', marginBottom:10}}>
                            <Icon name="weight-lifter" color="#B02E14" size={20}/>
                                <Text style={{marginLeft:10, fontFamily:'Poppins-Light', color:'#d3d3d3'}}>Sessions: <Text style={{color:'white', fontFamily:'Poppins-Regular'}}>{s.excersize.length}</Text></Text>
                            </View>
                            <View style={{display:'flex', flexDirection:'row', marginBottom:10}}>
                            <Icon name="calendar" color="#B02E14" size={20}/>
                                <Text style={{marginLeft:10, fontFamily:'Poppins-Light', color:'#d3d3d3'}}>Week: <Text style={{color:'white', fontFamily:'Poppins-Regular'}}>{s.week} - {s.day.toUpperCase()}</Text></Text>
                            </View>
                            <View style={{display:'flex', flexDirection:'row', marginBottom:10}}>
                            {
                                s.is_completed ? <Icon name="check-all" color="green" size={20}/> : <Icon name="progress-close" color="#B02E14" size={20}/>
                            }
                                <Text style={{marginLeft:10, fontFamily:'Poppins-Light', color:'#d3d3d3'}}>Status: <Text style={{color:s.is_completed ? 'green' : '#B02E14' , fontFamily:'Poppins-SemiBold'}}>{s.is_completed ? 'Completed' : 'Not Completed'}</Text></Text>
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