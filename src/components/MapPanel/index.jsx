import './index.scss';
import 'mapbox-gl/dist/mapbox-gl.css';
import * as React from 'react';
import ReactMapGL, {Marker} from 'react-map-gl';
import Container from '@mui/material/Container';

import { useSelector, useDispatch } from 'react-redux';
import {getPlacesAsync,
    flyTo,
    selectPlaces    
} from '../../features/places/placeSlice';
import Button from '@mui/material/Button';
import LocationOnIcon from '@mui/icons-material/LocationOn';
// const mapboxAccessToken = 'pk.eyJ1IjoicnViZWxiaXN3YXMiLCJhIjoiY2wxNjBqbG1yMHVoODNkcWExZmc0Y2JvaiJ9.qshAlfWDxCblvr_MJkLg-Q'
const mapboxAccessToken = process.env.REACT_APP_MAPBOX_TOKEN
const colors = {
    'Admin':'red',
    'Office':'cyan',
    'Industry':'yellow',
    'Government':'green',
    'Shop':'pink',
    'Construction':'gray',
    'Transportation':'orangered',
    'Education':'pink',
    'Healthcare':'blue',
    'Food':'gold',
    'Recreation':'palevioletred',
    'Commercial':'blueviolet',
    'Bank':'greenyellow'

}

const MapPanel = () => {
    const dispatch = useDispatch();
    const places = useSelector(selectPlaces);
    
    const [viewport,setViewPort] = React.useState({
        latitude:'23.8103',
        longitude:'90.4125',
        zoom:12,
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
            {places.map( place => (
                <Marker key={place.id} latitude={place.latitude} longitude={place.longitude}>
                    <Button onClick={() => dispatch(flyTo(place.id))} ><LocationOnIcon sx={{color:colors[place.pType]}}/></Button>
                </Marker>
            ))}
            </ReactMapGL>
        </Container>
    );
}
export default MapPanel;