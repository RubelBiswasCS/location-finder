import './index.scss';
import * as React from 'react';
import Container from '@mui/material/Container';
import SearchBox from './searchBox';
import Top from './top';
import SelectedPlaceDetatils from './selectedPlaceDetails';

const SearchPanel = () => {
    return (
        <Container className="search-panel">
            <Top/>
            <SearchBox/>
            <SelectedPlaceDetatils/>
        </Container>
    );
}
export default SearchPanel;