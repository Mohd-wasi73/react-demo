
import React from 'react'
import {
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    ScrollView
} from 'react-native'
import ContactList from './components/ContactList'
import FancyCard from './components/FancyCard'
import FlatCard from './components/FlatCard'
import LinkingAction from './components/LinkingAction'
import ScrollComponent from './components/ScrollComponent'
const App = () => {
    return (
        <SafeAreaView style = {{backgroundColor:'grey'}}>
           <ScrollView>
               <FlatCard/>
               <ScrollComponent/>
               <FancyCard/>
               <LinkingAction/>
               <ContactList/>
           </ScrollView>
        </SafeAreaView>
    )
}

export default App