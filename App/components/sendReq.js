/*
change devURL to whatever your webserver is run on
*/ 
import { View, Text } from 'react-native'
import React from 'react'
import axios from 'axios'
const devURL = "http://192.168.2.230"
const sendReq = (data) => {
    console.log(data);
    axios.post(`${devURL}/`, {
        params: {
            rgbVal: data
        }
    }).then((res) => {
        console.log(res.data);
    }).catch((err) =>{
        console.log(err);
    })
}

export default sendReq