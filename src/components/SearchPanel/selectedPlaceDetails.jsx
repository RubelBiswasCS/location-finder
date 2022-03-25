import './selectedPlaceDetails.scss';
import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import {
    selectCurrentPlace    
} from '../../features/places/placeSlice';
import { useSelector, useDispatch } from 'react-redux';

const SelectedPlaceDetails = () => {
    const selectedPlace = useSelector(selectCurrentPlace)
    return (
        <>
        { (selectedPlace.Address)?
        <Container className="selected-place-details">
       
            <Typography variant="h5">{selectedPlace.Address}</Typography>
            <Typography>{selectedPlace.alternate_address}</Typography>
            <Typography>PostCode: {selectedPlace.postCode}</Typography>
            <Typography>{selectedPlace.pType}</Typography>
            <Typography>Place Code: {selectedPlace.uCode}</Typography>
        
        </Container>:''
        }
        </>
    );
}
export default SelectedPlaceDetails;