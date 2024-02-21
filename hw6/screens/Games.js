import { useState } from "react";
import { Modal } from "react-native";
import { View, Image, StyleSheet, Text, Touchable, TouchableOpacity } from "react-native";
import { Card } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";





export function Games(){

    const [modalOpen, setModalOpen] = useState(false); /* controls our correct choice modal */
    const [imageId, setImageId] = useState(0); /* stores our current ImageID */
    const [guess, setGuess] = useState(imageId); /* stores our user's current guess */
    const [score, setScore] = useState(100); /* stores our total score */
    const [gameCount, setGameCount] = useState(0); /* game timer */
    const [endGame, setEndGame] = useState(false); /* end game modal */
    const [finalScore, setFinalScore] = useState(100); /* stores final score */
    
    

    const data = [ {key : '1', name : 'Rock', image : require('../assets/rock.jpg')},
                   {key : '2', name : 'Robert Downey Jr', image : require('../assets/downey.jpg')},
                   {key : '3', name : 'Michelle Obama', image : require('../assets/michelle.jpg')},
                   {key : '4', name : 'Beyonce', image : require('../assets/beyonce.jpg')},
                   {key : '5', name : 'Bill Clinton', image : require('../assets/Bill.jpg')},
                   {key : '6', name : 'Mark Zuckerberg', image : require('../assets/mark.jpg')},
                   {key : '7', name : 'Morgan Freeman', image : require('../assets/morgan.jpg')},
                   {key : '8', name : 'Mike Tyson', image : require('../assets/mike.jpg')},

                   

    ];

  
    /* On press method checks if game is over if not it compares the index of our guess with the index of the image to check if correct answer */
    const handlePress = (index) => {

        checkEnd(data.length)
        setGuess(index);
        setGameCount(gameCount + 1);
        


        if (index === imageId){
            setImageId(Math.floor(Math.random() * data.length)); /* randomly select next image to show*/
            setModalOpen(true);
            
              

        }

        else {
            setScore(score-5);
            
            
        }


        
       
    
        

        
    }

    /* modal to show after each correct choice */

    modelButtonPress  = () => {
        checkEnd(data.length);
        setModalOpen(false);
    }

     /* modal to show at end of game */
    endGameButtonPress = () => {
        setScore(100);
        setEndGame(false);

    }

     /* function to check if game is over if so resets all varibles and shows ending screen */
    checkEnd = (num) => {
        if (gameCount === num) {
            setFinalScore(score);
            setGuess(imageId);
            setEndGame(true);
            setGameCount(0);
        }
    }

    

    return (
        <View style={styles.container}>

             {/* modal to show after each correct choice, default visibility is hidden, only shown if answer is correct */}
            <Modal visible={modalOpen} animationType='slide' presentationStyle="formSheet">
                <View style={styles.modalStyles}>
                    <Text style={styles.modalText}>Correct!</Text>
                    <Text>{gameCount}</Text>
                    <Ionicons name="checkmark-circle-outline" size={50} color = {'green'}></Ionicons>
                    <Text> Score : {score}</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={() => modelButtonPress()}>
                        <Text style={styles.modalButtton}>Continue!</Text>
                    </TouchableOpacity>
                </View>
            </Modal>

             {/* modal to show at end of game, default visibility is hidden, only shown if game is over */}
            <Modal visible={endGame} animationType='slide'>
                <View style={styles.modalStyles}>
                    <Text style={styles.modalText}>Game Over</Text>
                    <Text style={styles.modalText}>Final Score : {finalScore}</Text>
                </View>
                <View style={styles.buttonContainer}>
                        <TouchableOpacity onPress={() => endGameButtonPress()}>
                            <Text style={styles.modalButtton}>Play Again!</Text>
                        </TouchableOpacity>
                </View>
            </Modal>



            <Card>
                <Image source={(data[imageId].image)} style={styles.imageStyle}></Image>
            </Card>

             {/* maps out all names in our database using map function */}
            <View style={styles.buttonContainer}>
                <ScrollView showsVerticalScrollIndicator={false}>
                {data.map((item, idx) => { 
                    return (
                        <View key = {item.key}>
                            {/* When name is selected function is called to check choice */}
                            <TouchableOpacity onPress={() => handlePress(idx)}>
                                <Text style = {styles.buttonStyles}>{item.name}</Text>
                            </TouchableOpacity>
                        </View>
                    );
                })}
                </ScrollView>
            </View>
        </View>

        
    );
}

const styles = StyleSheet.create({

    container : {
        flex : 1,
        backgroundColor : '#3FC1C9',
        justifyContent : 'center',
        paddingVertical: 40,
    },

    imageStyle : {
        height : 250,
        width : 250,
        alignSelf : 'center',
    },

    textStyles : {
        alignSelf : 'center',
    },

    buttonContainer : {
        flex : 1,
        alignItems : 'center',
    },


    buttonStyles : {
        borderRadius : 5,
        borderWidth : 2,
        borderColor : 'white',
        alignSelf : 'center',
        paddingVertical : 10,
        paddingHorizontal: 10,
        marginVertical : 10,
    }, 

    modalStyles : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
    
    },

    modalButtton : {
        borderColor : 'black',
        borderRadius : 5,
        borderWidth : 3,
        backgroundColor : 'white',
        paddingHorizontal : 60,
        paddingVertical : 30,
        alignSelf : 'center',
        backgroundColor : 'pink',
        

    },

    modalText : {
        fontWeight : '500',
        fontSize : 50,
        color : 'pink',
    },
});