import React from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  Text,
  Platform,
  Dimensions
} from "react-native";
import FormSelector from "./FieldSelector";

const { width} = Dimensions.get('window');

const Form = ({ form, addField, removeField, updateField }) => (
  <View style={styles.formContainer}>
    <TextInput
      style={styles.formNameInput}
      placeholder="Nombre del Formulario"
      value={form.name}
      editable={false}
    />
    {form.fields.map((field) => (
      <FormSelector
        key={field.id}
        field={field}
        updateField={(updatedField) =>
          updateField(form.id, field.id, updatedField)
        }
        removeField={() => removeField(form.id, field.id)}
      />
    ))}

    <TouchableOpacity
      style={styles.buttonDelete}
      onPress={() =>
        addField(form.id, { name: "", placeholder: "", type: "text" })
      }
    >
      <Text style={styles.text}> AGREGAR CAMPOS </Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  formContainer: {
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    backgroundColor: "#fff",
    ...Platform.select({
      web: {
        width: width > 1024 ? "50%" : width > 768 ? "60%" : "70%", 
        marginTop: width > 1024 ? 30 : width > 768 ? 40 : 30,
        marginHorizontal: width > 1024 ? "25%" : width > 768 ? "30%" : "15%",  
      }
    })
  
  },
  formNameInput: {
    padding: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
  },
  buttonDelete: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    padding: 5,
    borderWidth: 2,
    borderColor: "white",
    backgroundColor: "#bbd0f7",
    marginHorizontal: 2,
  },
  text: {
    fontSize: 14,
    fontWeight: "bold",
    color: "white",
  },
});
export default Form;
