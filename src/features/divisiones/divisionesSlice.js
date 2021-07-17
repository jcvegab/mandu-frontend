import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { BASE_URI } from '../../app/config';

export const fetchIndexDivisiones = createAsyncThunk(
  'divisiones/fetchIndexDivisiones',
  async () => {
    const response = await fetch(`${BASE_URI}/divisiones`, {
      method: 'GET',
    });
    const data = await response.json();
    if (!response.ok) {
      console.log(data);
      throw new Error('Algo anda mal...');
    }
    return { divisiones: data };
  }
);

const divisionesSlice = createSlice({
  name: 'divisiones',
  initialState: {
    items: [],
    status: 'iddle',
    error: null,
  },
  extraReducers: {
    [fetchIndexDivisiones.pending]: (state) => {
      state.status = 'loading';
    },
    [fetchIndexDivisiones.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.items = action.payload.divisiones;
    },
    [fetchIndexDivisiones.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },
  },
});

export default divisionesSlice.reducer;
