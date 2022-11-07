import React from 'react';
import {
  View,
  TextInput,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

// create a component
const App = () => {
  return (
    <View style={styles.container}>
        <View style={ styles.view1}>
         <Image source={require('./assets/tuition.png')} style = { styles.logo}/>
           

    


        </View>


    <View style={ styles.view2}>
    <Text style={styles.view2Text}>{'LOGIN FORM'}</Text>
    </View>  



        <View style={ styles.view3}>
        
          <TextInput
            style={styles.textInput}
            placeholder="Username"
            placeholderTextColor={'#999'}
          />
        
        </View>



        <View style={ styles.view4}>
        <TextInput
            style={styles.textInput}
            placeholder="Password"
            placeholderTextColor={'#999'}
            secureTextEntry={true}
          />
         
        </View>


        <View style= { styles.view5}>
        <TouchableOpacity style={styles.TouchableOpacity5a}>
          <Text style={styles.text5a}>{'Login'}</Text>
        </TouchableOpacity>
        </View>
            


        <View style= { styles.view6}>
           <Text style={styles.text6a}> {'forget you password?'}</Text>

        </View>

        <View style= { styles.view7}>
          <TouchableOpacity>
          <Text style={styles.text7a}> {'Dont have a Account?Sign Up'}</Text>
          </TouchableOpacity>
        </View>    


   </View>


);
};
 
const styles = StyleSheet.create ({
 container: {
  flex:1,
  backgroundColor: '#fff',

 },
 
 view1: {
  flex:0.1,
  backgroundColor:'#fff',
  alignItems:'flex-end',
   borderColor:'#000',
   //borderWidth: 1,
   //justifyContent:'center'
   paddingTop:10,
   paddingRight:10,
 

 },
 view2: {
  flex:0.2,
  backgroundColor:'#fff',
  alignContent:'center',
   borderColor:'#000000',
   //borderWidth: 1,

 },
 view3: {
  flex:0.1,
  backgroundColor:'#fff',
  alignContent:'center',
   borderColor:'#000000',
   borderWidth: 1,
   height: 60,
    width: '90%',
    marginTop: 2,
    borderRadius: 30,
    alignContent:'center',
    marginLeft:18,
    
 },
 view4: {
  flex:0.1,
  backgroundColor:'#fff',
  alignContent:'center',
   borderColor:'#000000',
  // borderWidth: 1,
   height: 60,
   width: '90%',
   marginTop: 10,
   borderWidth: 1,
   borderRadius: 30,
   marginLeft:18,

 },
 view5: {
  flex:0.1,
  backgroundColor:'#fff',
  alignContent:'center',
   borderColor:'#000000',
  // borderWidth: 1,
   justifyContent:'center',
   alignItems:'center',

 },
 view6: {
  flex:0.1,
  backgroundColor:'#fff',
  alignContent:'center',
   borderColor:'#000000',
   //borderWidth: 1,
   alignItems:'center',
 
 },
 view7: {
  flex:0.3,
  backgroundColor:'#fff',
  alignContent:'center',
   borderColor:'#000000',
   //borderWidth: 1,
   alignItems:'center',
 },

 //view1 fucking style
  logo:{
     height:'40%',
     width: '35%',
     borderBottomWidth:1,
     borderBottomColor:'#000',
   
  },

  //view 2 fucking style
  view2Text:{
    color: '#4c245c',
    textAlign: 'center',
    paddingTop: 50,
  fontFamily:"calabri",
    fontWeight: '700',
    fontSize:30,
  },
  // view 3and 4 fucking style
  textInput: {
    color:'#000',
    paddingTop:28,
    padding:30,
    paddingEnd:20,
  

  },

  //design 5a
   text5a:{

    color: "#fff",
    fontWeight:'500',
    fontSize:20,
   },

   //text 6a
   text6a:
   {
    color: "#000",
    fontWeight:'400',
    fontSize:17,
    marginTop:8,
   }, 
  TouchableOpacity5a:{
    height: 60,
    width: '70%',
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: '#83348b',
    borderColor: '#83348b',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: '500',
   
  },
  //text 7a fucking style
text7a:{
  color: '#4c245c',
  fontWeight:'500',
  fontSize:20,
  marginTop:20,
}


});
export default App;



