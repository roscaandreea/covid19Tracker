import React from "react";
import { Map, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./CovidMap.css";


const CovidMap = ({countries}) => {
  const mapStyle = {
    fillColor: "white",
    weight: 0.3,
    color: "black",
    fillOpacity: 1,
  };

  const onEachCountry = (country, layer) => {
    layer.options.fillColor = country.properties.color;
    const name = country.properties.ADMIN;
    const confirmedText = country.properties.confirmedText;
    layer.bindPopup(`${name} ${confirmedText}`);
  };
  
    return(
        <div>
            <Map zoom={1} center={[40,-10]}>
                <GeoJSON 
                    data={countries}
                    style={mapStyle}
                    onEachFeature={onEachCountry} />
            </Map>
        </div>
    );
}

export default CovidMap;