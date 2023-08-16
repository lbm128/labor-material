import axios from "axios";

export const addMaterialApi = ({ calculatedTotal }) => {
  return axios.post('/addMaterial', { calculatedTotal });
};