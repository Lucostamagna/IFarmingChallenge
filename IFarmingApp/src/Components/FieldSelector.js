import React from 'react';
import { View, TextInput, Button } from 'react-native';



const FieldSelector = ({ field, updateField, removeField }) => {
  return (
   <View>
      <TextInput
      placeholder="Nombre del Campo"
      value={field.name}
      onChangeText={text => updateField({ ...field, name: text })}
    />
    <TextInput
      placeholder="Placeholder"
      value={field.placeholder}
      onChangeText={text => updateField({ ...field, placeholder: text })}
    />
   </View>
  )
}

export default FieldSelector