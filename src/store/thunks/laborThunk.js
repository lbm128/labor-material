import axios from "axios";
import { laborActions } from "../index";

export const addLabor = ({ calculatedTotal }) => (dispatch) => {
  axios
    .post('/addLabor', { calculatedTotal })
    .then(({ data }) => { dispatch(laborActions.addLaborHistory(data)) });
};