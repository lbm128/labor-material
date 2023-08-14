import { createStore } from 'redux';

const contextReducer = (state = { laborHistory: [], materialHistory: [] }, action) => {
  switch (action.type) {
    case 'LABOR_HISTORY': {
      state.laborHistory.push(action.calculatedLaborTotal);
      return state;
    }
    case 'MATERIAL_HISTORY': {
      state.materialHistory.push(action.calculatedMaterialTotal);
      return state;
    }
    default:
      return state;
  }
}

export default createStore(contextReducer);
