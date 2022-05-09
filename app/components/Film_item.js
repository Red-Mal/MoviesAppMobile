import React, { Component } from 'react'
import { TouchableOpacity, Text,View,Image,StyleSheet } from 'react-native'
export default class Film_item extends Component {
  render() {
    return (
    <TouchableOpacity style={styles.main_container} onPress={()=>this.props.navigation.navigate('description')}>
      <View>
          <Image style={styles.image}
         source={require('../assets/icon.png')}
          />
        </View>

        <View style={styles.container1}>
            <View style={styles.container2}>
                <Text style={styles.title_text}>title</Text>
                <Text style={styles.rating_text}>rating</Text>
            </View>
            <View style={styles.description_container}>
                <Text style={styles.description_text}>description</Text>
            </View>
            <View style={styles.Date_container}>
                <Text>date de sortie</Text>
            </View>
        </View>
      
      </TouchableOpacity>
    )
  }
}
const styles = StyleSheet.create({
    main_container: {
    flexDirection: 'row',
    },
    image:{
        width: 140,
        height: 150,
        margin: 10,
    },
    container1:{
        flex: 1,
        margin:5
    },
    container2:{
        flexDirection: 'row',
        flex:3
    },
    title_text:{
        fontWeight:'bold',
        flex:1

    },
    rating_text:{
        flex :0
    },
    description_container:{
        flex:6,
    },
    Date_container :{
        flex:1,
        textAlign: 'right'
    },
    description_text:{
        flex:0,
        textAlign:'center',
    },
    
  });
