import React,{useState} from 'react';
import {
  View, Text, StyleSheet,
  TouchableOpacity,ActivityIndicator,
} from 'react-native';


const App = () => {


const [searchName,setSearchName]=useState('Search');
const [isLoading,setIsloading]=useState(false);


  const doSomething = async () => {
    const api = 'https://itunes.apple.com/search?term=Omer+adam';
    const respones = await fetch(api, {
      method: 'get'
    });
    const data = await respones.json();
    console.log(data);
  }

  return (
    <View style={myStyle.container}>
      <View style={{height:'30%',flexDirection:'row'}}>
       <View style={{width:'70%'}}>

         </View>
         <View style={{width:'30%'}}>
         {
        isLoading
       ?( <ActivityIndicator size='large' color='#17B890' />)
       :(
          <TouchableOpacity style={myStyle.btn} onPress={doSomething}>
            <Text style={myStyle.btntext}>{searchName}</Text>
          </TouchableOpacity>
        )
      }
     
        
         </View>
      </View>
      <View style={{height:'70%'}}>

      </View>
     
    </View>
  )
}



const myStyle = StyleSheet.create({
  btn: {
    width:'100%', paddingVertical: 18,
    alignItems: 'center', backgroundColor:'#17B890',
    borderRadius: 14,
  },

  btntext: { 
    color: '#DEE5E5',
     fontSize: 24, 
     fontWeight: '700'
    },

  container: {
    flex: 1,
    padding:30,
   alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#DEE5E5'
  }

});

export default App;
