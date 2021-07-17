import { configureStore } from '@reduxjs/toolkit';
import divisionesReducer from '../features/divisiones/divisionesSlice';

export default configureStore({
  reducer: {
    divisiones: divisionesReducer,
  },
});
