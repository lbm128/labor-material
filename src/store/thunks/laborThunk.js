import { laborActions } from "../index";
import { addLaborApi } from "../../api/labor";

export const addLabor = ({ calculatedTotal }) => (dispatch) => {
  addLaborApi({ calculatedTotal })
    .then(({ data }) => { dispatch(laborActions.addLaborHistory(data)) });
};