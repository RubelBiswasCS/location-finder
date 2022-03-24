import * as React from 'react';
import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField'
import {getPlacesAsync,
        flyTo,
        selectPlaces    
    } from '../../features/places/placeSlice';
import { useSelector, useDispatch } from 'react-redux';
const MocPlaces =  [
    {
        "id": 778,
        "longitude": "90.4012799263",
        "latitude": "23.768977904449",
        "address": "House 77, Shahid Taj Uddin Ahmed Sharani",
        "city": "Dhaka",
        "area": "Kejgaon",
        "postCode": 1208,
        "pType": "Industry",
        "uCode": "MAPB0183"
    },
    {
        "id": 2,
        "longitude": "90.40287181735",
        "latitude": "23.769046635996",
        "address": "House 77, Tejgaon Industrial Area",
        "city": "Dhaka",
        "area": "Nejgaon",
        "postCode": 1208,
        "pType": "Industry",
        "uCode": "EAST9031"
    },
    {
        "id": 3,
        "longitude": "90.40298178792",
        "latitude": "23.768945072849",
        "address": "House 77, Tejgaon Industrial Area",
        "city": "Dhaka",
        "area": "Tejgaon",
        "postCode": 1208,
        "pType": "Industry",
        "uCode": "AIMS0122"
    }
]

const SearchBox = () => {
    const dispatch = useDispatch();
    const places = useSelector(selectPlaces);
    return (
        <>
           <Autocomplete
                freeSolo
                id="free-solo-2-demo"
                disableClearable
                options={places}
                getOptionLabel={(option) => {
                    // e.g value selected with enter, right from the input
                    if (typeof option === 'string') {
                      return option;
                    }
                    if (option.inputValue) {
                      return option.inputValue;
                    }
                    return option.Address.split(',')[0];
                  }}
                renderOption={(props, option) => (
                    <li  {...props} key={option.id} >
                        {option.Address.split(',')[0]}
                        <span>{option.address}</span>
                    </li>)}
                // defaultValue={[places[0].address]}
                //dispatch(selectPlace(value.id))
                onChange={ (e,value) => {dispatch(flyTo(value.id))}}
                renderInput={(params) => (
                <TextField
                    onChange={e => dispatch(getPlacesAsync(e.target.value || ''))}
                    
                    {...params}
                    label=""
                    InputProps={{
                    ...params.InputProps,
                    
                    }}
                />
                )}
            />

        </>
    );
}

export default SearchBox;

