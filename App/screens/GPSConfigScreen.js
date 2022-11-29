import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import timeZones from '../components/timeZones'
import sendReq from '../components/sendReq'
import { hex2Rgb } from 'colorsys';
const GPSConfigScreen = () => {
    const [curZone, setCurZone] = useState('EST')
  return (
    <View style = {{flex: 1, backgroundColor: '#fff'}}>
        <View style = {{justifyContent: 'center', alignItems: 'center'}}>
            <ScrollView contentContainerStyle={{flexDirection: 'row', flexWrap: 'wrap', marginVertical: 30, justifyContent: 'center'}}>{TimeZoneBar(curZone, setCurZone)}</ScrollView>
            <View style ={{justifyContent: 'center', alignItems: 'center', position: 'relative'}}>
                <View style ={{flexDirection:'row-reverse', position: 'absolute'}}>
                    {mapShade(curZone)}
                </View>
                <Image source = {require('../assets\\world-map-clipart-black-and-white-10.jpg')} style = {{height: 200, width:400, zIndex: 0,}}/>
            </View>
        </View>
    </View>
  )
}

export default GPSConfigScreen
const mapShade = (curZone) =>{
    const timeZone = timeZones();
    var bgColor;
    return timeZone.map((element, index) => {
        if(curZone == element.Desig){
            bgColor = 0.4
        }else{
            bgColor = 0
        }
        return(
            
        <View style ={{width: 16, height: 200, backgroundColor: '#000', opacity: bgColor, zIndex: 1}}/>

        )
    })

}
function TimeZoneBar(curZone, setCurZone) {
    const update = (index) =>{
        console.log(index);
        if(index < -4 && index> -8){
            sendReq(hex2Rgb("#cc8d18"))
            console.log(hex2Rgb("#cc8d18"))
        }if(index < 0 && index >8){
            sendReq(hex2Rgb("#d8a341"))
            console.log(hex2Rgb("#d8a341"))
        }
        if(index > 0 && index< 4){
            sendReq(hex2Rgb("#fcfcfc"))
            console.log(hex2Rgb("#fcfcfc"))
        }if(index >= 4 && index < 8){
            sendReq(hex2Rgb("#d8a341"))
            console.log(hex2Rgb("#d8a341"))
        }if(index > 8){
            sendReq(hex2Rgb("#cc8d18"))
            console.log(hex2Rgb("#cc8d18"))
        }if(index < -8){
            sendReq(hex2Rgb("#847252"))
            console.log(hex2Rgb("#847252"))
        }
    }
    const timeZone = timeZones();
    var curColor = '';
    return timeZone.map((element, index) => {
        if(element.Desig == curZone){
            curColor = 'green'
        }else{
            curColor = 'gray'
        }
    return (<TouchableOpacity onPress={() => {setCurZone(element.Desig); update(index-12)}} style = {{height: 28, width: 70, backgroundColor: curColor, marginRight: 3,marginBottom: 3,borderRadius:10,shadowOffset:{width:0,height:2},shadowRadius:0.5, elevation:5, shadowOpacity:0.25, shadowColor:'blue' , justifyContent: 'center', alignItems: 'center'}}>
        <Text style ={{color: 'white'}}>{element.Desig}</Text>
    </TouchableOpacity>);
    })
}