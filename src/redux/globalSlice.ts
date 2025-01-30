'use client'

import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

interface GlobalState {
  showExterior?: boolean;
  finalQuote: {
    width: string,
    depth: string,
    exterior: any[],
    interior: any[]
  };
}

const initialState: GlobalState = {
  showExterior: false,
  finalQuote: {
    width: "",
    depth: "",
    exterior: [],
    interior: []
  }
};

export const globalSlice: any = createSlice({
  name: "global",
  initialState,
  reducers: {
    changeExterior: (state, action: PayloadAction<boolean>) => {
      state.showExterior = action.payload;
    },
    addToExterior: (state, action: PayloadAction<any>) => {
      const existingIndex = state.finalQuote.exterior.findIndex(item => item.key === action.payload.key);
      if (existingIndex !== -1) {
        state.finalQuote.exterior[existingIndex] = action.payload;
      } else {
        state.finalQuote.exterior.push(action.payload);
      }
    },
  },
});

export const { changeExterior, addToExterior } = globalSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.global;

export default globalSlice.reducer;
