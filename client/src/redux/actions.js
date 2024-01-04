import axios from 'axios';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
//all team members profiles in hrdashboard

const fetchDataRequest = () => ({
  type: 'FETCH_DATA_REQUEST',
});

const fetchDataSuccess = (data) => ({
  type: 'FETCH_DATA_SUCCESS',
  payload: data,
});

const fetchDataFailure = (error) => ({
  type: 'FETCH_DATA_FAILURE',
  payload: error,
});

export const fetchData = () => {
  return (dispatch) => {
    dispatch(fetchDataRequest());
    axios
      .get('http://localhost:5000/allreports', {
        headers: {
          'x-token': localStorage.getItem('token'),
        },
      })
      .then((res) => {
        dispatch(fetchDataSuccess(res.data));
      })
      .catch((error) => {
        dispatch(fetchDataFailure('Error fetching data'));
      });
  };
};

// //all team members profiles assigned to a team leader in tldashboard

// export const fetchUserProfileRequest = () => ({
//   type: 'FETCH_USER_PROFILE_REQUEST',
// });

// export const fetchUserProfileSuccess = (data) => ({
//   type: 'FETCH_USER_PROFILE_SUCCESS',
//   payload: data,
// });

// export const fetchUserProfileFailure = (error) => ({
//   type: 'FETCH_USER_PROFILE_FAILURE',
//   payload: error,
// });



// export const fetchUserProfile = () => async (dispatch) => {
//   dispatch(fetchUserProfileRequest());

//   try {
//     const response = await axios.get("http://localhost:5000/profile", {
//           headers: {
//             "x-token": localStorage.getItem("token"),
//           },
//         });
//         dispatch(fetchUserProfileSuccess(response.data));
//   } catch (error) {
//     dispatch(fetchUserProfileFailure("Error fetching data"));
//   }
// };

// //USER Login for all dashboards
// // Action Creators
// export const loginSuccess = ({ id, token }) => ({
//   type: 'LOGIN_SUCCESS',
//   payload: { id, token },
// });


// export const loginFailure = (error) => ({
//   type: 'LOGIN_FAILURE',
//   payload:error,
// });

// export const loginUser = (formData) => async (dispatch) => {
//   try {
//     const response = await axios.post("http://localhost:5000/login", formData);
//     localStorage.setItem("token", response.data.token);


//     const roleResponse = await axios.get("http://localhost:5000/profile", {
//       headers: {
//         "x-token": localStorage.getItem("token"),
//       },
//     });

//     dispatch(loginSuccess({
//       id: response.data.id,
//       token: response.data.token,
//       role: roleResponse.data.role,  // Extract the role from the profile API response
//     }));
//     switch (roleResponse.data.role) {
//       case "Team Member":
//         window.location.href = "/tmdashboard";
//         break;
//       case "Team Lead":
//         window.location.href = "/tldashboard";
//         break;
//       default:
//         window.location.href = "/hrdashboard";
//         break;
//     }
//     toast.success(`Login successful as ${roleResponse.data.role}!`);
//   } catch (error) {
//     dispatch(loginFailure(error.message));
//     toast.error("Login failed:Invaild Credentials");
//   }
// };



// //myprofile 

// export const fetchProfileRequest = () => ({
//   type: 'FETCH_PROFILE_REQUEST',
// });

// export const fetchProfileSuccess = (data) => ({
//   type: 'FETCH_PROFILE_SUCCESS',
//   payload: data,
// });

// export const fetchProfileFailure = (error) => ({
//   type: 'FETCH_PROFILE_FAILURE',
//   payload: error,
// });

// export const fetchProfileData = (id)=> async (dispatch) => {
  
//     dispatch(fetchProfileRequest());
//     try {
//     const response = await axios.get(`http://localhost:5000/myprofile/${id}`, {
//           headers: {
//             "x-token": localStorage.getItem("token"),
//           },
//         });
//         dispatch(fetchProfileSuccess(response.data));
//        } catch(error){
//         dispatch(fetchProfileFailure("Error fetching data"));
//       };
//   };

// //To fetch all team leads in hrdashboard in team members profile

//   export const fetchTmleadSuccess = (data) => ({
//     type: 'FETCH_TM_LEAD_SUCCESS', 
//     payload: data,
//   });
  
//   export const fetchTmleadFailure = (error) => ({
//     type: 'FETCH_TM_LEAD_FAILURE', 
//     payload: error,
//   });

//   export const tmlead = ()=> async (dispatch) => {
  
//     try {
//     const response = await axios.get("http://localhost:5000/tmlead", {
//           headers: {
//             "x-token": localStorage.getItem("token"),
//           },
//         });
//         dispatch(fetchTmleadSuccess(response.data));
//        } catch(error){
//         dispatch(fetchTmleadFailure("Error fetching data"));
//       };
//   };

