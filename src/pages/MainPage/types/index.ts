import { LatLngTuple } from "leaflet";

export interface IMenuProps {
  routes: string[];
  onClick: (item: string) => void;
}
export interface IMapProps {
  path: LatLngTuple[] | null;
}
