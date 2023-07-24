import { LatLngTuple } from "leaflet";

export const fetchPath = (points: LatLngTuple[]) => {
  return fetch(
    `https://router.project-osrm.org/route/v1/driving/${points
      .map((item) => Array.from(item).reverse().join(","))
      .join(";")}?geometries=polyline`
  );
};
