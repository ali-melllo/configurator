'use client'

import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import { toast } from "sonner";


interface GlobalState {
  showExterior: boolean;
  showInside: boolean,
  showFrequentlyAskedModal: boolean;
  showFinalQuoteModal: boolean,
  showPreview: boolean,
  view?: "exterior" | "inside";
  finalQuote: {
    surface: string,
    width: string,
    depth: string,
    exterior: any[],
    interior: any[],
    constructionOld: boolean
  };
  buildingStep: number | null;
}

const initialState: GlobalState = {
  showExterior: false,
  showFrequentlyAskedModal: false,
  showFinalQuoteModal: false,
  buildingStep: null,
  showInside: false,
  showPreview: false,
  view: "exterior",
  finalQuote: {
    surface: "",
    width: "",
    depth: "",
    constructionOld: false,
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
    changePreview: (state, action: PayloadAction<boolean>) => {
      state.showPreview = action.payload;
    },
    changeInside: (state, action: PayloadAction<boolean>) => {
      state.showInside = action.payload;
    },
    changeFrequentlyAskedModal: (state, action: PayloadAction<boolean>) => {
      state.showFrequentlyAskedModal = action.payload;
    },
    changeShowFinalQuoteModal: (state, action: PayloadAction<boolean>) => {
      if (!state.finalQuote.depth || !state.finalQuote.width) {
        toast("Please Define your surface area");
      } else if (state.finalQuote.exterior.length === 0 && state.finalQuote.interior.length === 0) {
        toast("You Haven't choose any obstacles yet");
      } else {
        state.showFinalQuoteModal = action.payload;
      }
    },
    changeView: (state, action: PayloadAction<"exterior" | "inside">) => {
      state.view = action.payload;
    },

    resetAll: (state) => {
      state.view = "exterior";
      state.finalQuote = {
        surface: "",
        width: "",
        depth: "",
        exterior: [],
        interior: [],
        constructionOld: false
      };
      state.showFinalQuoteModal = false;
    },
    setDimensions: (state, action: PayloadAction<{ width: string, depth: string, surface: string }>) => {
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
    updateExteriorItemMeter: (state, action: PayloadAction<any>) => {
      const existingIndex = state.finalQuote.exterior.findIndex(item => item.key === action.payload.key);
      if (existingIndex !== -1) {
        state.finalQuote.exterior[existingIndex].meter = action.payload.meter;
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
    changeConstructionOld: (state, action: PayloadAction<boolean>) => {
      state.finalQuote.constructionOld = action.payload
    },
    setBuildingStep: (state, action: PayloadAction<number>) => {
      state.buildingStep = action.payload;
    },
  },
});

export const {
  changeExterior,
  addToExterior,
  changeView,
  setDimensions,
  changeInside,
  addToInside,
  changeShowFinalQuoteModal,
  resetAll,
  changeFrequentlyAskedModal,
  setBuildingStep,
  changeConstructionOld,
  changePreview,
  updateExteriorItemMeter
} = globalSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.global;

export default globalSlice.reducer;
