import React from 'react'
import { View, Text,StyleSheet,Image } from 'react-native'

const Imagedetail =props => {
    return (
            <View>
                
                <Image source={props.imageSource}
                />
               <Text>{props.title}</Text>
    
                </View>
    );
    
};

const styles=StyleSheet.create({});

export default Imagedetail;
