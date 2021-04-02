import React from "react";
import "./MapContainer.css";
// import { ReactComponent as Map3 } from "../Map.svg";
import Map from "./Map";
export default function MapContainer({ setData }) {
  return (
    <div
      className="
  gridArea
  MapContainer"
    >
      <Map setData={setData}></Map>
    </div>
  );
}
