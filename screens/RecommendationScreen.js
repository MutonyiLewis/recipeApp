import { ScrollView, StyleSheet, Text, View, Image} from 'react-native'


const RecommendationScreen = ({route}) => {

  const {recommendations} = route.params;

  //Fetch image url based on title
  // const [imageUrl, setImageUrl] = useState('');
  // const recipeTitle = (recommendations.title); 
  // const unsplashAcessKey = 'INKFrtSn1GZZkE1AD92FjFHS0qJFXbUy2Mor84eAYK4'; 

  // const fetchRequest = () => {
  //   const data = fetch(
  //     `https://api.unsplash.com/search/photos?page=1&query=${recipeTitle}&client_id=${unsplashAcessKey}`
  //   );
  //   const dataJ = data.json();
  //   const result = dataJ.results[0];
  //   console.log(result);
  //   setImageUrl(result.urls.regular);
  // };
  // useEffect(() => {
  //   fetchRequest();
  // }, []);

  
  return (
    <View>
      {recommendations.map((recipe, index) => (
        <ScrollView key={index} style={styles.container}>
        <View style={styles.headerContainer}>
          <Image
          source={require('../assets/images/recommendation.jpg')}
          alt='Photo by Hari Nandakumar on Unsplash'
          style={styles.headerImage}
          />
          <View style={styles.headerContent}>
            <Text style={styles.titleText}>{recipe.title}</Text>
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
      </ScrollView>
      ))}
    </View>
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
    fontWeight: 'bold'
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