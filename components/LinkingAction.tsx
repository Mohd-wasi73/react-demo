import { StyleSheet, Text, View, Image, TouchableOpacity, Linking, TouchableHighlight } from 'react-native'
import React from 'react'

const LinkingAction = () => {
    const redirectWeb = (webLink: string) => {
        Linking.openURL(webLink);
    }
    return (
        <View>
            <Text style={styles.heading}>Fancy Card</Text>

            <View style={styles.card}>

                <Image source={{
                    uri: "https://purepng.com/public/uploads/large/purepng.com-yellow-audi-caraudicars-961524670899johme.png"
                }} style={styles.box}></Image>

                <View>
                    <Text style={styles.title}>Audi A4</Text>
                    <Text style={styles.text}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam at nisi harum esse provident nihil nesciunt, ea architecto aliquid laboriosam magnam tempora sequi, voluptate ex deserunt illum beatae quae praesentium.</Text>
                    <View style={styles.socialLinksContainer}>

                        <TouchableOpacity style = {styles.buttons} onPress={() => redirectWeb("https://www.google.com")}>
                            <Text style={styles.socialLinks}>Read more..</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style = {styles.buttons} onPress={() => redirectWeb("https://www.google.com")}>
                            <Text style={styles.socialLinks}>Follow me..</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        </View>
    )
}

export default LinkingAction

const styles = StyleSheet.create({
    socialLinksContainer: {
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'space-evenly'
    },
    buttons:{
        backgroundColor:'black',
        marginBottom:10,
        borderRadius:5,
        paddingHorizontal:25,
        paddingVertical:10,
        
        elevation: 5,
        shadowOffset: {
            height: 1,
            width: 1
        },
        shadowColor: 'grey',
    },
    socialLinks:{
        color:'white',
        fontSize:10,
        fontWeight:'bold'
    },
    box: {
        height: 200,
        margin: 10
    },
    card: {
        elevation: 3,
        borderRadius: 5,
        shadowOffset: {
            height: 1,
            width: 1
        },
        shadowColor: 'white',
        marginBottom: 10,
        backgroundColor: 'white',
        margin: 10
    },
    heading: {
        color: 'white',
        fontSize: 30,
        textAlign: 'center',
        marginVertical: 20
    },
    text: {
        fontSize: 15,
        fontWeight: 'bold',
        padding: 10,
        textAlign: 'center',
        marginBottom: 10
    },
    title: {
        fontSize: 20,
        fontFamily: 'bold',
        textAlign: 'center'
    }
})