import axios from 'axios';

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


export const updateReportRequest = () => ({
  type: 'UPDATE_REPORT_REQUEST',
});

export const updateReportSuccess = (updatedReport) => ({
  type: 'UPDATE_REPORT_SUCCESS',
  payload: updatedReport,
});

export const updateReportFailure = (error) => ({
  type: 'UPDATE_REPORT_FAILURE',
  payload: error,
});

export const updateReport = (data) => {
  const { id, tags, status, assignedto } = data;
  return async (dispatch) => {
    dispatch(updateReportRequest());

    try {
      const response = await axios.put('http://localhost:5000/report', { id, tags, status, assignedto });
      dispatch(updateReportSuccess(response.data));
      return response.data; // You can return the data if needed
    } catch (error) {
      console.error(error);
      dispatch(updateReportFailure('Internal Server Error'));
      throw error; // Re-throw the error to propagate it to the caller
    }
  };
};
