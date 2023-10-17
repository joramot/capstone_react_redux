import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  id: 0,
  error: '',
  isLoading: false,
};

export const fetchData = createAsyncThunk(
  'home/fetchdata',
  async () => {
    try {
      const response = await fetch('https://financialmodelingprep.com/api/v3/stock_market/gainers?apikey=JZX3skmwGAztX0ta1ByTbmOON6SAlIax');
      if (!response.ok) {
        throw new Error('Error Request');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(error);
    }
  },
);

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    getId: (state, action) => {
      state.detailsId = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
        state.data.forEach((item) => {
          item.id = state.data.indexOf(item);
        });
      })
      .addCase(fetchData.rejected, (state) => {
        state.isLoading = false;
        state.error = 'Unable to fetch data';
      });
  },
});

export const { getId } = homeSlice.actions;
export default homeSlice.reducer;
