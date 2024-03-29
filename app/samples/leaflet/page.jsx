"use client";

let L;
if (typeof window !== "undefined") {
  L = require("leaflet");
}
import "leaflet/dist/leaflet.css";
import { useState, useRef, useEffect } from "react";
import issIconUrl from "./iss.png";

export default function LeafletIss() {
  const issApiUrl = "https://api.wheretheiss.at/v1/satellites/25544";
  const tileUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
  const stamenWatercolor =
    "https://tiles.stadiamaps.com/tiles/stamen_watercolor/{z}/{x}/{y}.jpg";

  const mapContainerRef = useRef(null);
  const latRef = useRef(null);
  const longRef = useRef(null);

  const [latAndLong, setLatAndLong] = useState([0, 0]);

  useEffect(() => {
    const container = L.DomUtil.get(mapContainerRef.current);
    if (container != null) {
      container._leaflet_id = null;
    }

    if (container) {
      const theMap = L.map(mapContainerRef.current, {
        zoom: 2,
        center: [0, 0],
      });

      theMap.touchZoom.disable();
      theMap.doubleClickZoom.disable();
      theMap.scrollWheelZoom.disable();
      theMap.boxZoom.disable();
      theMap.keyboard.disable();

      L.tileLayer(tileUrl).addTo(theMap);
      L.tileLayer(stamenWatercolor).addTo(theMap);

      const issIcon = new L.Icon({
        iconUrl: issIconUrl.src,
        iconSize: [50, 32],
        iconAnchor: [25, 16],
      });
      const marker = L.marker([0, 0], { icon: issIcon }).addTo(theMap);

      const getISS = () => {
        fetch(issApiUrl)
          .then((response) => response.json())
          .then(function (data) {
            const { latitude, longitude } = data;
            marker.setLatLng([latitude, longitude]);
            theMap.setView([latitude, longitude]);
            setLatAndLong([latitude, longitude]);
          })
          .catch(function (e) {
            console.error(e);
          });
      };

      getISS();
      theMap.setZoom(2);
      setInterval(getISS, 3000);
    }
  }, []);

  return (
    <div className="flex h-full w-full flex-col items-center justify-center bg-bark p-10">
      <div className="mb-5 w-full text-left text-3xl text-white">
        Where is the ISS ?
        <div className="text-sm font-thin text-white">
          using Leaflet maps and the{" "}
          <a
            target="_blank"
            className="underline"
            href="https://api.wheretheiss.at"
          >
            ISS API
          </a>
        </div>
      </div>

      <div
        className="h-[500px] w-[500px] rounded-full shadow-lg"
        ref={mapContainerRef}
      />

      <div className="mt-5 tracking-wider text-lavender">
        <div ref={latRef}>latitude: {latAndLong[0].toFixed(2)}</div>
        <div ref={longRef}>longitude: {latAndLong[1].toFixed(2)}</div>
      </div>

      <div className="mt-10 text-sm font-thin tracking-wider text-white">
        Map tiles by{" "}
        <a target="_blank" className="underline" href="http://stamen.com">
          Stamen Design
        </a>{" "}
        - Map data from{" "}
        <a
          target="_blank"
          className="underline"
          href="https://www.openstreetmap.org"
        >
          OpenStreetMap
        </a>
      </div>

      <div className="mt-6 text-sm font-thin italic tracking-wider text-lavender">
        if it seems stuck it may have exceeded the free api calls for now - try
        again later :)
      </div>
    </div>
  );
}
