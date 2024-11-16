import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import axiosInstance from "../../services/api";
import Snipper from "../Snipper/main";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";


const customMarkerIcon = new L.Icon({
    iconUrl: markerIcon,
    iconRetinaUrl: markerIcon2x,
    shadowUrl: markerShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41], 
    popupAnchor: [1, -34], 
    shadowSize: [41, 41], 
});

L.Marker.prototype.options.icon = customMarkerIcon;

function MapView() {
    const [ecopontos, setEcopontos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [userLocation, setUserLocation] = useState(null);

    // Obtém a localização do usuário
    const getUserLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    setUserLocation({ lat: latitude, lng: longitude });
                },
                (error) => {
                    console.error("Erro ao obter localização:", error);
                    setUserLocation({ lat: -3.8443809, lng: -38.7166987 });
                }
            );
        } else {
            console.error("Geolocalização não suportada no navegador.");
            setUserLocation({ lat: -3.8443809, lng: -38.7166987 });
        }
    };

    // Fetch inicial dos ecopontos
    useEffect(() => {
        getUserLocation();

        const fetchEcopontos = async () => {
            const token = localStorage.getItem("token");

            if (token) {
                try {
                    const response = await axiosInstance.get("/ecopontos", {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    });

                    setEcopontos(response.data);
                    setLoading(false);
                } catch (error) {
                    console.error("Erro ao buscar ecopontos:", error);
                    setLoading(false);
                }
            } else {
                console.error("Token não encontrado no localStorage");
                setLoading(false);
            }
        };

        fetchEcopontos();
    }, []);

    // Atualiza o mapa para ajustar os bounds
    const MapUpdater = () => {
        const map = useMap();

        if (ecopontos.length > 0) {
            const ecopontoPositions = ecopontos.map(ecoponto => [ecoponto.latitude, ecoponto.longitude]);

            if (userLocation) {
                ecopontoPositions.push([userLocation.lat, userLocation.lng]);
            }

            map.fitBounds(ecopontoPositions);
        }

        return null;
    };

    return (
        <div className="flex w-full h-full mb-1 overflow-hidden rounded-lg shadow-xl">
            {loading ? (
                <div className="flex justify-center items-center w-full h-full">
                    <Snipper />
                </div>
            ) : (
                userLocation && (
                    <MapContainer
                        center={userLocation}
                        zoom={13}
                        className="w-full h-full"
                    >
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution="&copy; OpenStreetMap contributors"
                        />
                        <MapUpdater />

                        {ecopontos.map((ecoponto) => (
                            <Marker
                                key={ecoponto.id}
                                position={[ecoponto.latitude, ecoponto.longitude]}
                            >
                                <Popup>
                                    <h1 className="font-bold text-[15px]">{ecoponto.nome_ecoponto}</h1>
                                    {ecoponto.endereco}
                                </Popup>
                            </Marker>
                        ))}
                    </MapContainer>
                )
            )}
        </div>
    );
}

export default MapView;
