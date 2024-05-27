// SavedFormScreen.js
import React from "react";
import {
  View,
  Text,
  FlatList,
  Button,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Platform,
  Dimensions
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { removeForm } from "../Redux/Actions/formActions";
const { width, height } = Dimensions.get('window');
const SavedFormsScreen = () => {
  const savedForms = useSelector((state) => state.form.savedForms);
 
  const dispatch = useDispatch();

  const handleRemoveForm = (formId) => {
    dispatch(removeForm(formId));
  };

  const confirmDeleteForm = (formId) => {
    Alert.alert(
      "Eliminar formulario",
      "¿Estás seguro de que deseas eliminar este formulario?",
      [
        { text: "Cancelar", style: "cancel" },
        { text: "OK", onPress: () => handleRemoveForm(formId) },
      ]
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={Object.values(savedForms)}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.formContainer}>
            <Text style={styles.formName}>{item.name}</Text>
            {/* <TouchableOpacity  style={styles.button} onPress={() => navigation.navigate('FormDetails', { formId: item.id })}>
<Text style={styles.buttonText}> Ver Detalle </Text>
            </TouchableOpacity> */}
            <TouchableOpacity
              style={styles.button}
              onPress={() => confirmDeleteForm(item.id)}
            >
              <Text style={styles.buttonText}>Eliminar</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  formContainer: {
    marginBottom: 20,
    borderRadius: 10,
    backgroundColor: "white",
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#6495ed",
    ...Platform.select({
      web: {
        width: width > 1024 ? "50%" : width > 768 ? "60%" : "70%", 
        marginTop: width > 1024 ? 50 : width > 768 ? 40 : 30,
        marginHorizontal: width > 1024 ? "25%" : width > 768 ? "30%" : "15%",  
      }
    })
  
  },
  formName: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  button: {
    justifyContent: "center",
    borderRadius: 10,
    padding: 5,
    backgroundColor: "#bbd0f7",
    marginLeft: "70%",
  },
  buttonText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#fff",
  },
});

export default SavedFormsScreen;
