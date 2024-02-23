import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  prisoners: [],
};

const prisonSlice = createSlice({
  name: "prison",
  initialState,
  reducers: {
    addPrisoner: (state, action) => {
      state.prisoners = [...state.prisoners, action.payload];
      console.log("add slice executed");
    },
    releasePrisoner: (state, action) => {
      const releasePrisonerId = action.payload;

      state.prisoners = state.prisoners.filter(
        (prisoner) => prisoner.id !== releasePrisonerId
      );
    },
    updatePrisoner: (state, action) => {
      const index = state.prisoners.findIndex(
        (prisoner) => prisoner.id === action.payload.id
      );

      state.prisoners[index] = action.payload;
      console.log("update slice executed");
    },
  },
});

export const { addPrisoner, releasePrisoner, updatePrisoner } =
  prisonSlice.actions;
export default prisonSlice.reducer;
