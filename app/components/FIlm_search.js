import React, { Component, useState } from 'react'
import { View,Button, TextInput, StyleSheet } from 'react-native'

export default class FIlm_search extends Component {
    
        state={
            SEARCH:''
        }
        setText=(text)=>{this.setState({SEARCH:text})}
    
  render() {
    return (
      <View>
          <TextInput placeholder='search' onChange={this.setText} style={styles.text_input}></TextInput>
            <View style={styles.text_input}>
                <Button title='search' onPress={()=>this.props.navigation.navigate('Film_item')}> </Button>
            </View>
      </View>
    )
  }
}
const styles =StyleSheet.create({
text_input:{
    width:300,
    alignSelf:'center',
    height:40,
    },
  
})
