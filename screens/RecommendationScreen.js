import { ScrollView, StyleSheet, Text, View, Image} from 'react-native'

const capitalizeWords = (str) => {
  return str.replace(/\b\w/g, (char) => char.toUpperCase())
}
const RecommendationScreen = ({route}) => {

  const {recommendations} = route.params 
  
  // // Check if recommendations is defined and filter out undefined 
  // const validRecommendations = recommendations ? recommendations.filter(recipe => recipe !==  undefined) : [];

  
  return (
    <ScrollView style={styles.container}>
      {recommendations.map((recipe, index) => (
        <View key={index} >
        <View style={styles.headerContainer}>
          <Image
          source={require('../assets/images/recommendation.jpg')}
          alt='Photo by Hari Nandakumar on Unsplash'
          style={styles.headerImage}
          />
          <View style={styles.headerContent}>
            <Text style={styles.titleText}>{capitalizeWords(recipe.title)}</Text>
          </View>
        </View>
  
        <View style={styles.ingridientsContainer}>
          <Text style={styles.ingridientsTitle}>Ingredients</Text>
          <Text style={styles.ingridientsText}>{recipe.ingridients}</Text>
        </View>
  
        <View style={styles.preparationContainer}>
          <Text style={styles.preparationTitle}>Preparation</Text>
          <Text style={styles.preparationText}>{recipe.preparation}</Text>
        </View>
        <View style={styles.detailsContainer}>
        <Text style={styles.detailsText}>Location: {recipe.location} | </Text>
        <Text style={styles.detailsText}>Carbohydrates(g): {recipe['carbohydrates(g)']} | </Text>
        <Text style={styles.detailsText}>Proteins(g): {recipe['proteins(g)']} | </Text>
        <Text style={styles.detailsText}>Fibre(g): {recipe['fibre(g)']} | </Text>
        <Text style={styles.detailsText}>Average GI(%): {Math.round(parseFloat(recommendations['Average GI(%)']))} </Text>
        </View>
      </View>
      ))}
    </ScrollView>
  );
};
export default RecommendationScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#fff',
  },
  headerContainer:{
    backgroundColor: '#647403',
    flexDirection: 'column',
    alignItems:'center',
    padding: 20,
    borderRadius: 10,
    margin: 20
  },
  headerContent:{
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    padding: 20,
    borderRadius: 10
  },
  headerImage:{
    width: '100%',
    height: 250,
    marginBottom: 20,
    borderRadius: 10
  },
  titleText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  ingridientsContainer: {
    backgroundColor: '#647403',
    flexDirection: 'column',
    alignItems:'center',
    padding: 20,
    borderRadius: 10,
    margin: 20
  },
  ingridientsTitle:{
    color: '#fff',
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: 24,
  },
  ingridientsText:{
    fontSize: 18,
    color: '#fff'
  },
  preparationContainer: {
    backgroundColor: '#647403',
    flexDirection: 'column',
    alignItems:'center',
    padding: 20,
    borderRadius: 10,
    margin: 20
  },
  preparationTitle: {
    color: '#fff',
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: 24,
  },
  preparationText:{
    fontSize: 18,
    color: '#fff'
  },
  detailsContainer: {
    backgroundColor: '#647403',
    width: "95%",
    justifyContent:"space-around",
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems:'flex-start',
    margin: 20,
    borderRadius: 10,
  },
  detailsText: {
    fontSize: 20,
    color: '#fff'
  }


})