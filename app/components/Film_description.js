import React, { Component } from 'react'
import { View ,Image, StyleSheet ,Text} from 'react-native'
import { HeartOutlined } from '@ant-design/icons';


export default class Film_description extends React.Component {
  render() {
    return (
      <View>
          <Image source={require('../assets/icon.png')} style={styles.image}  ></Image>
          <View>
            <Text style={styles.title_text}>title</Text> 
          </View>
          <HeartOutlined  style={{fontSize:'25px'}}/>
          <View>
            <Text> description</Text>
          </View>
          <View>
            <Text> date de sortie :dd/jj/aa</Text>
          </View>

      </View>
    )
  }
}
const styles=StyleSheet.create({
    image:{
       backgroundColor:'skyblue',
       margin:10,
       height:450,
       width:700,
       alignSelf:'center',
       flex:3

    },
    title_text:{
        fontWeight:'bold',
        flex:1,
        textAlign:'center',

    },
})
