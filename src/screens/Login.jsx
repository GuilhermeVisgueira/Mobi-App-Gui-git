/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */


import {View, StyleSheet, Text} from 'react-native';


export default function Login() {
  

  return (
    
     
      <View>
       <Text style={styles.title}> Tela de login! </Text>
      </View>
    
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'

  },
  title: {
    fontSize: 22,
    fontWeight: 'bold'
  }

});




