import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const RecommendationScreen = ({route}) => {

    const {recommendations} = route.params;
  return (
    <View style={{ marginTop: 20 }}>
        <Text>Title: {recommendations.title}</Text>
        <Text>Location: {recommendations.location}</Text>
        <Text>Ingredients: {recommendations.ingridients}</Text>
        <Text>Preparation: {recommendations.preparation}</Text>
        <Text>Carbohydrates(g): {recommendations['carbohydrates(g)']}</Text>
        <Text>Proteins(g): {recommendations['proteins(g)']}</Text>
        <Text>Fibre(g): {recommendations['fibre(g)']}</Text>
    </View>
  )
}

export default RecommendationScreen

const styles = StyleSheet.create({})