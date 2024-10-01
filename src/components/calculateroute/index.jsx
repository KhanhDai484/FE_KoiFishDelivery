import React, { useState, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import MapboxDirections from "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions";
import "mapbox-gl/dist/mapbox-gl.css";
import "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css";

mapboxgl.accessToken =
  "pk.eyJ1Ijoia2hhbmhkYWkiLCJhIjoiY20xcDdiYjUzMDEzbzJpb2Q3ZjZ0YmxqcCJ9.zw19yt6xmWEux4z6UA5Yvg";

function NewPackage() {
  const [map, setMap] = useState(null);
  const [directions, setDirections] = useState(null);

  useEffect(() => {
    const initializeMap = () => {
      const map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/streets-v12",
        center: [106.3648726, 10.7546174], // initial position (Hồ Chí Minh)
        zoom: 9,
      });

      // Initialize Mapbox Directions plugin
      const directions = new MapboxDirections({
        accessToken: mapboxgl.accessToken,
        unit: "metric", // or 'imperial'
        profile: "mapbox/driving", // you can change this to 'walking', 'cycling', etc.
      });

      // Add directions control to the map
      map.addControl(directions, "top-left");

      setMap(map);
      setDirections(directions);
    };

    if (!map) initializeMap();

    return () => {
      if (map) map.remove(); // Cleanup on unmount
    };
  }, [map]);

  // Function to set the origin and destination based on user input
  const handleRouteCalculation = (e) => {
    e.preventDefault();
    const origin = e.target.origin.value;
    const destination = e.target.destination.value;

    if (directions) {
      // Set origin and destination in the directions plugin
      directions.setOrigin(origin);
      directions.setDestination(destination);
    }
  };

  return (
    <div>
      <h1>Calculate Route</h1>
      <form onSubmit={handleRouteCalculation}>
        <div>
          <label>Enter starting place: </label>
          <input type="text" name="origin" placeholder="Enter starting place" />
        </div>
        <div>
          <label>Enter destination: </label>
          <input
            type="text"
            name="destination"
            placeholder="Enter destination"
          />
        </div>
        <button type="submit">Calculate Route</button>
      </form>

      {/* Map container */}
      <div id="map" style={{ width: "100%", height: "500px" }}></div>
    </div>
  );
}

export default NewPackage;
