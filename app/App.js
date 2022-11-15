import React,{useState} from 'react';
import {
  View, Text, StyleSheet,
  TouchableOpacity,ActivityIndicator,TextInput,FlatList} from 'react-native';


const App = () => {


const [searchName,setSearchName]=useState('');
const [isLoading,setIsloading]=useState(false);
const [resulats,setResulats]=useState({});


  const doSomething = async () => {
    setIsloading(true);
    const api = `https://itunes.apple.com/search?term=${searchName}&entity=muisc`;
    const respones = await fetch(api, {
      method: 'get'
    });
    const data = await respones.json();
    setResulats(data.resulats);
    setIsloading(false);
  }

  //console.log(resulats);

  return (
    <View style={myStyle.container}>
      <View style={{height:'30%',flexDirection:'row'}}>
       <View style={{width:'70%'}}>
       <TextInput 
       style={{
        width:'98%',
        borderRadius:6,
        paddingVertical:10,
        backgroundColor:'#fff'
       }}
       value={searchName}
       onChangeText={x=>{setSearchName(x)}}
       autoCapitalize='none'
       keyboardType="default"
       placeholder="Type search"
       secureTextEntry={false}
       />
         </View>
         <View style={{width:'30%'}}>
         {
        isLoading
       ?( <ActivityIndicator size='large' color='#17B890' />)
       :(
          <TouchableOpacity style={myStyle.btn} onPress={doSomething}>
            <Text style={myStyle.btntext}>{"Search"}</Text>
          </TouchableOpacity>
        )
      }
     
        
         </View>
      </View>
      <View style={{height:'70%'}}>

      {     
         <FlatList 
         data={resulats}
         keyExtractor={item=>item.trakId}
         renderItem={itemRow=>
         <View>
         <Text>{itemRow.item}</Text>
         </View>}
         />     
      }
      
      </View>
    </View>
  )
}



const myStyle = StyleSheet.create({
  btn: {
    width:'98%', paddingVertical: 18,
    alignItems: 'center', backgroundColor:'#17B890',
    borderRadius: 6,
  },

  btntext: { 
     color: '#DEE5E5',
     fontSize: 22, 
     fontWeight: '700'
    },

  container: {
    flex: 1,
    padding:30,
    backgroundColor: '#DEE5E5'
  }

});

export default App;