//   export const tlassign = (secretkey,assignedto)=> async (dispatch) => {
  
//     try {
//     const response = await axios.put("http://localhost:5000/tlassign",{secretkey,assignedto}, {
//           headers: {
//             "x-token": localStorage.getItem("token"),
//           },
//         });
//         console.log(response)
//        } catch(error){
//         console.log(error)
//       };
//   };




// const fetchTlTmDataRequest = () => ({
//   type: 'FETCH_TMTL_DATA_REQUEST',
// });

// const fetchTlTmDataSuccess = (data) => ({
//   type: 'FETCH_TMTL_DATA_SUCCESS',
//   payload: data,
// });

// const fetchTLTmDataFailure = (error) => ({
//   type: 'FETCH_TMTL_DATA_FAILURE',
//   payload: error,
// });


// export const fetchTlTmData = () => {
//   return (dispatch) => {
//     dispatch(fetchTlTmDataRequest());
//     axios
//       .get('http://localhost:5000/tltm', {
//         headers: {
//           'x-token': localStorage.getItem('token'),
//         },
//       })
//       .then((res) => dispatch(fetchTlTmDataSuccess(res.data)))
//       .catch((error) => {
//         dispatch(fetchTLTmDataFailure('Error fetching data'));
//       });
//   };
// };

// export const reviewupdate = (secretkey)=> async (dispatch) => {
  
//   try {
//   const response = await axios.put("http://localhost:5000/updatereview",{secretkey}, {
//         headers: {
//           "x-token": localStorage.getItem("token"),
//         },
//       });
//       console.log(response)
//      } catch(error){
//       console.log(error)
//     };
// };

// export const addreview = (goalsAndObjectives,achievementsAndResponsibilities,significantMilestones,lessonsLearned,
//   teamDynamicsChanges,teamImprovements)=> async (dispatch) => {
  
//   try {
//   const response = await axios.post("http://localhost:5000/addreview",{goalsAndObjectives,achievementsAndResponsibilities,significantMilestones,lessonsLearned,
//   teamDynamicsChanges,teamImprovements}, {
//         headers: {
//           "x-token": localStorage.getItem("token"),
//         },
//       });
//       console.log(response)
//      } catch(error){
//       console.log(error)
//     };
// };

// const fetchReviewDataRequest = () => ({
//   type: 'FETCH_REVIEW_DATA_REQUEST',
// });

// const fetchReviewDataSuccess = (data) => ({
//   type: 'FETCH_REVIEW_DATA_SUCCESS',
//   payload: data,
// });

// const fetchReviewDataFailure = (error) => ({
//   type: 'FETCH_REVIEW_DATA_FAILURE',
//   payload: error,
// });

// export const getreview = ()=> async (dispatch) => {
//   dispatch(fetchReviewDataRequest);
//   try {
//   const response = await axios.get("http://localhost:5000/getreview", {
//         headers: {
//           "x-token": localStorage.getItem("token"),
//         },
//       });
//       const filteredData = response.data.filter(item => item.status === false);
//       dispatch(fetchReviewDataSuccess(filteredData));
//      } catch(error){
//       dispatch(fetchReviewDataFailure("Error fetching data"));
//     };
// };

// const fetchFeedbackDataRequest = () => ({
//   type: 'FETCH_FEEDBACK_DATA_REQUEST',
// });

// const fetchFeedbackDataSuccess = (data) => ({
//   type: 'FETCH_FEEDBACK_DATA_SUCCESS',
//   payload: data,
// });

// const fetchFeedbackDataFailure = (error) => ({
//   type: 'FETCH_FEEDBACK_DATA_FAILURE',
//   payload: error,
// });


// export const feedback = (id)=> async (dispatch) => {
//   dispatch(fetchFeedbackDataRequest);
//   try {
//   const response = await axios.post("http://localhost:5000/feedback",{id}, {
//         headers: {
//           "x-token": localStorage.getItem("token"),
//         },
//       });
//       const data = Array.isArray(response.data) ? response.data[0] : response.data;

//       dispatch(fetchFeedbackDataSuccess(data));
//      } catch(error){
//       dispatch(fetchFeedbackDataFailure("Error fetching data"));
//     };
// };

// export const updatefeedback = (id,comments,rating)=> async (dispatch) => {
  
//   try {
//   const response = await axios.put("http://localhost:5000/updatefeedback",{id,comments,rating}, {
//         headers: {
//           "x-token": localStorage.getItem("token"),
//         },
//       });
//       console.log(response)
//      } catch(error){
//       console.log(error)
//     };
// };