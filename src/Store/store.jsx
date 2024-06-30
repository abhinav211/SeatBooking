import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedCountry: null,
  selectedLocation: null,
  selectedFloor: null,
  selectedRoom: null,
  selectedDate: new Date()
};


const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    setSelectedCountry: (state, action) => {
      state.selectedCountry = action.payload;
      state.selectedLocation = null;
      state.selectedFloor = null;
      state.selectedRoom = null;
    },
    setSelectedLocation: (state, action) => {
      state.selectedLocation = action.payload;
      state.selectedFloor = null;
      state.selectedRoom = null;
    },
    setSelectedFloor: (state, action) => {
      state.selectedFloor = action.payload;
      state.selectedRoom = null;
    },
    setSelectedRoom: (state, action) => {
      state.selectedRoom = action.payload;
    },
    setSelectedDate: (state, action) => {
      state.selectedDate = action.payload ? action.payload.toISOString() : null;;
    }
  }
});

export const {
  setSelectedCountry,
  setSelectedLocation,
  setSelectedFloor,
  setSelectedRoom,
  setSelectedDate
} = bookingSlice.actions;


const store = configureStore({
  reducer: {
    booking: bookingSlice.reducer
  }
});

export default store;
