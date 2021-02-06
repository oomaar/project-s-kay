import { createSlice } from '@reduxjs/toolkit';

export const showsSlice = createSlice({
  name: 'shows',
  initialState: {
    shows: false,
  },
  reducers: {
    setShow: state => {
        state.shows = !state.shows;
      }
  },
});

export const { setShow } = showsSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectShows = state => state.shows;

export default showsSlice.reducer;
