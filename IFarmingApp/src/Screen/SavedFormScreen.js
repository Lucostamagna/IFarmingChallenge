import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';

const SavedFormScreen = ({ route }) => {
  const { formId } = route.params;
  const form = useSelector(state => state.form.forms.find(f => f.id === formId));

  if (!form) {
    return <Text>Formulario no encontrado</Text>;
  }

  return (
    <View>
      <Text>{form.name}</Text>
      {form.fields.map(field => (
        <View key={field.id}>
          <Text>{field.name}</Text>
          <Text>{field.placeholder}</Text>
          <Text>{field.type}</Text>
        </View>
      ))}
    </View>
  );
};

export default SavedFormScreen;