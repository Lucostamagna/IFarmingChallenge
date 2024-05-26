// SavedFormScreen.js
import React from 'react';
import { View, Text, FlatList, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

const SavedFormsScreen = () => {
  const savedForms = useSelector(state => state.form.savedForms);
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <FlatList
        data={Object.values(savedForms)}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.formContainer}>
            <Text style={styles.formName}>{item.name}</Text>
            <TouchableOpacity  style={styles.button} onPress={() => navigation.navigate('FormDetails', { formId: item.id })}>
<Text style={styles.buttonText}> Ver Detalle </Text>
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
    backgroundColor: '#fff', 
    paddingHorizontal: 20, 
    paddingTop: 20,
    
  },
  formContainer: {
    marginBottom: 20, 
    borderRadius: 10,
    backgroundColor: 'white',
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#6495ed",
  },
  formName: {
    fontSize: 16, 
    fontWeight: 'bold', 
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
