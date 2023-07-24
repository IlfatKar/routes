import { Content } from "antd/es/layout/layout";
import {
  MapContainer,
  Marker,
  Polyline,
  TileLayer,
  useMap,
} from "react-leaflet";
import { IMapProps } from "../types";
import { theme } from "antd";
import { useEffect } from "react";

function MapTiles({ path }: IMapProps) {
  const map = useMap();
  useEffect(() => {
    const timer = setTimeout(() => {
      map.invalidateSize(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    if (path) {
      map.flyTo(path[0]);
      map.fitBounds(path);
    }
  }, [path]);
  return (
    <>
      <TileLayer
        attribution="© Tile.osm"
        url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
      />
      {path && <Polyline positions={path} />}
      {path && path.map((item, i) => <Marker key={i} position={item} />)}
    </>
  );
}

export default function Map({ path }: IMapProps) {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Content className="main-content" style={{ background: colorBgContainer }}>
      <MapContainer
        zoom={18}
        center={[59.84660399, 30.29496392]}
        scrollWheelZoom={true}
      >
        <MapTiles path={path} />
      </MapContainer>
    </Content>
  );
}
