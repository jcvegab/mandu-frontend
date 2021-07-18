import { configureStore } from '@reduxjs/toolkit';
import organizacionReducer from '../features/organizacion/organizacionSlice';

export default configureStore({
  reducer: {
    organizacion: organizacionReducer,
  },
});
