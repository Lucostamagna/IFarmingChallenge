import React, { useState, useCallback } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { View, Text, FlatList, TextInput, StyleSheet, TouchableOpacity, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { addField, addForm, removeField, updateField, saveForm,removeForm } from '../Redux/Actions/formActions';
import { useNavigation } from '@react-navigation/native';
import Form from '../Components/Form';

const FormScreen = () => {
  const [formName, setFormName] = useState('');
  const forms = useSelector(state => state.form.forms);

  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleSaveForm = useCallback((formId) => {
    dispatch(saveForm(formId));
  
  }, [dispatch]);

  const handleCreateForm = useCallback(() => {
    if (formName.trim() !== '') {
      dispatch(addForm(formName));
      setFormName('');
    }
    console.log(setFormName)
  }, [dispatch, formName]);

  const handleRemoveForm = (formId) => {
    dispatch(removeForm(formId));
  };


  return (
    <View>
      <View style={styles.container}>
        <TextInput
          value={formName}
          onChangeText={setFormName}
          placeholder="Nombre del formulario"
          style={styles.input}
        />
        <TouchableOpacity style={styles.button} onPress={handleCreateForm}>
          <Text style={styles.buttonText}>Crear</Text>
          <Icon name="arrow-forward" size={20} color="#fff" style={styles.icon} />
        </TouchableOpacity>
      </View>
      <FlatList
        data={forms}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Form
              form={item}
              addField={(formId, field) => dispatch(addField(formId, field))}
              removeField={(formId, fieldId) => dispatch(removeField(formId, fieldId))}
              updateField={(formId, fieldId, field) => dispatch(updateField(formId, fieldId, field))}
            />
            <Button title="Guardar Formulario" onPress={() => handleSaveForm(item.id)} />
            <Button title="Eliminar Formulario" onPress={() => handleRemoveForm(item.id)} color="red" />
            
          </View>
        )}
      />
     
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
  },
  container: {
    borderWidth: 2,
    borderColor: 'blue',
    borderRadius: 10,
    backgroundColor: 'white',
    marginTop: '10%',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '100%',
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    padding: 10,
    backgroundColor: 'blue',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  icon: {
    marginLeft: 10,
  },
});

export default FormScreen;
