import { View, TextInput, StyleSheet, Dimensions, TouchableOpacity, Text, Image, } from "react-native";
import { MaterialIcons } from '@expo/vector-icons'; 





export  function SignIn({navigation}) {

    
        
   


    return (
       
            <View style={styles.container}>

                <View style ={{backgroundColor: '#3FC1C9', flex : 1, alignItems: 'flex-end'}}>
                    <MaterialIcons name="account-circle" size={50} color="white" />
                </View>

                {/* Welcome Message */}
                <View style={styles.welcomeMessage}>
                    <Text style={styles.textStyle}>
                        WELCOME! 
                    </Text>
                    <Text style={styles.textStyle}>
                        Sign in below
                    </Text>
                </View>
                <View style={styles.formContainer}>
                    <TextInput 
                    placeholder={"eid"} 
                    placeholderTextColor={'black'}
                    textAlign = {'left'}
                    style={styles.input}/>

                    
                    <TextInput 
                    placeholder= {"password"}
                    placeholderTextColor={'black'}
                    secureTextEntry = {true}
                    style={styles.input}/>
                    
                    {/* Uses stack Navigator to navigate to courses screen once login button is selected */}
                    <TouchableOpacity onPress={() => navigation.navigate("Courses")}>
                        <View style={styles.buttonStyle}>
                            <Text>Log In</Text>
                        </View> 
                    </TouchableOpacity>
                    
                 </View> 
               

          
    </View> 

      

         
    );

    
}

const {height, width} = Dimensions.get('window')
const styles = StyleSheet.create({
 
    container: {
        backgroundColor: '#3FC1C9',
        paddingTop: 40,
        flex : 1,
        
        
        
    },

    welcomeMessage : {
        flex: 1,
        backgroundColor : '#3FC1C9',
        alignItems : 'center',
    },

    input: {
        borderColor : 'white',
        borderWidth: 2,
        borderRadius : 10,
        height : 35,
        width : width / 1.5,
        paddingHorizontal: 15,
        paddingVertical: 20,
        marginVertical: 15,
       
        

    },


    formContainer : {
      
        backgroundColor: '#3FC1C9',
        flex : 4,
        paddingVertical : 10,
        alignItems: 'center',
        justifyContent : 'center',
            

    },

    buttonStyle : {
       backgroundColor: 'white',
       borderRadius : 20,
       height: 40,
       alignItems: 'center',
       justifyContent: 'center',
       paddingVertical: 5,
       width: width / 1.5,
       marginVertical: 10,
       shadowColor: "#000000",
       shadowOffset: {
       width: 0,
       height: 13,
       },
       shadowOpacity:  0.24,
       shadowRadius: 14.86,
       elevation: 18
      
       

    },
    textStyle : {
        fontWeight : 'bold',
        fontSize : 45,
        
    },
  
 

});