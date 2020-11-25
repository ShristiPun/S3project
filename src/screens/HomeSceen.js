import React from 'react'

import { WebView } from 'react-native-webview';

const HomeScreen = ({route,navigation}) => {
  const {url}=route.params
    console.log(route)
    return (
  
            <WebView
        source={{
          uri: url
        }}
 
      />
        
       
    )
}


export default HomeScreen;
