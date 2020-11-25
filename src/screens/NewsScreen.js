import React,{useEffect,useState} from 'react'
import { View, Text,StyleSheet,TouchableOpacity,Header } from 'react-native'
import ImageDetail from '../components/ImageDetail'
import * as rssParser from 'react-native-rss-parser';
import { FlatList } from 'react-native-gesture-handler';



const NewsScreen = ({navigation}) => {
    const [news,setNews]=useState([])
        useEffect(()=>{
        fetch('https://ratopati.com/rss').then((response) => response.text())
        .then((responseData) => rssParser.parse(responseData))
        .then((rss) => {
            console.log(rss);
            setNews(rss.items)
          })
        
    },[])
    return  (
    <View>
        <Text style={styles.textStyle}>  News </Text>
        <FlatList
        data={news}
        renderItem={({item})=>{
            return(
                <TouchableOpacity onPress={()=>{
                    navigation.navigate('Home',{url:item.id})
                }}>
 <View style={{flexDirection:"column"}}>
        <View style={{flexDirection:'column'}}>
        <Text style={styles.subHeaderStyle}>  {item.title} </Text>
      <View style={styles.container} >
      <ImageDetail  imageSource={require('../../assets/forest.jpg')}/>
 </View> 

            <Text style={styles.textDescription} numberOfLines={3}> {item.description}</Text>
        </View>
        
        </View>
                </TouchableOpacity>
            )
        }}
        />
       
     </View>
    );
};
const styles=StyleSheet.create({
    textStyle:{
        fontSize:30,
        fontWeight:"bold",
        color: '#fff',
        backgroundColor:'red',
        textAlign:"center",
        height:40

    },
    subHeaderStyle:{
        fontSize:20,
        marginLeft:5,
        textAlign:"justify"
    },
    textDescription:{
        fontSize:12,
        marginLeft:10,
    
    },
    container:{
        justifyContent: 'center',
        alignItems: 'center',
       
      }
});
export default NewsScreen;
