import { StyleSheet, Text, View , TextInput, TouchableOpacity} from 'react-native'
import React from 'react'

export default function Register() {
  return (
    <View>
     <TextInput style={styles.input}></TextInput>
      <TouchableOpacity>
        <Text style={styles.prompt}>Register</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    
        input:{
            borderWidth: 1,
            height: 40,
            width: 200,
            borderColor: 'lightgrey',
            padding: 8,
            margin: 10,
            borderBottomLeftRadius: 15,
            borderBottomRightRadius: 15,
            borderTopRightRadius: 15,
            borderTopLeftRadius: 15
          },
        
          prompt:{
            marginVertical: 10,
            alignSelf: 'center',
            fontSize: 17,
            paddingLeft: 10,
            color: 'white',
            backgroundColor: 'steelblue',
            height: 30,
            width: 80,
            marginTop: 10,
            borderBottomLeftRadius: 5,
            borderBottomRightRadius: 5,
            borderTopRightRadius: 5,
            borderTopLeftRadius: 5
          }
})