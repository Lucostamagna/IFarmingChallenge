import {
  addForm,
  removeForm,
  addField,
  removeField,
  updateField,
  saveForm,
} from "../Redux/Actions/formActions";
import { useDispatch } from "react-redux";

export const useFormActions = () => {
  const dispatch = useDispatch();

  const handleAddForm = (formName) => {
    dispatch(addForm(formName));
  };

  const handleRemoveForm = (formId) => {
    dispatch(removeForm(formId));
  };

  const handleAddField = (formId, field) => {
    dispatch(addField(formId, field));
  };

  const handleRemoveField = (formId, fieldId) => {
    dispatch(removeField(formId, fieldId));
  };

  const handleUpdateField = (formId, fieldId, field) => {
    dispatch(updateField(formId, fieldId, field));
  };

  const handleSaveForm = (formId) => {
    dispatch(saveForm(formId));
  };

  return {
    handleAddForm,
    handleRemoveForm,
    handleAddField,
    handleRemoveField,
    handleUpdateField,
    handleSaveForm,
  };
};
