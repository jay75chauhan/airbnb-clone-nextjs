import React, { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";

import getCenter from "geolib/es/getCenter";

function Map({ searchResults }) {
  const [selectedLocation, setSelectedLocation] = useState();
  // treansform the search results object into the
  // { latitude: 52.516272, longitude: 13.377722 }
  //object

  const coordinates = searchResults.map((results) => ({
    longitude: results.long,
    latitude: results.lat,
  }));

  // the lat and long of the center location

  const center = getCenter(coordinates);

  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11,
  });

  return (
    <ReactMapGL
      mapStyle="mapbox://styles/jay75chauhan/cks1rjvr61ti317mvgat5h8ec"
      mapboxApiAccessToken={process.env.mapbox_key}
      {...viewport}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    >
      {searchResults.map((result) => (
        <div key={result.long}>
          <Marker longitude={result.long} latitude={result.lat}>
            <img
              src="https://image.flaticon.com/icons/png/512/2111/2111283.png"
              height={25}
              width={25}
              object-fit="contain "
              className="hover:animate-pulse animate-bounce cursor-pointer"
              onClick={() => setSelectedLocation(result)}
            />
          </Marker>

          {/* on click show marker popup */}

          {selectedLocation?.long === result.long ? (
            <Popup
              closeOnClick={true}
              onClose={() => setSelectedLocation({})}
              latitude={result.lat}
              longitude={result.long}
              className="z-50 "
            >
              {result.title}
            </Popup>
          ) : (
            false
          )}
        </div>
      ))}
    </ReactMapGL>
  );
}

export default Map;
