import { createStore } from 'redux';

const contextReducer = (state = { laborTotal: 0, materialTotal: 0 }, action) => {
  switch (action.type) {
    case 'LABOR':
      return { ...state, laborTotal: action.calculatedLaborTotal };
    case 'MATERIAL':
      return { ...state, materialTotal: action.calculatedMaterialTotal };
    default:
      return state;
  }
}

export default createStore(contextReducer);
