import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'
import { useNavigation } from "@react-navigation/native";

const { width: screenWidth } = Dimensions.get("window");

const OnBoardingScreen = () => {
  const navigation = useNavigation();
  const carouselItems = [
    {
      id: "1",
      image: require("../../assets/formul.jpg"),
      title: "¿Qué es Form App?",
      description:
        "Con From App podrás crear tus propios formularios de una manera MUY sencilla",
    },
    {
      id: "2",
      image: require("../../assets/formularioo.jpg"),
      title: "¿Cómo funciona?",
      description:
        "Solo elige un nombre para tus formulario, los campos que necesites capturas, compartelo y LISTO.",
    },
  
   
  ];

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={item.image} style={styles.itemImage} />
      <View>
        <Text style={styles.itemTitle}> {item.title}</Text>
        <Text style={styles.itemDescription}>{item.description}</Text>
      </View>
    </View>
  );
  const navigateToLogin = () => {
    navigation.navigate('Login');
  };
  return (
    <View>
      <View style={styles.container}>
        <FlatList
          data={carouselItems}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          snapToAlignment="center"
          decelerationRate="fast"
          snapToInterval={screenWidth * 0.8}
        />
      </View>

      
      <TouchableOpacity onPress={navigateToLogin} style={styles.roundButton}>
        <Icon name="arrow-forward" size={24} color="black" />
      </TouchableOpacity>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop:screenWidth * 0.3,
    marginLeft:22
  },
  gradient: {
    flex: 1,
  },
  itemContainer: {
    marginTop: screenWidth * 0.2,
    borderRadius: 10,
    width: screenWidth * 0.8,
    height: screenWidth * 0.8,
    marginHorizontal: 9,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",

  },
  itemTitle: {
    fontSize: 30,
    fontWeight: "bold",
    color: "black",
    marginBottom: 20,
    textAlign: "center",
  },
  itemImage: {
    width: "100%",
    height: 250,
    borderRadius: 10,
    marginBottom: 10,
  },
  itemDescription: {
    fontSize: 18,
    textAlign: "center",
    color: "black",
    fontStyle: 'italic',
    textAlign: 'justify'
  },
  roundButton: {
    position: 'absolute',
    bottom: 30,
    right: 20,
    width: 65,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 5,
  },
  buttonText: {
    fontSize: 18,
    color: '#c30752',
    fontWeight: 'bold',
  },
});

export default OnBoardingScreen;
