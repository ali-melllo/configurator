'use client'

import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

interface GlobalState {
  showFacade?: any;
}

const initialState: GlobalState = {
  showFacade: null,
};

export const globalSlice: any = createSlice({
  name: "global",
  initialState,
  reducers: {
    changeFacade: (state, action: PayloadAction<string>) => {
      state.showFacade = action.payload;
    },
  },
});

export const { changeFacade } = globalSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.global;

export default globalSlice.reducer;
