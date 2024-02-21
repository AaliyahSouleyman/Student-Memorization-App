import { View, Text, Image, StyleSheet } from "react-native";
import { MaterialIcons } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 


export function Account() {

    return(
        
        <View style = {styles.container}>
           <View style={{flex: 1, alignItems: "center"}}>
                <MaterialIcons name="account-circle" size={70} color="white" />
           </View>
           {/* User Info */}
           <View style = {styles.infoContainer}>
                <Text style={styles.textStyles}>Username : souleymanam</Text>
                <Text style={styles.textStyles}>Password : ********</Text>
           </View>
           <View  style={styles.optionsContainer}>
                <View style={styles.optionsButtion}>
                    <Ionicons name="ios-settings-outline" size={30} color="black" />
                    <Text>Account Settings</Text>
                </View>
                <View style={styles.optionsButtion}>
                    <Ionicons name="notifications-outline" size={30}></Ionicons>
                    <Text>Notifications</Text>
                </View>
                      
           </View>
        </View>
    );
}

const styles = StyleSheet.create({

    container : {
        paddingTop: 50,
        flex : 1,
        backgroundColor : '#3FC1C9',
       
        

    },

    optionsContainer : {
        flex : 4,
        alignItems : 'flex-start',
        paddingHorizontal: 10,
        paddingVertical : 20,

    },

    optionsButtion : {
        height : 50,
        width : 300,
        borderRadius : 5,
        borderColor : 'white',
        borderWidth : 2,
        marginBottom : 15,
        paddingTop : 5,
        paddingLeft : 5,
        flexDirection : 'row',
        alignItems : 'center'
        
    },

    infoContainer : {
        width : '100%',
        height : 100,
        alignItems : 'center',
        borderBottomColor : 'white',
        borderBottomWidth : 3,
    
    },

    textStyles : {
        fontWeight : '500',
        fontSize : 15,
        fontFamily : 'Verdana',
        marginVertical : 10,
        
        
        
    },


});