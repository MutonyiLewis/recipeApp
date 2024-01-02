import { ImageBackground, KeyboardAvoidingView, Pressable, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import {auth} from '../firebase'
import { useNavigation } from '@react-navigation/core';


const LoginScreen = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigation = useNavigation()

    useEffect(() => {
        //check if user is already logged in
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user){
                navigation.replace("Home")

                // Start timeout for logout
                const timeoutId = setTimeout(() => {
                    auth.signOut(); // Log out the user
                }, 14400000); // Replace TIME_TO_LOGOUT with the desired timeout in milliseconds

                // Clear timeout on unmount
                return () => clearTimeout(timeoutId);
            } 
        })

        return unsubscribe
    }, [])


    const handleSignUp = () => {
        const auth = getAuth()
        createUserWithEmailAndPassword(auth, email, password)
            .then(userCredentials => {
                const user = userCredentials.user;
                console.log("New User: ", user);
                alert("You are registered successfully. Press the login button")
            })
            .catch(error => alert(error.message))
    }

    const handleSignIn = () => {
        const auth = getAuth()
        signInWithEmailAndPassword(auth, email, password)
            .then(userCredentials => {
                //Signed in 
                const user = userCredentials.user;
                console.log('Logged in as: ', user.email)
            })
            .catch ((error) => {
                alert(error.message)
            });
    }

  return (
    <ImageBackground
    source={require('../assets/images/auth.jpg')}
    style={styles.backgroundImage}
    alt='Photo by Lily Banse'

    >
    <KeyboardAvoidingView
    style={styles.container}
    behavior="padding"
    >
      <View style={styles.inputContainer}>
       <Text style={{
            color: '#fff', fontSize: 35, fontWeight: 500,
        }}>
            Login
        </Text>
        <TextInput
            placeholder="Email"
            value={ email }
            onChangeText={text => setEmail(text)}
            keyboardType='email-address'
            style={styles.input}
        />
        <TextInput
            placeholder="Password"
            value={ password }
            onChangeText={text => setPassword(text)}
            keyboardType='email-address'
            style={styles.input}
            secureTextEntry
        />

       <View style={styles.buttonContainer}>
        <Pressable
            onPress={handleSignIn}
            style={styles.button}
        >
            <Text style={styles.buttonText}>Login</Text>
        </Pressable>
        <Pressable
            onPress={handleSignUp}
            style={[styles.button, styles.buttonOutline]}
        >
            <Text style={styles.buttonOutlineText}>Register</Text>
        </Pressable>
      </View>
      </View>
      
    </KeyboardAvoidingView>
    </ImageBackground>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    backgroundImage:{
        opacity: 0.9, // Set opacity to 60%
        flex: 1, // Ensure the image covers the entire view
        resizeMode: 'cover',
        zIndex: -1
    },
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1
    },
    inputContainer:{
        width: '80%',
        padding: 50,
        borderRadius: 35,
        borderColor: 'green',
        backgroundColor: '#647403',

    },
    input:{
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5
    },
    buttonContainer:{
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'space-between',
        flexWrap: 'wrap',
        //width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 40,
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
    buttonOutline: {
        //flex: 2,
        borderColor: '#030303',
        backgroundColor: 'white',
        borderWidth: 2,
        //flex:1,
        padding: 15,
    },
    buttonOutlineText: {
        color:'black',
        fontWeight: 600,
        fontSize: 16
    }
})