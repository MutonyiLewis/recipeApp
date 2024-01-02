import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { auth } from '../firebase'
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () => {

    const navigation = useNavigation()

    const handleSignOut = () => {
        auth.signOut()
        .then(() => {
            console.log('signed out')
            navigation.replace("Login")
        })
        .catch(error => alert(error.message))
    }
  return (
    <View style={styles.container}>
        <Text>Email: {auth.currentUser?.email}</Text>
        <Pressable style={styles.button} onPress={handleSignOut}>
            <Text style={styles.buttonText}>Sign Out</Text>
        </Pressable>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        backgroundColor: '#030303',
        margin:10,
        width: 100,
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonText:{
        color: 'white',
        fontSize: 16,
        fontWeight: 600
    },
})