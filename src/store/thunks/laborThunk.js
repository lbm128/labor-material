import { laborActions } from "../index";
import { addLaborApi, loadLaborApi } from "../../api/labor";

export const addLabor = ({ calculatedTotal }) => (dispatch) => {
  addLaborApi({ calculatedTotal })
    .then(({ data }) => { dispatch(laborActions.addLaborHistory(data)) });
};

export const loadLabor = () => (dispatch) => {
  loadLaborApi()
    .then(({ data }) => dispatch(laborActions.loadLaborHistory({ laborHistory: data })));
};
