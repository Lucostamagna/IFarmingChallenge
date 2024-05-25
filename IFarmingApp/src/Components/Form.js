import React from "react";
import { View, TextInput, Button,StyleSheet } from "react-native";
import FormSelector from "./FieldSelector";

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
    <Button
      title="Agregar Campo"
      onPress={() =>
        addField(form.id, { name: "", placeholder: "", type: "text" })
      }
    />
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
  },
  formNameInput: {
    padding: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
  },
});
export default Form;
