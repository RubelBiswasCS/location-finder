import * as React from 'react';
import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField'
import {getPlacesAsync,
        flyTo,
        selectPlaces    
    } from '../../features/places/placeSlice';
import { useSelector, useDispatch } from 'react-redux';


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

