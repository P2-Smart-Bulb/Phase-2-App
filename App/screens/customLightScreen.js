import { hex2Rgb } from 'colorsys';
import { Component, useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import ColorPicker from 'react-native-wheel-color-picker'
import sendReq from '../components/sendReq';
const App = () =>  {
    const [colors, setColors] =  useState({});
    const [isLive, setLive] = useState(0);
    const [liveCol, setCol] = useState('#fff');
    const swapLive= () => {
        if(!isLive){
            setCol('#fff')
        }else{
            setCol('green')
        }
        }
	return (
		<View style ={{alignItems: 'center'}}>
            <View style = {{height: 300, width: 300, }}>
			<ColorPicker
            onColorChange={(Color) => {
                setColors(hex2Rgb(Color));
                if(!isLive){
                    sendReq(colors);
                }
            }}
            swatches= {false}
            sliderHidden = {true}
			/>
            </View>
            <TouchableOpacity  style ={{marginVertical: 40, justifyContent: 'center', alignItems: 'center'}} onPress = {() =>{if(isLive){
                sendReq(colors);
            }}}>
            <View style ={{width: 200, height: 60, backgroundColor: "#509950", borderRadius: 40, justifyContent: 'center', alignItems: 'center'}}> 
            <Text style = {{fontSize: 20, fontWeight: 'bold', color: 'white'}}>Submit</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {setLive(!isLive)
            swapLive();
            console.log(isLive)
            }}>
                <View style ={{flexDirection: 'row', marginTop: -30, alignItems: 'center',}}><View style ={{width:12, height: 12, borderWidth: 1, marginHorizontal: 5. , backgroundColor: liveCol}}/><Text>Live Update</Text></View>
                </TouchableOpacity>
		</View>
	)
	}

export default App