"use client"

import * as React from 'react';
import Map, { Source, Layer } from 'react-map-gl';
import type { CircleLayer } from 'react-map-gl';
import type { FeatureCollection } from 'geojson';
import 'mapbox-gl/dist/mapbox-gl.css';


const layerStyle: CircleLayer = {
    id: 'point',
    type: 'circle',
    paint: {
        'circle-radius': 10,
        'circle-color': '#007cbf'
    },
    source: 'my-data'
};

export default function MapDisplay({ latitude, longitude, zoom }: { latitude: number, longitude: number, zoom?: number }) {
    const geojson: FeatureCollection = {
        type: 'FeatureCollection',
        features: [
            { type: 'Feature', geometry: { type: 'Point', coordinates: [longitude, latitude] }, properties: {} }
        ]
    };

    return (
        <Map
            mapboxAccessToken="pk.eyJ1IjoidHVzaGdhdXJhdiIsImEiOiJjbDZqYmUyYm4xNGQwM2VvNnE4ZXJxdTg0In0.jpd4INxeZvpfVUfsChWA6g"
            initialViewState={{
                longitude: longitude,
                latitude: latitude,
                zoom: zoom || 14
            }}
            style={{ width: "100%", maxWidth: "800px", height: 400 }}
            mapStyle="mapbox://styles/mapbox/dark-v11"
        // mapStyle="mapbox://styles/mapbox/navigation-night-v1"
        >
            <Source id="my-data" type="geojson" data={geojson}>
                <Layer {...layerStyle} />
            </Source>
        </Map>
    );
}