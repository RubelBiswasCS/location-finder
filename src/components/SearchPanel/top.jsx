import './top.scss';
import * as React from 'react';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
const Top = () => {
    return (
        <Grid container className="top ">
            <Grid item className='brand-logo'>
                <Link to='#'>
                    <Box component="span" className={'dark-text'}>Huh</Box>
                    <Box component="span" className={'nav-text'}>Lan</Box>
                </Link>
            </Grid>
            <Grid item>

            </Grid>
        </Grid>
    );
}
export default Top;