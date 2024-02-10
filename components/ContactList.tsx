import { ScrollView, StyleSheet, Text, View, Image } from 'react-native'
import React, { useState } from 'react'
import moment from 'moment'

const ContactList = () => {

    const employees = [
        {
            "uid": '1',
            "name": 'rohan',
            "status": 'i love my country',
            "src": 'https://thecultivatedmind.files.wordpress.com/2012/08/david-lieb.png'
        },
        {

            "uid": '2',
            "name": 'sohan',
            "status": "i love my country",
            "src": 'https://thecultivatedmind.files.wordpress.com/2012/08/david-lieb.png'

        },

        {


            "uid": '3',
            "name": 'Ravi',
            "status": "i love my country",
            "src": 'https://thecultivatedmind.files.wordpress.com/2012/08/david-lieb.png'

        },
        {

            "uid": '4',
            "name": 'Kavita',
            "status": "i love my country",
            "src": 'https://thecultivatedmind.files.wordpress.com/2012/08/david-lieb.png'

        },
        {

            "uid": '5',
            "name": 'sunita',
            "status": "i love my country",
            "src": 'https://thecultivatedmind.files.wordpress.com/2012/08/david-lieb.png'

        },
        {

            "uid": '6',
            "name": 'kashish',
            "status": "i love my country",
            "src": 'https://thecultivatedmind.files.wordpress.com/2012/08/david-lieb.png'

        },
        {

            "uid": '7',
            "name": 'khushi',
            "status": "i love my country",
            "src": 'https://thecultivatedmind.files.wordpress.com/2012/08/david-lieb.png'

        },
        {

            "uid": '8',
            "name": 'muskan',
            "status": "i love my country",
            "src": 'https://thecultivatedmind.files.wordpress.com/2012/08/david-lieb.png'

        },
        {

            "uid": '9',
            "name": 'priti',
            "status": "i love my country",
            "src": 'https://thecultivatedmind.files.wordpress.com/2012/08/david-lieb.png'

        },
        {

            "uid": '10',
            "name": 'rani',
            "status": "i love my country",
            "src": 'https://thecultivatedmind.files.wordpress.com/2012/08/david-lieb.png'

        },
    ]
    return (
        <View>
            <Text style={styles.heading}>Contact List</Text>
            <ScrollView scrollEnabled={true} style={{ marginHorizontal: 10 }} >
                {employees.map((e) => //e = {uid,name,title,source}
                (
                    <View key={e.uid} style={styles.contactDetails}>
                        <View style = {styles.contactDetails}>
                            <Image source={{ uri: e.src }} style={styles.image} />
                            <View>
                                <Text style={{fontWeight:'bold'}}>
                                    {e.name}
                                </Text>
                                <Text>
                                    {e.status}
                                </Text>
                            </View>
                        </View>
                        <View style={{flexDirection:'column-reverse'}}>
                            <Text>
                                 {moment().format('DD/MM/YYYY')}
                            </Text>
                        </View>
                    </View>
                )
                )}
            </ScrollView>
        </View>
    )
}

export default ContactList

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'grey',
        margin: 10,
        borderRadius: 10,
        height: 500,
    },

    heading: {
        color: 'white',
        fontSize: 30,
        textAlign: 'center',
        marginVertical: 20
    },
    contactDetails: {
        flexDirection: "row",
        justifyContent:'space-between',
        padding: 5,
        borderRadius: 10,
        marginBottom: 3,
        backgroundColor: 'white'
    },
    image: {
        height: 40,
        width: 40,
        borderRadius: 70 / 2,
        borderWidth: 2,
        marginRight:20,
        borderColor: "blue"
    }
})