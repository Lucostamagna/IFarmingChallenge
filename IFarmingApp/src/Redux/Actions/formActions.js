import { ActionTypes } from "./ActionTypes";

export const addForm = (name) => ({
  type: ActionTypes.ADD_FORM,
  payload: { name },
});

export const removeForm = (id) => ({
  type: ActionTypes.REMOVE_FORM,
  payload: { id },
});

export const addField = (formId, field) => ({
  type: ActionTypes.ADD_FIELD,
  payload: { formId, field },
});

export const removeField = (formId, fieldId) => ({
  type: ActionTypes.REMOVE_FIELD,
  payload: { formId, fieldId },
});

export const updateField = (formId, fieldId, field) => ({
  type: ActionTypes.UPDATE_FIELD,
  payload: { formId, fieldId, field },
});

export const saveForm = (formId) => ({
  type: ActionTypes.SAVE_FORM,
  payload: { formId },
});