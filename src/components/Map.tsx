import { GoogleMap, LoadScript, MarkerF } from "@react-google-maps/api";
import { useRef } from "react";
import { mapContainerStyle, mapCenter } from "../utils/map-utils/MapConfig";
import * as mapHelpers from "../utils/map-utils/MapHelpers";
import { coordinates } from "../utils/coord-utils/AddressProvider";

export const Map: React.FC = () => {
  const mapRef = useRef<google.maps.Map>();
  const coordinatesMap = mapHelpers.parseCoordData(coordinates);

  return (
    <>
      <LoadScript googleMapsApiKey="AIzaSyAM-U19H7ogX1i52houPIaMR07C0J9fCBo">
        <div className="flex flex-auto">
          <div className="m-auto">
            <GoogleMap
              mapContainerStyle={mapContainerStyle}
              center={mapCenter}
              zoom={11}
              onLoad={(map) => {
                mapRef.current = map;
              }}
            >
              {coordinatesMap.map((coord) => (
                <MarkerF
                  position={coord.coord}
                  label={`${coord.occurences}`}
                ></MarkerF>
              ))}
            </GoogleMap>
          </div>
        </div>
      </LoadScript>
    </>
  );
};
