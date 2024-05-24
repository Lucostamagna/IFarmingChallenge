export const ADD_FORM = 'ADD_FORM';
export const REMOVE_FORM = 'REMOVE_FORM';
export const ADD_FIELD = 'ADD_FIELD';
export const REMOVE_FIELD = 'REMOVE_FIELD';
export const UPDATE_FIELD = 'UPDATE_FIELD';

export const addForm = (name) => ({
  type: ADD_FORM,
  payload: { name }
});

export const removeForm = (id) => ({
  type: REMOVE_FORM,
  payload: { id }
});

export const addField = (formId, field) => ({
  type: ADD_FIELD,
  payload: { formId, field }
});

export const removeField = (formId, fieldId) => ({
  type: REMOVE_FIELD,
  payload: { formId, fieldId }
});

export const updateField = (formId, fieldId, field) => ({
  type: UPDATE_FIELD,
  payload: { formId, fieldId, field }
});