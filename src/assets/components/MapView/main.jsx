import React from 'react'; 
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function MapView() {
    return (
        <div className="flex-1 w-full h-full mb-1 overflow-hidden rounded-lg shadow-xl">
            <MapContainer center={[40.64529, -74.166665]} zoom={13} className="w-full h-full">
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; OpenStreetMap contributors"
                />
                <Marker position={[40.64529, -74.166665]}>
                    <Popup>
                        65-1 Bayard, St Staten Island, NY 10312
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
}

export default MapView;
