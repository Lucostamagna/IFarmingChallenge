import React from 'react'

import { View, Button, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Form from '../Components/Form';
import {addForm, addField} from '../Redux/Actions/formActions'
const FormScreen = () => {
  const forms = useSelector(state => state.form.forms);
  const dispatch = useDispatch();

  return (
    <View>
      <Button title="Crear Formulario" onPress={() => dispatch(addForm('Nuevo Formulario')), console.log('hola')} />
      
      <FlatList
        data={forms}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <Form
            form={item}
            addField={(formId, field) => dispatch(addField(formId, field))}
            removeField={(formId, fieldId) => dispatch(removeField(formId, fieldId))}
             updateField={(formId, fieldId, field) => dispatch(updateField(formId, fieldId, field))}
          />
        )}
      />
    </View>
  )
}

export default FormScreen