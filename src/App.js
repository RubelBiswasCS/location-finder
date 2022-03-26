import React from 'react';
import Container from '@mui/material/Container';
import './App.scss';
import SearchPanel from './components/SearchPanel';
import MapPanel from './components/MapPanel';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useSelector } from 'react-redux';

import { selectTheme } from './features/theme/themeSlice';

function App() {
  const mode = useSelector(selectTheme);
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode:mode,
        },
      }),
    [mode],
  );

  return (
    <ThemeProvider theme={theme}>
      <Container 
        className={'search-home'} 
        sx={{
          display: 'flex',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: 'background.default',
          color: 'text.primary',
          borderRadius: 1,
          p: 3,
        }}
      >
        <SearchPanel />
        <MapPanel />
      </Container>
    </ThemeProvider>
  );
}

export default App;
