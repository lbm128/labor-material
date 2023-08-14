import { configureStore, createSlice } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const laborSlice = createSlice({
  name: 'labor',
  initialState: { laborHistory: [] },
  reducers: {
    addLaborHistory (state, action) {
      state.laborHistory.push(action.payload);
    }
  }
});

export const laborActions = laborSlice.actions;

const materialSlice = createSlice({
  name: 'material',
  initialState: { materialHistory: [] },
  reducers: {
    addMaterialHistory (state, action) {
      state.materialHistory.push(action.payload);
    }
  }
});

export const materialActions = materialSlice.actions;

export default configureStore({
  reducer: {
    labor: laborSlice.reducer,
    material: materialSlice.reducer
  },
  middleware: [logger, thunk],
  devTools: true
});
