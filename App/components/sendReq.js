import { View, Text } from 'react-native'
import React from 'react'
import axios from 'axios'
const devURL = "localhost"
const sendReq = (data) => {
    axios.post('/', {
        params: {
            rgbVal: data
        }
    }).then((res) => {
        console.log(res);
    }).catch((err) =>{
        console.log(err);
    })
}

export default sendReq