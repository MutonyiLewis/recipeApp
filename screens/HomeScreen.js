import { KeyboardAvoidingView, Pressable, ScrollView, StyleSheet, Text, TextInput, View, Picker } from 'react-native'
import React, { useState } from 'react'
import { auth } from '../firebase'
import { useNavigation } from '@react-navigation/native'


const HomeScreen = () => {

    //Handle Navigation
    const navigation = useNavigation()

    //API Calling 
    const [query, setQuery] = useState('')
    const [location, setLocation] = useState('')
    const [bloodSugar, setBloodSugar] = useState('')
    const [recommendations, setRecommendations] = useState('')

    //Handle Submit to API
    const searchFood = async () => {
        try{
            const response = await fetch('https://recipesservice.azurewebsites.net/searchfood', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ query, location, bloodSugar: parseInt(bloodSugar) })
            })

            if(!response.ok) {
                throw new Error('Something went wrong fetching recommendation')
            }
            const responseData = await response.json()

            //Handle response data
            const recommendation = responseData.recommendations.filter(recipe => recipe !== null)
            console.log(recommendation)
            navigation.navigate('Recommendation', { recommendations: recommendation })
        }catch (error) {
            console.error(error)
        }
    }


    //Handle sign Out
    const handleSignOut = () => {
        auth.signOut()
        .then(() => {
            console.log('signed out')
            navigation.replace("Login")
        })
        .catch(error => alert(error.message))
    }



  return (
    <KeyboardAvoidingView
        style={styles.container}
        behavior="padding"
    >
        <View style={styles.inputContainer}>
            <TextInput
                placeholder='Enter your food Preference'
                style={styles.input}
                value={query}
                onChangeText={text => setQuery(text)}
            />
            <Picker
            style={styles.input}
            placeholder='Select your Location'
            location={location}
            onValueChange={(itemValue, itemIndex) =>
                setLocation(itemValue)}
            >
                <Picker.Item label="Nairobi" value="Nairobi"/>
                <Picker.Item label="Coast" value="Coast" />
                <Picker.Item label="Rift" value="Rift"/>
                <Picker.Item label="Western" value="Western" />
                <Picker.Item label="Eastern" value="Eastern"/>
                <Picker.Item label="Nyanza" value="Nyanza" />
                <Picker.Item label="Central" value="Central"/>
                <Picker.Item label="Northern" value="Northern" />
                <Picker.Item label="Southern" value="Southern"/>
                <Picker.Item label="Kenya" value="Kenya" />
            </Picker>
            <TextInput
                placeholder='Enter your blood sugar level from glycometer'
                style={styles.input}
                value={bloodSugar}
                onChangeText={text => setBloodSugar(text)}
                keyboardType='numeric'
            />


            <Pressable
            style={styles.button}
            onPress={searchFood}
            >
                <Text style={styles.buttonText}>Search food</Text>
            </Pressable>
        </View>

    <View style={styles.container}>
        <Text>Email: {auth.currentUser?.email}</Text>
        <Pressable style={styles.button} onPress={handleSignOut}>
            <Text style={styles.buttonText}>Sign Out</Text>
        </Pressable>
    </View>

    </KeyboardAvoidingView>
    
   
  )
}

export default HomeScreen

const styles = StyleSheet.create({
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
        marginTop: 50

    },
    input:{
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 10,
        fontSize: 16,
        fontWeight: 300
    },
    buttonContainer:{
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'space-between',
        flexWrap: 'wrap',
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 40,
    },
    button: {
        backgroundColor: '#030303',
        margin:10,
        width: 'auto',
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
