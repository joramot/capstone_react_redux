import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const initialState = {
  data: [],
  id: 0,
  error: '',
  isLoading: false,
  search: '',
};

export const fetchData = createAsyncThunk(
  'home/fetchdata',
  async () => {
    const response = await fetch('https://financialmodelingprep.com/api/v3/symbol/NASDAQ?apikey=JZX3skmwGAztX0ta1ByTbmOON6SAlIax');
    if (!response.ok) {
      throw new Error('Error Request');
    }
    const data = await response.json();

    return data;
  },
);

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    getId: (state, action) => {
      state.id = action.payload;
    },
    setSearch: (state, action) => ({ ...state, search: action.payload }),
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

export const { getId, setSearch } = homeSlice.actions;
