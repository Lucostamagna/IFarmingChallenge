// SavedFormScreen.js
import React from 'react';
import { View, Text, FlatList, Button } from 'react-native';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

const SavedFormsScreen = () => {
  const savedForms = useSelector(state => state.form.savedForms);
  const navigation = useNavigation();

  return (
    <View>
      <FlatList
        data={Object.values(savedForms)}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name}</Text>
            <Button
              title="Ver Detalles"
              onPress={() => navigation.navigate('FormDetails', { formId: item.id })}
            />
          </View>
        )}
      />
    </View>
  );
};

export default SavedFormsScreen;
