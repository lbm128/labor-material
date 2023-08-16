import axios from "axios";

export const addLaborApi = ({ calculatedTotal }) => {
  return axios.post('/addLabor', { calculatedTotal });
};
