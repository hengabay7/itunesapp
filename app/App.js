import React from 'react';
import {
  View, Text, StyleSheet,
  TouchableOpacity
} from 'react-native';


const App = () => {


  const doSomething = async () => {
    const api = 'https://itunes.apple.com/search?term=metalica';
    const respones = await fetch(api, {
      method: 'get'
    });
    const data = await respones.json();
    console.log(data);
  }

  return (
    <View style={myStyle.container}>
      <TouchableOpacity style={myStyle.btn} onPress={doSomething}>
        <Text style={myStyle.btntext}>clike me</Text>
      </TouchableOpacity>
    </View>
  )
}



const myStyle = StyleSheet.create({
  btn: {
    width: '100%', paddingVertical: 14,
    alignContent: 'center', backgroundColor: '#17B890',
    borderRadius: 14
  },

  btntext: { color: '#DEE5E5', fontSize: 22, fontWeight: '700' },

  container: {
    flex: 1,
    alignitmes: 'center',
    justifyContent: 'center',
    backgroundColor: '#DEE5E5'
  }

});

export default App;
