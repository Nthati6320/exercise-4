import { StyleSheet, Text, View , Button} from 'react-native'
import React from 'react'

export default function Login() {
  return (
    <View>
      <View style={styles.Button}></View>
      <Button title='Login'/>
    </View>
  )
}

const styles = StyleSheet.create({
    Button:{
        marginTop:10
    }
})