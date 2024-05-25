import { ADD_FORM,ADD_FIELD, REMOVE_FIELD, REMOVE_FORM, UPDATE_FIELD, SAVE_FORM} from "../Actions/formActions";


const initialState = {
    forms: []
  };

  const formReducer = (state = initialState, action) => {
    switch (action.type) {
      case SAVE_FORM:
        const formId = action.payload;
        const formToSave = state.forms.find(form => form.id === formId);
        return {
          ...state,
          savedForms: {
            ...state.savedForms,
            [formId]: formToSave,
          },
        };
      case ADD_FORM:
        return {
          ...state,
          forms: [...state.forms, { id: Date.now(), name: action.payload.name, fields: [] }]
        };
      case REMOVE_FORM:
        return {
          ...state,
          forms: state.forms.filter(form => form.id !== action.payload.id)
        };
      case ADD_FIELD:
        return {
          ...state,
          forms: state.forms.map(form =>
            form.id === action.payload.formId ? { ...form, fields: [...form.fields, { id: Date.now(), ...action.payload.field }] } : form
          )
        };
      case REMOVE_FIELD:
        return {
          ...state,
          forms: state.forms.map(form =>
            form.id === action.payload.formId ? { ...form, fields: form.fields.filter(field => field.id !== action.payload.fieldId) } : form
          )
        };
      case UPDATE_FIELD:
        return {
          ...state,
          forms: state.forms.map(form =>
            form.id === action.payload.formId ? {
              ...form, fields: form.fields.map(field =>
                field.id === action.payload.fieldId ? { ...field, ...action.payload.field } : field
              )
            } : form
          )
        };
       
      default:
        return state;
    }
  };
  
      export default formReducer; 