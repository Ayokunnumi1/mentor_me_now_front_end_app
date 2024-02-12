import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'http://localhost:3000/api/v1';

const initialState = {
  mentor: null,
  status: 'idle',
  error: null,
};

export const removeMentor = createAsyncThunk(
  'mentors/removeMentor',
  async (mentorId, { rejectWithValue }) => {
    try {
      const response = await axios.patch(
        `${API_URL}/mentors/${mentorId}/remove_mentor`,
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

const removeMentorSlice = createSlice({
  name: 'removeMentor',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(removeMentor.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(removeMentor.fulfilled, (state) => {
        state.status = 'succeeded';
        window.location.reload();
      })
      .addCase(removeMentor.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export default removeMentorSlice.reducer;
