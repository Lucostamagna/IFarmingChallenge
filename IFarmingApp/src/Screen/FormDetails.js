import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

const FormDetails = ({ route }) => {
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
      <Text style={styles.formName}>{form.name}</Text>
      <FlatList
        data={form.fields}
        keyExtractor={(field) => field.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.fieldContainer}>
            <Text style={styles.fieldLabel}>{item.name}:</Text>
            <Text style={styles.fieldValue}>Valor: {item.value}</Text>
            <Text style={styles.fieldPlaceholder}>
              Placeholder: {item.placeholder}
            </Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  formName: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  fieldContainer: {
    marginBottom: 8,
  },
  fieldLabel: {
    fontWeight: "bold",
  },
  fieldValue: {
    marginBottom: 4,
  },
  fieldPlaceholder: {
    color: "gray",
  },
});

export default FormDetails;
