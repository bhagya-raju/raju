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
