import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  hobbsterData: [],
  isLoading: false,
};

const hobbsterSlice = createSlice({
  name: "hobbster",
  initialState,
  reducers: {
    setHobbsterData: (state, action) => {
      state.hobbsterData = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setHobbsterData, setIsLoading } = hobbsterSlice.actions;
export default hobbsterSlice.reducer;
