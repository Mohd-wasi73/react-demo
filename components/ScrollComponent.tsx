import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ScrollComponent = () => {
  return (
    <View>
      <Text style = {styles.heading}>Scroll Component</Text>
      <View style = {{
            borderBottomColor: 'black',
            borderBottomWidth: StyleSheet.hairlineWidth,
            marginBottom:20}}/>
      <ScrollView horizontal = {true} style = {styles.container}>
        <View style = {[styles.box,styles.redBox]}>
            <Text>item</Text>
        </View>
        <View style = {[styles.box,styles.whiteBox]}>
            <Text>item</Text>
        </View>
        <View style = {[styles.box,styles.yellowBox]}>
            <Text>item</Text>   
        </View>
        <View style = {[styles.box,styles.redBox]}>
            <Text>item</Text>
        </View>
        <View style = {[styles.box,styles.whiteBox]}>
            <Text>item</Text>
        </View>
        <View style = {[styles.box,styles.yellowBox]}>
            <Text>item</Text>
        </View>
        <View style = {[styles.box,styles.redBox]}>
            <Text>item</Text>
        </View>
      </ScrollView>
    </View>
  )
}

export default ScrollComponent

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'grey',
    },
    box: {
        width: 100,
        height: 100,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        margin:10,
        borderRadius:10,
        shadowOffset:{
            width:1,
            height:1,
        },
        shadowColor:"white"
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