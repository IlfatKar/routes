import { LatLngTuple } from "leaflet";

export interface RoutesState {
  routesList: { [title: string]: LatLngTuple[] };
  currentRoute: string;
  currentPath: LatLngTuple[] | null;
  error: string | null;
}

export interface RoutesResponce {
  code: string;
  routes: {
    geometry: string;
    legs: unknown[];
    weight_name: string;
    weight: number;
    duration: number;
    distance: number;
  }[];
  waypoints: {
    hint: string;
    distance: number;
    name: string;
    location: LatLngTuple;
  }[];
}
