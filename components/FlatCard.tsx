import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen'

const FlatCard = () => {
    return (
        <View>
            <Text style={style.heading}>Flat Cards</Text>
            <View style = {{
            borderBottomColor: 'black',
            borderBottomWidth: StyleSheet.hairlineWidth,
            marginBottom:20}}/>
            <View style={style.container}>
                <View style={[style.box, style.redBox]}>
                    <Text>Red</Text>
                </View>
                <View style={[style.box, style.whiteBox]}>
                    <Text style={{ color: 'black' }}>White</Text>
                </View>
                <View style={[style.yellowBox, style.box]}>
                    <Text style={{ color: 'black' }}>Yellow</Text>
                </View>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        backgroundColor: 'grey',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    box: {
        width: 100,
        height: 100,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        margin:10,
        borderRadius:10   
    },
    heading: {
        color: 'white',
        fontSize: 30,
        textAlign: 'center',
        marginVertical:20
    },
    redBox: {
        backgroundColor: 'red'
    },
    whiteBox: {
        backgroundColor: 'white'
    },
    yellowBox: {
        backgroundColor: 'yellow'
    }
})
export default FlatCard