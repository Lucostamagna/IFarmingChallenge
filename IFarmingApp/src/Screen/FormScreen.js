import React, { useState, useCallback } from "react";
import {
  View,
  Text,
  FlatList,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
  Platform,
  Dimensions,
} from "react-native";
import {
  addField,
  addForm,
  removeField,
  updateField,
  saveForm,
  removeForm,
} from "../Redux/Actions/formActions";
import { useSelector, useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";
import Form from "../Components/Form";

const { width,height } = Dimensions.get("window");

const FormScreen = () => {
  const [formName, setFormName] = useState("");
  const forms = useSelector((state) => state.form.forms);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleSaveForm = useCallback(
    (formId) => {
      dispatch(saveForm(formId));
      setFormName("");
      Alert.alert("Éxito", "Formulario guardado exitosamente.", [
        {
          text: "OK",
          onPress: () => {
            dispatch(removeForm(formId));
          },
        },
      ]);
    },
    [dispatch]
  );
  const handleCreateForm = useCallback(() => {
    if (formName.trim() !== "") {
      dispatch(addForm(formName));
      setFormName("");
    } else {
      Alert.alert("Error", "Por favor, ingresa un nombre para el formulario.");
    }
  }, [dispatch, formName]);

  const handleRemoveForm = useCallback(
    (formId) => {
      Alert.alert(
        "Eliminar formulario",
        "¿Estás seguro de que deseas eliminar este formulario?",
        [
          {
            text: "Cancelar",
            style: "cancel",
          },
          {
            text: "OK",
            onPress: () => {
              dispatch(removeForm(formId));
            },
          },
        ]
      );
    },
    [dispatch]
  );

  const navigateToForm = () => {
    navigation.navigate("SavedForm");
  };
  return (
    <View style={styles.screen}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.container}>
          <TextInput
            value={formName}
            onChangeText={setFormName}
            placeholder="Nombre del formulario"
            style={styles.input}
          />
          <TouchableOpacity style={styles.button} onPress={handleCreateForm}>
            <Text style={styles.buttonText}>Crear</Text>
            <Icon
              name="arrow-forward"
              size={20}
              color="#fff"
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>

        <FlatList
          data={forms}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View>
              <Form
                form={item}
                addField={(formId, field) => dispatch(addField(formId, field))}
                removeField={(formId, fieldId) =>
                  dispatch(removeField(formId, fieldId))
                }
                updateField={(formId, fieldId, field) =>
                  dispatch(updateField(formId, fieldId, field))
                }
              />

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  marginBottom: "20%",
                }}
              >
                <TouchableOpacity
                  style={styles.buttonSave}
                  onPress={() => handleSaveForm(item.id)}
                >
                  <Text style={styles.saveText}> Guardar Formulario</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.deleteText}
                  onPress={() => handleRemoveForm(item.id)}
                >
                  <Text style={styles.saveText}> Eliminar formulario</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        />

        {Platform.OS === "web" && (
          <TouchableOpacity onPress={navigateToForm} style={styles.roundButton}>
            <View style={{ flexDirection: "row", marginBottom: 30 }}>
              <Text style={styles.textForm}> Formularios guardados </Text>
              <Icon name="arrow-forward" size={24} color="black" />
            </View>
          </TouchableOpacity>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    
   
    padding: 10,
    backgroundColor: "#F0F8FF",
    ...Platform.select({
      ios: {
        flex: 1,
      },
      android: {
        flex: 1,
      },
      web: {
        height: height > 1024 ? "80%" : width > 768 ? "60%" : "70%",
     
      },
    }),
  },
  container: {
    borderWidth: 2,
    borderColor: "#6495ed",
    borderRadius: 10,
    backgroundColor: "white",
    marginTop: "10%",
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
    ...Platform.select({
      web: {
        width: width > 1024 ? "50%" : width > 768 ? "60%" : "70%",
        marginTop: width > 1024 ? 30 : width > 768 ? 40 : 30,
        marginHorizontal: width > 1024 ? "25%" : width > 768 ? "30%" : "15%",
      },
    }),
  },
  input: {
    width: "100%",
    padding: 10,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
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
  roundButton: {
    position: "absolute",
    bottom: 30,
    right: 20,
  },
  saveText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "black",
  },
  buttonSave: {
    width: "45%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    padding: 5,
    borderWidth: 1,
    borderColor: "green",
    marginHorizontal: 2,
    ...Platform.select({
      web: {
        width: width > 1024 ? "20%" : width > 768 ? "30%" : "25%",
        marginTop: width > 1024 ? 50 : width > 768 ? 40 : 30,
      },
    }),
  },
  deleteText: {
    width: "45%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    padding: 5,
    borderWidth: 1,
    borderColor: "red",
    marginHorizontal: 2,
    ...Platform.select({
      web: {
        width: width > 1024 ? "20%" : width > 768 ? "30%" : "25%",
        marginTop: width > 1024 ? 50 : width > 768 ? 40 : 30,
      },
    }),
  },
  icon: {
    marginLeft: 10,
  },
  textForm: {
    fontSize: 15,
    fontWeight: "bold",
  },
  scrollContent:{
    flexGrow: 1,
  }
});

export default FormScreen;
