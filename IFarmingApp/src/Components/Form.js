import React from 'react';
import { View, TextInput, Button } from 'react-native';
import FieldSelector from './FieldSelector';



const Form = ({form, addField}) => {
  return (
   <View>
      <TextInput placeholder="Nombre del Formulario" value={form.name} />
    {form.fields.map(field => (
      <FormField
        key={field.id}
        field={field}
        updateField={updatedField => updateField(form.id, field.id, updatedField)}
        removeField={() => removeField(form.id, field.id)}
      />
    ))}
    <Button title="Agregar Campo" onPress={() => addField(form.id, { name: '', placeholder: '', type: 'text' })} />
   </View> 
       
   
  )
}

export default Form