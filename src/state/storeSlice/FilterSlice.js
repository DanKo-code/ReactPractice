//панель поиска

import { rootShouldForwardProp } from "@mui/material/styles/styled";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modeCountry: "",
  modeSchedule: "",
  modeEmployment: "",
  modeBetween: "",
  modeIncome: ""
};

const FilterSlice = createSlice({
  name: "SearchMode",
  initialState,
  reducers: {
    setCountry(state,action){
        state.modeCountry = action.payload
    },
    setSchedule(state,action){
      state.modeSchedule = action.payload
    },
      setEmployment(state,action){
        state.modeEmployment = action.payload
    },
    setBetween(state,action){
        state.modeBetween = action.payload
    },
    setIncome(state,action){
        state.modeIncome = action.payload
    }
  },
});

export const { setCountry,setBetween,setEmployment,setIncome,setSchedule } = FilterSlice.actions;
export default FilterSlice.reducer;


