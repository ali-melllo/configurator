'use client'

import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";


interface GlobalState {
  showExterior: boolean;
  showInside:boolean,
  showFinalQuoteModal:boolean,
  view?: "exterior"| "inside" ;
  finalQuote: {
    surface:string,
    width: string,
    depth: string,
    exterior: any[],
    interior: any[]
  };
}

const initialState: GlobalState = {
  showExterior: false,
  showFinalQuoteModal:false,
  showInside:false,
  view: "exterior",
  finalQuote: {
    surface:"",
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
    changeInside: (state, action: PayloadAction<boolean>) => {
      state.showInside = action.payload;
    },
    changeShowFinalQuoteModal: (state, action: PayloadAction<boolean>) => {
      state.showFinalQuoteModal = action.payload;
    },
    changeView: (state, action: PayloadAction<"exterior"| "inside">) => {
      state.view = action.payload;
    },
    setDimensions: (state, action: PayloadAction<{width:string , depth:string, surface:string}>) => {
      state.finalQuote.depth = action.payload.depth;
      state.finalQuote.width = action.payload.width;
      state.finalQuote.surface = action.payload.surface;

    },
    addToExterior: (state, action: PayloadAction<any>) => {
      const existingIndex = state.finalQuote.exterior.findIndex(item => item.key === action.payload.key);
      if (existingIndex !== -1) {
        state.finalQuote.exterior[existingIndex] = action.payload;
      } else {
        state.finalQuote.exterior.push(action.payload);
      }
    },
    addToInside: (state, action: PayloadAction<any>) => {
      const existingIndex = state.finalQuote.interior.findIndex(item => item.key === action.payload.key);
      if (existingIndex !== -1) {
        state.finalQuote.interior[existingIndex] = action.payload;
      } else {
        state.finalQuote.interior.push(action.payload);
      }
    },
  },
});

export const { changeExterior, addToExterior, changeView, setDimensions , changeInside , addToInside , changeShowFinalQuoteModal} = globalSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.global;

export default globalSlice.reducer;
