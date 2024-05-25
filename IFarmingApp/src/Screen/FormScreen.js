import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { View, Button,Text, FlatList,TextInput,StyleSheet, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { addField,addForm,removeField,updateField, saveForm } from '../Redux/Actions/formActions';

import { useNavigation } from '@react-navigation/native';
import Form from '../Components/Form';

const FormScreen = () => {
  const [formName, setFormName] = useState('');
  const forms = useSelector(state => state.form.forms);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleSaveForm = (formId) => {
    dispatch(saveForm(formId));
    navigation.navigate('SavedForm', { formId });
  };
  const handleCreateForm = () => {
    if (formName.trim() !== '') {
      dispatch(addForm(formName)); 
      setFormName('');
    }
  };

  return (
    <View>
     <View style={styles.container}>
        <TextInput
        value={formName}
        onChangeText={setFormName}
        placeholder="Nombre del formulario"
      />
     
      <TouchableOpacity  style={styles.button} onPress={handleCreateForm}>
        <Text style={styles.buttonText}> Crear</Text>
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
          </View>
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
container:{
  borderWidth:2,
  borderColor:'blue',
  borderRadius:10,
  backgroundColor:'white',
  marginTop:'10%',
  width:'80%',
  height:'30%',
  justifyContent:'center',
  alignItems:'center',
  marginHorizontal:'10%',
  
 

},
button: {
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 10,
 width:80,
 flexDirection: 'row',
},
buttonText: {
 
  fontSize: 18,
  fontWeight: 'bold',
},
icon: {
  marginLeft: 10,
  color:'black'
},
})
export default FormScreen;
