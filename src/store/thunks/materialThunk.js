import axios from "axios";
import { materialActions } from "../index";

export const addMaterial = ({ calculatedTotal }) => (dispatch) => {
  axios
    .post('/addMaterial', { calculatedTotal })
    .then(({ data }) => { dispatch(materialActions.addMaterialHistory(data)) });
};