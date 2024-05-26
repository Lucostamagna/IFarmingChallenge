import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

const FormDetailsScreen = ({ route }) => {
  const { formId } = route.params;
  const form = useSelector((state) => state.form.savedForms[formId]);

  if (!form) {
    return (
      <View style={styles.container}>
        <Text>Formulario no encontrado.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.form}>
      <Text style={styles.formName}>Deatlles del formulario:{form.name}</Text>
      <View style={styles.fieldsContainer}>
        {form.fields.map((field, index) => (
          <View key={index} style={styles.fieldContainer}>
            <Text style={styles.fieldLabel}>{field.name}:</Text>
            <Text style={styles.fieldValue}>Valor: {field.value}</Text>
          </View>
        ))}
      </View>
      </View>
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  form:{
    marginBottom: 20, 
    borderRadius: 10,
    backgroundColor: 'white',
    padding: 15,
    
    borderWidth: 2,
    borderColor: "#6495ed",
  },
  formName: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  fieldsContainer: {
    marginTop: 10,
  },
  fieldContainer: {
    marginBottom: 8,
  },
  fieldLabel: {
    fontWeight: "bold",
  },
  fieldValue: {},
});

export default FormDetailsScreen;
