// MapView.js
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function MapView() {
    return (
        <MapContainer center={[-3.7332646433935563, -38.52168870873056]}
            zoom={13} className="w-full h-full rounded-lg shadow-xl">
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; OpenStreetMap contributors"
                className="h-full w-full"
            />
            <Marker position={[-3.8313386460139642, -38.48798975490939]}>
                <Popup>
                    Ecoponto Messejana ll
                </Popup>
            </Marker>
            <Marker position={[ -3.8525397,-38.4897991,16.5]}>
                <Popup>
                    Ecoponto São Bento II
                </Popup>
            </Marker>
            -3.8525397,-38.4897991,16.5
        </MapContainer>
    );
}

export default MapView;
