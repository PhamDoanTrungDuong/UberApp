import { createSlice } from "@reduxjs/toolkit";

export interface NavState {
    origin?: string;
    destination?: string;
    travelTimeInformation?: string;
}

const initialState: NavState = {
   origin: "",
   destination: "",
   travelTimeInformation: "",
}

export const navSlice = createSlice({
    name: 'nav',
    initialState,
    reducers: {
      setOrigin: (state, action) => {
         state.origin = action.payload;
      },
      setDestination: (state, action) => {
         state.origin = action.payload;
      },
      setTravelTimeInformation: (state, action) => {
         state.origin = action.payload;
      }
    },
    extraReducers(builder) {

    },
})

export const { setOrigin, setDestination, setTravelTimeInformation } = navSlice.actions
export default navSlice.reducer

export const selectOrigin = (state: any) => state.nav.origin;
export const selectDestination = (state: any) => state.nav.destination;
export const selectTravelTimeInformation = (state: any) => state.nav.travelTimeInformation;