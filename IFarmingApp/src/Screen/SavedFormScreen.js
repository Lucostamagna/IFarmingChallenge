// SavedFormScreen.js
import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

const SavedFormScreen = ({ route }) => {
  const { formId } = route.params;
  const savedForm = useSelector(state => state.form.savedForms[formId]);

  if (!savedForm) {
    return (
      <View>
        <Text>Formulario no encontrado</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.formName}>{savedForm.name}</Text>
      <FlatList
        data={savedForm.fields}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.fieldContainer}>
            <Text style={styles.fieldName}>{item.name}</Text>
            <Text style={styles.fieldValue}>{item.value}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  formName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  fieldContainer: {
    marginBottom: 10,
  },
  fieldName: {
    fontSize: 16,
  },
  fieldValue: {
    fontSize: 14,
    color: 'gray',
  },
});

export default SavedFormScreen;
