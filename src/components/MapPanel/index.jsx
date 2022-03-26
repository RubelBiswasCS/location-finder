import './index.scss';
import 'mapbox-gl/dist/mapbox-gl.css';
import * as React from 'react';
import ReactMapGL, {Marker} from 'react-map-gl';
import Container from '@mui/material/Container';

import { useSelector, useDispatch } from 'react-redux';
import {getPlacesAsync,
        flyTo,
        selectPlaces,
        selectViewport,
        setViewport,
        setCurrentPlaceId,
        selectCurrentPlaceId,
        selectCurrentPlace
    } from '../../features/places/placeSlice';
import {selectTheme} from '../../features/theme/themeSlice';
import Button from '@mui/material/Button';
import LocationOnIcon from '@mui/icons-material/LocationOn';


const mapboxAccessToken = 'pk.eyJ1IjoicnViZWxiaXN3YXMiLCJhIjoiY2wxNjBqbG1yMHVoODNkcWExZmc0Y2JvaiJ9.qshAlfWDxCblvr_MJkLg-Q'
//const mapboxAccessToken = process.env.REACT_APP_MAPBOX_TOKEN
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
    const viewport = useSelector(selectViewport);
    const currentPId = useSelector(selectCurrentPlaceId);
    const currentPlace = useSelector(selectCurrentPlace);
    const [viewState, setViewState] = React.useState({
        latitude:'23.8103',
        longitude:'90.4125',
        zoom:12,
      });
    const theme = useSelector(selectTheme);
    //"mapbox://styles/mapbox/dark-v10"
    //"mapbox://styles/mapbox/streets-v9"
    const mapStyle = (theme === 'light'
            ?"mapbox://styles/mapbox/streets-v9"
            :"mapbox://styles/mapbox/navigation-night-v1");
 
    React.useEffect(() => {
      
        setViewState(oldViewport => ({
            ...oldViewport,
            ...viewport
          }))
 
      }, [viewport]);

    return (
        <Container className="map-panel">
            <ReactMapGL
            {...viewState}
            onMove={evt => setViewState(evt.viewState)}
            mapboxAccessToken={mapboxAccessToken}
            onViewportChange={nextViewport => setViewport(nextViewport)}
            mapStyle={mapStyle}
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