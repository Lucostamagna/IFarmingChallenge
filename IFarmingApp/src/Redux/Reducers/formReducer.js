import { ADD_FORM } from "../Actions/formActions";


const initialState = {
    forms: []
  };

  const formReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_FORM:
        return {
          ...state,
          forms: [...state.forms, { id: Date.now(), name: action.payload.name, fields: [] }]
        };
        default:
            return state;
        }
      };
      export default formReducer; 