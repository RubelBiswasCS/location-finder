import './top.scss';
import * as React from 'react';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { toggleColorMode, selectTheme } from '../../features/theme/themeSlice';
import { useSelector, useDispatch } from 'react-redux';

const Top = () => {
    const theme = useTheme();
    const dispatch = useDispatch();

    const prevMode = useSelector(selectTheme);
    const currentMode = (prevMode === 'light' ? 'dark' : 'light');
    
    return (
        <Grid container className="top">
            <Grid item className='brand-logo'>
                <Link to='#'>
                    <Box component="span" className={'dark-text'}>Huh</Box>
                    <Box component="span" className={'nav-text'}>Lan</Box>
                </Link>
                
            </Grid>
            <Grid item className={'theme-toggle-btn'}>
                <IconButton sx={{ ml: 1 }} onClick={() => dispatch(toggleColorMode(currentMode))} color="inherit">
                    {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                </IconButton>
            </Grid>
        </Grid>
    );
}
export default Top;