import "mapbox-gl/dist/mapbox-gl.css";
//@ts-ignore
import mapboxgl from "mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import { useEffect, useRef, useState } from "react";


import styles from "./map.module.sass"

interface IMapProps {
  accessToken: string
}

export const Map: React.FC<IMapProps> = (props: IMapProps) => {
  mapboxgl.accessToken = props.accessToken; 
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(9);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom,
    });
  });

  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on("move", () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });

    map.current.on('load', function () {
      map.current.resize();
    });
  });

  console.log(`Longitude: ${lng} | Latitude: ${lat} | Zoom: ${zoom}`)

  return (
    <div 
      ref={mapContainer}  
      className={styles.mapContainer}>
    </div>
  );
};
