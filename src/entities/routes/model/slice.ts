import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { LatLngTuple } from "leaflet";
import { RoutesState } from "../types";

const initialState: RoutesState = {
  routesList: {
    "Маршрут №1": [
      [59.84660399, 30.29496392],
      [59.82934196, 30.42423701],
      [59.83567701, 30.38064206],
    ],
    "Маршрут №2": [
      [59.82934196, 30.42423701],
      [59.82761295, 30.41705607],
      [59.84660399, 30.29496392],
    ],
    "Маршрут №3": [
      [59.83567701, 30.38064206],
      [59.84660399, 30.29496392],
      [59.82761295, 30.41705607],
    ],
  },
  currentRoute: "Маршрут №1",
  currentPath: null,
  error: null,
};

export const routesSlice = createSlice({
  name: "routes",
  initialState,
  reducers: {
    changeCurrent: (state, action: PayloadAction<string>) => {
      if (state.routesList[action.payload]) {
        state.currentRoute = action.payload;
      }
    },
    fetchCurrentPath: (state, action: PayloadAction<LatLngTuple[]>) => {
      state.currentPath = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const { changeCurrent, fetchCurrentPath, setError } =
  routesSlice.actions;

export default routesSlice.reducer;
