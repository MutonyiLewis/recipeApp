import { Platform, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import RecommendationScreen from './screens/RecommendationScreen';
import 'expo-splash-screen'
import { SplashScreen } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';

const Stack = createNativeStackNavigator();

SplashScreen.preventAutoHideAsync().catch(() => {});

export default function App() {

  useEffect(() => {
    setTimeout(async () => {
      await SplashScreen.hideAsync();
    }, 2000)
  })
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <StatusBar style='auto' /> */}
        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: true, title:'My Food', headerTintColor: '#647403',
        headerTitleStyle: {
            fontWeight: 'bold',
          },}} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Recommendation" component={RecommendationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
