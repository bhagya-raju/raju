import { combineReducers } from 'redux';
const initialState = {
  data: [],
  loading: false,
  error: null,
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_DATA_REQUEST':
      return { ...state, loading: true, error: null };
    case 'FETCH_DATA_SUCCESS':
      return { ...state, loading: false, data: action.payload };
    case 'FETCH_DATA_FAILURE':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const edit = {
  updating: false,
  updatedReport: null,
  error: null,
};

const reportReducer = (state = edit, action) => {
  switch (action.type) {
    case 'UPDATE_REPORT_REQUEST':
      return {
        ...state,
        updating: true,
        updatedReport: null,
        error: null,
      };
    case 'UPDATE_REPORT_SUCCESS':
      return {
        ...state,
        updating: false,
        updatedReport: action.payload,
        error: null,
      };
    case 'UPDATE_REPORT_FAILURE':
      return {
        ...state,
        updating: false,
        updatedReport: null,
        error: action.payload,
      };
    default:
      return state;
  }
};
const rootReducer = combineReducers({
  data: dataReducer,
  edit:reportReducer
});

export default rootReducer;
