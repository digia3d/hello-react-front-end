import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseurl = 'http://localhost:3000/api/v1/greetings';

export const fetchGreeting = createAsyncThunk(
  'greeting/fetchGreeting',
  async () => {
    const response = await axios.get(baseurl);
    return response.data;
  },
);

const greetingSlice = createSlice({
  name: 'greeting',
  initialState: [],
  reducers: {
    addGreeting(state, action) {
      return action.payload;
    },
  },
  extraReducers: {
    [fetchGreeting.fulfilled]: (state, action) => action.payload,
  },
});

export const { addGreeting } = greetingSlice.actions;
export default greetingSlice.reducer;

// Path: src/components/greeting.js
