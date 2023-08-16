import { materialActions } from "../index";
import { addMaterialApi } from "../../api/material";

export const addMaterial = ({ calculatedTotal }) => (dispatch) => {
  addMaterialApi({ calculatedTotal })
    .then(({ data }) => { dispatch(materialActions.addMaterialHistory(data)) });
};