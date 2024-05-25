import { ActionTypes } from "../Actions/ActionTypes";

const initialState = {
  forms: [],
  savedForms: {},
};

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_FORM:
      return {
        ...state,
        forms: [...state.forms, { id: Date.now(), name: action.payload.name, fields: [] }]
      };
    case ActionTypes.REMOVE_FORM:
      return {
        ...state,
        forms: state.forms.filter(form => form.id !== action.payload.id)
      };
    case ActionTypes.ADD_FIELD:
      return {
        ...state,
        forms: state.forms.map(form =>
          form.id === action.payload.formId
            ? { ...form, fields: [...form.fields, { id: Date.now(), ...action.payload.field }] }
            : form
        )
      };
    case ActionTypes.REMOVE_FIELD:
      return {
        ...state,
        forms: state.forms.map(form =>
          form.id === action.payload.formId
            ? { ...form, fields: form.fields.filter(field => field.id !== action.payload.fieldId) }
            : form
        )
      };
    case ActionTypes.UPDATE_FIELD:
      return {
        ...state,
        forms: state.forms.map(form =>
          form.id === action.payload.formId
            ? {
                ...form,
                fields: form.fields.map(field =>
                  field.id === action.payload.fieldId ? { ...field, ...action.payload.field } : field
                )
              }
            : form
        )
      };
    case ActionTypes.SAVE_FORM:
      const formToSave = state.forms.find(form => form.id === action.payload.formId);
      return {
        ...state,
        savedForms: {
          ...state.savedForms,
          [action.payload.formId]: formToSave,
        },
      };
    default:
      return state;
  }
};

export default formReducer;
