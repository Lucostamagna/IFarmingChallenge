import React, { useCallback } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Alert,
  Platform,
  Dimensions,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { removeForm } from "../Redux/Actions/formActions";
const { width, height } = Dimensions.get("window");
const SavedFormsScreen = () => {
  const savedForms = useSelector((state) => state.form.savedForms);

  const dispatch = useDispatch();

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
  return (
    <View style={styles.container}>
      {Object.keys(savedForms).length > 0 ? (
        <>
          <Text style={styles.emptyText}>Formularios guardados.</Text>
          <FlatList
            data={Object.values(savedForms)}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.formContainer}>
                <Text style={styles.formName}>{item.name}</Text>
              </View>
            )}
          />
        </>
      ) : (
        <Text style={styles.emptyText}>No hay formularios guardados.</Text>
      )}
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
      },
    }),
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
  emptyText: {
    textAlign: "center",
    marginTop: 5,
    marginBottom: 15,
    fontSize: 18,
    color: "#777",
  },
});

export default SavedFormsScreen;
