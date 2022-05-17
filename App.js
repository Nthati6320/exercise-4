import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , TextInput, Button, TouchableOpacity} from 'react-native';
import Register from './Register';
import Login from './Login';

export default function App() {

  if(registered === true){
    setRegistered(false);
  }
 
  else{
    setRegistered(true);
  }
  
 
  return (
    <View style={styles.container}>
      <Text style={{color: 'white', fontWeight: '700', fontSize: 17}}>Welcome</Text>
      <Text  style={{color: 'white', fontWeight: '700', fontSize: 17}}>Enter your name</Text>
      <Register/>
      <Login/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'deepskyblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  

});
