import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { BASE_URI } from '../../app/config';

export const fetchIndexDivisiones = createAsyncThunk(
  'organizacion/fetchIndexDivisiones',
  async () => {
    const response = await fetch(`${BASE_URI}/divisiones`, {
      method: 'GET',
    });
    const data = await response.json();
    if (!response.ok) {
      console.log(data);
      throw new Error('Algo anda mal...');
    }
    return { organizacion: data };
  }
);

const organizacionSlice = createSlice({
  name: 'organizacion',
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
      state.items = action.payload.organizacion;
    },
    [fetchIndexDivisiones.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },
  },
});

export default organizacionSlice.reducer;
