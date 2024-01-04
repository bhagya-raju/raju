// src/redux/reducers.js
import { combineReducers } from 'redux';
const initialState = {
  data: [],
  loading: false,
  error: null,
};

// const user = {
//   loading: false,
//   data: {},
//   error: null,
// };

// const profile = {
//   loading: false,
//   data: {},
//   error: null,
// };
// const auth = {
//   id: null,  // Change this to null
//   token: null,
//   error: null,
// };

// const leads = {
//   names: [],  
//   error: null
// };

// const tltm = {
//   data: [],
//   loading: false,
//   error: null,
// };

// const tlreviews = {
//   data: [],
//   loading: false,
//   error: null,
// };

// const feedback = {
//   data: [],
//   loading: false,
//   error: null,
// };

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

// const userProfileReducer = (state = profile, action) => {
//   switch (action.type) {
//     case 'FETCH_USER_PROFILE_REQUEST':
//       return { ...state, loading: true, error: null };
//     case 'FETCH_USER_PROFILE_SUCCESS':
//       return { ...state, loading: false, data: action.payload };
//     case 'FETCH_USER_PROFILE_FAILURE':
//       return { ...state, loading: false, error: action.payload };
//     default:
//       return state;
//   }
// };

// const profileReducer = (state = user, action) => {
//   switch (action.type) {
//     case 'FETCH_PROFILE_REQUEST':
//       return { ...state, loading: true, error: null };
//     case 'FETCH_PROFILE_SUCCESS':
//       return { ...state, loading: false, data: action.payload };
//     case 'FETCH_PROFILE_FAILURE':
//       return { ...state, loading: false, error: action.payload };
//     default:
//       return state;
//   }
// };

// export const authReducer = (state = auth, action) => {
//   switch (action.type) {
//     case 'LOGIN_SUCCESS':
//       const { id, token } = action.payload;
//       return {
//         ...state,
//         id,
//         token,
//         error: null,
//       };
//     case 'LOGIN_FAILURE':
//       return {
//         ...state,
//         id: null,
//         token: null,
//         error: action.payload,
//       };
//     default:
//       return state;
//   }
// };



// const tmLead = (state = leads, action) => {
//   switch (action.type) {
//     case 'FETCH_TM_LEAD_SUCCESS': // Change to uppercase
//       return { ...state, loading: false, names: action.payload };
//     case 'FETCH_TM_LEAD_FAILURE': // Change to uppercase
//       return { ...state, loading: false, error: action.payload };
//     default:
//       return state;
//   }
// };

// const tltmdata = (state = tltm, action) => {
//   switch (action.type) {
//     case 'FETCH_TMTL_DATA_REQUEST':
//       return { ...state, loading: true, error: null };
//     case 'FETCH_TMTL_DATA_SUCCESS':
//       return { ...state, loading: false, data: action.payload };
//     case 'FETCH_TMTL_DATA_FAILURE':
//       return { ...state, loading: false, error: action.payload };
//     default:
//       return state;
//   }
// };

// const getReview = (state = tlreviews, action) => {
//   switch (action.type) {
//     case 'FETCH_REVIEW_DATA_REQUEST':
//       return { ...state, loading: true, error: null };
//     case 'FETCH_REVIEW_DATA_SUCCESS':
//       return { ...state, loading: false, data: action.payload };
//     case 'FETCH_REVIEW_DATA_FAILURE':
//       return { ...state, loading: false, error: action.payload };
//     default:
//       return state;
//   }
// };

// const tlfeedback = (state = feedback, action) => {
//   switch (action.type) {
//     case 'FETCH_FEEDBACK_DATA_REQUEST':
//       return { ...state, loading: true, error: null };
//     case 'FETCH_FEEDBACK_DATA_SUCCESS':
//       return { ...state, loading: false, data: action.payload };
//     case 'FETCH_FEEDBACK_DATA_FAILURE':
//       return { ...state, loading: false, error: action.payload };
//     default:
//       return state;
//   }
// };


const rootReducer = combineReducers({
  data: dataReducer,
  // userId:userProfileReducer,
  // profile:profileReducer,
  // auth:authReducer,
  // leads:tmLead,
  // tltm:tltmdata,
  // getReview:getReview,
  // feedback:tlfeedback
});

export default rootReducer;
