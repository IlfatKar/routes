import { RoutesResponce } from "../types";
import polyline from "@mapbox/polyline";

export const pathParse = (res: RoutesResponce) => {
  return polyline.decode(res.routes[0].geometry);
};
