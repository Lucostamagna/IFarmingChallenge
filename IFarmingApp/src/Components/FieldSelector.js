import React from "react";
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
  Switch,
} from "react-native";
import { Picker } from "@react-native-picker/picker";

const FormSelector = ({ field, updateField, removeField }) => {
  const renderInputField = () => {
    switch (field.type) {
      case "text":
        return (
          <TextInput
            style={styles.input}
            placeholder="Introduce texto"
            value={field.value}
            onChangeText={(text) => updateField({ ...field, value: text })}
          />
        );
      case "number":
        return (
          <TextInput
            style={styles.input}
            placeholder="Introduce número"
            value={field.value}
            keyboardType="numeric"
            onChangeText={(text) => updateField({ ...field, value: text })}
          />
        );
      case "boolean":
        return (
          <View style={styles.switchContainer}>
            <Text style={styles.switchLabel}>Booleano</Text>
            <Switch
              value={field.value === "true"}
              onValueChange={(value) =>
                updateField({ ...field, value: value.toString() })
              }
            />
          </View>
        );
        case "multiple":
      
          return (
            <TextInput
              style={styles.input}
              placeholder="Introduce opciones separadas por comas"
              value={field.value}
              onChangeText={(text) => updateField({ ...field, value: text })}
            />
          );
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nombre del Campo"
        value={field.name}
        onChangeText={(text) => updateField({ ...field, name: text })}
      />

      <Picker
        selectedValue={field.type}
        style={styles.picker}
        onValueChange={(value) => updateField({ ...field, type: value })}
      >
        <Picker.Item label="Texto" value="text" />
        <Picker.Item label="Número" value="number" />
        <Picker.Item label="Opción" value="option" />
        <Picker.Item label="Booleano" value="boolean" />
        <Picker.Item label="Opción Múltiple" value="multiple" />
      </Picker>

      {renderInputField()}
      <TouchableOpacity
        style={styles.buttonDelete}
        onPress={() => removeField(field.id)}
      >
        <Text style={styles.saveText}> Eliminar Campo</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 20,
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  input: {
    height: 40,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingLeft: 10,
    backgroundColor: "#f9f9f9",
  },
  picker: {
    height: 50,
    marginBottom: 15,
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  switchLabel: {
    marginRight: 10,
    fontSize: 16,
  },
  buttonDelete: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    padding: 2,
    borderWidth: 1,
    borderColor: "blue",
    marginHorizontal: 2,
  },
});

export default FormSelector;
