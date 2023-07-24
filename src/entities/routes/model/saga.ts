import { put, takeEvery } from "redux-saga/effects";
import { fetchPath } from "../../../shared/api";
import { PayloadAction, createAction } from "@reduxjs/toolkit";
import { LatLngTuple } from "leaflet";
import { pathParse } from "../helpers/pathParse";
import { fetchCurrentPath, setError } from "./slice";
import { RoutesResponce } from "../types";

export function* routesWorker(points: PayloadAction<LatLngTuple[]>): unknown {
  try {
    const payload = yield fetchPath(points.payload).then((res) => {
      if (!res.ok) throw new Error();
      return res.json() as Promise<RoutesResponce>;
    });
    yield put(fetchCurrentPath(pathParse(payload)));
  } catch (e) {
    yield put(setError("Ошибка построения маршрута!"));
  }
}

export const GET_PATH = "ROUTES_WORKER";
export function* routesWatcher() {
  yield takeEvery(GET_PATH, routesWorker);
}
export const getPath = createAction<LatLngTuple[]>(GET_PATH);
