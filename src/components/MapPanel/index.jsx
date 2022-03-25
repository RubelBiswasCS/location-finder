import './index.scss';
import 'mapbox-gl/dist/mapbox-gl.css';
import * as React from 'react';
import ReactMapGL from 'react-map-gl';
import Container from '@mui/material/Container';
// const mapboxAccessToken = 'pk.eyJ1IjoicnViZWxiaXN3YXMiLCJhIjoiY2wxNjBqbG1yMHVoODNkcWExZmc0Y2JvaiJ9.qshAlfWDxCblvr_MJkLg-Q'
const mapboxAccessToken = process.env.REACT_APP_MAPBOX_TOKEN
console.log(mapboxAccessToken)
const MapPanel = () => {
    const [viewport,setViewPort] = React.useState({
        latitude:'23.8103',
        longitude:'90.4125',
        zoom:14,
    })
    // {
    //     longitude: -122.4,
    //     latitude: 37.8,
    //     zoom: 14
    // }
    return (
        <Container className="map-panel">
            <ReactMapGL
            initialViewState={viewport}
            mapboxAccessToken={mapboxAccessToken}
            
            mapStyle="mapbox://styles/mapbox/streets-v9"
            >
                markers here
            </ReactMapGL>
        </Container>
    );
}
export default MapPanel;