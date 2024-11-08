// MapView.js
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function MapView() {
    return (
        <MapContainer center={[40.64529, -74.166665]} zoom={13} className="w-full h-full rounded-lg shadow-xl">
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; OpenStreetMap contributors"
                className="h-full w-full"
            />
            <Marker position={[-3.8313386460139642, -38.48798975490939]}>
                <Popup>
                    Eco Ponto Messejana ll
                </Popup>
            </Marker>
        </MapContainer>
    );
}

export default MapView;
