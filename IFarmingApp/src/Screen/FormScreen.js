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
} from "react-native";
import {
  addField,
  removeField,
  updateField,
} from "../Redux/Actions/formActions";
import { useSelector, useDispatch } from "react-redux";
import Icon from "react-native-vector-icons/Ionicons";
import Form from "../Components/Form";

const FormScreen = () => {
  const [formName, setFormName] = useState("");
  const { handleAddForm, handleRemoveForm, handleSaveForm } = useFormActions();
  const forms = useSelector((state) => state.form.forms);
  const dispatch = useDispatch();

  const handleCreateForm = useCallback(() => {
    if (formName.trim() !== "") {
      handleAddForm(formName);
      setFormName("");
    } else {
      Alert.alert("Error", "Por favor, ingresa un nombre para el formulario.");
    }
  }, [formName, handleAddForm]);

  return (
    <View style={styles.screen}>
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
      <ScrollView>
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
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    backgroundColor: "#F0F8FF",
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
  },
  icon: {
    marginLeft: 10,
  },
});

export default FormScreen;
