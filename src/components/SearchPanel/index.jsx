import './index.scss';
import * as React from 'react';
import Container from '@mui/material/Container';
import SearchBox from './searchBox';
import Top from './top';

const SearchPanel = () => {
    return (
        <Container className="search-panel">
            <Top/>
            <SearchBox/>
        </Container>
    );
}
export default SearchPanel;