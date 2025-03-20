// "use client";
// import React, { useRef, useEffect } from 'react';
// import * as maptilersdk from '@maptiler/sdk';
// import "@maptiler/sdk/dist/maptiler-sdk.css";
// import './Location.css';
// // const MAPTILER_API_KEY = "gyiK9oGrWvMdck8MD8sT";

// const Location = () => {

//     const mapContainer = useRef(null);
//     const map = useRef(null);
//     const tokyo = { lng: 139.753, lat: 35.6844 };
//     const zoom = 14;
//     maptilersdk.config.apiKey = 'gyiK9oGrWvMdck8MD8sT';

//     useEffect(() => {
//       if (map.current) return; // stops map from intializing more than once

//       map.current = new maptilersdk.Map({
//         container: mapContainer.current,
//         style: maptilersdk.MapStyle.STREETS,
//         center: [tokyo.lng, tokyo.lat],
//         zoom: zoom
//       });

//     }, [tokyo.lng, tokyo.lat, zoom]);

//     return (
//     //     <div className="w-full max-w-3xl mx-auto mt-8 p-4 bg-white shadow-lg rounded-lg">
//     //   <h2 className="text-xl font-semibold mb-4 text-center">Live Map View</h2>
//     //   <MapContainer
//     //     center={location}
//     //     zoom={13}
//     //     scrollWheelZoom={false}
//     //     className="h-96 w-full rounded-lg"
//     //   >
//     //     <TileLayer url={`https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`}
//     //     attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//     //     />
//     //     <Marker position={location}>
//     //       <Popup>Selected Location</Popup>
//     //     </Marker>
//     //   </MapContainer>
//     // </div>
//     <div className="map-wrap">
//     <div ref={mapContainer} className="map" />
//   </div>
//     );
// };

// export default Location;

import React from 'react';
import { APIProvider, Map } from '@vis.gl/react-google-maps';
import { mapApi } from '@/ApiKey/mapApi';

const Location = () => {
    return (
        <div>
            <APIProvider apiKey={mapApi}>
                {/* Need Google paid API key */}
                <Map
                    style={{ width: '500px', height: '300px' }}
                    defaultCenter={{ lat: 22.54992, lng: 0 }}
                    defaultZoom={3}
                    gestureHandling={'greedy'}
                    disableDefaultUI={true}
                />
            </APIProvider>

        </div>
    );
};

export default Location;