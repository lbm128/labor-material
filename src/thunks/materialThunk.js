import axios from "axios";
import { materialActions } from "../store";

export const addMaterial = ({ calculatedTotal }) => (dispatch) => {
  axios
    .post('/addMaterial', { calculatedTotal })
    .then(({ data }) => { dispatch(materialActions.addMaterialHistory(data)) });
};