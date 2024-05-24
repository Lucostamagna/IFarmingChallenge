import React from 'react';
import { View, Button, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { addField,addForm,removeField,updateField, saveForm } from '../Redux/Actions/formActions';

import { useNavigation } from '@react-navigation/native';
import Form from '../Components/Form';

const FormScreen = () => {
  const forms = useSelector(state => state.form.forms);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleSaveForm = (formId) => {
    dispatch(saveForm(formId));
    navigation.navigate('SavedForm', { formId });
  };

  return (
    <View>
      <Button title="Crear Formulario" onPress={() => dispatch(addForm('Nuevo Formulario'))} />
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
          </View>
        )}
      />
    </View>
  );
};

export default FormScreen;
