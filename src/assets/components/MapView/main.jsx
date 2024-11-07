// MapView.js
import React from 'react'; 
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function MapView() {
    return (
        <MapContainer center={[40.64529, -74.166665]} zoom={13} className="w-full h-full">
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; OpenStreetMap contributors"
                className="h-full w-full"
            />
            <Marker position={[40.64529, -74.166665]}>
                <Popup>
                    65-1 Bayard, St Staten Island, NY 10312
                </Popup>
            </Marker>
        </MapContainer>
    );
}

export default MapView;
