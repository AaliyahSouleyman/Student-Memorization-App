import { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from '@expo/vector-icons'; 



export function Home({navigation}) {

    
    //database holing our list of classes
    const courses = [
        
        {section: 'CMSC 475 001', key: '1'},
        {section: 'CMSC 475 002', key: '2'},
        {section: 'CMSC 508 001', key: '3'},


    ];

    //constant to store and set selected course
    const [selectedItem, setSelectedItem] = useState();


    //function to store the index of our selected course when it is pressed
    const handleOnPress = (index) => {
        setSelectedItem(index);

    }

    return (
        <View style={styles.container}>


            <TouchableOpacity style={{flex : 1}} onPress={() =>navigation.navigate('Settings') }>
                <View style ={{backgroundColor: '#3FC1C9',  alignItems: 'flex-end'}}>
                    <MaterialIcons name="account-circle" size={50} color="white" />
                </View>
            </TouchableOpacity>
            <View style={{flex : .5, alignItems : 'center', justifyContent : 'center'}}>
                <Text style={styles.textStyles}>Choose a course and section to begin memorizing!</Text>
            </View>

            {/*map funtction displays all of our items in courses data*/}
           <View style={styles.content}>
                { courses.map((item, idx) => {
                    return (
                        <View key = {item.key}>
                            {/*on press method stores the index of our selected*/}
                            <TouchableOpacity onPress={() => handleOnPress(idx)}>
                                {/*conditional statement changes the color of our selected item when it is clicked with the help of the handleOnPress function*/}
                                <Text style = {styles.items} backgroundColor = {idx === selectedItem ? 'lightgray' : 'white'}>{item.section}</Text>
                            </TouchableOpacity>
                        </View>
                    )
                })}
           </View> 

           {/*Start game button uses navigation to navigate to our games screen */}
           <TouchableOpacity onPress={() => navigation.navigate('Game')}>
                <View style={styles.button}>
                    <Text>Start Game</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#3FC1C9',
      paddingTop: 30,
      
    },

    items : {
        borderColor : 'white',
        borderWidth : 1,
        borderRadius: 6,
        paddingHorizontal: 10,
        marginBottom: 25,
        marginTop: 25,
        height: 100,
        width: '70%',
        alignSelf: 'center',
        backgroundColor : 'yellow',
        textAlign: 'center',
        shadowColor: "#000000",
        shadowOffset: {
        width: 0,
        height: 13,
        },
        shadowOpacity:  0.24,
        shadowRadius: 14.86,
        elevation: 18,
        
        

    },

    content : {
        flex : 6,
        backgroundColor : '#3FC1C9',
        paddingTop: 40,
       
    },

    textStyles : {
        fontWeight : '500',
        fontSize : 14,
        fontFamily : 'Verdana',
        marginVertical : 10,
        
        
    },

    button : {
        borderWidth : 2,
        borderColor : 'white',
        borderRadius : 5,
        alignSelf : 'center',
        marginBottom : 60,
        paddingHorizontal : 10,
        paddingVertical : 10,

    }
  

   
  });

