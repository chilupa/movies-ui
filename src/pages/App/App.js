import React from 'react';
import { Container } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../../utils/theme';
import Movies from '../../components/Movies/Movies';
import Header from '../../components/Header/Header';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Container maxWidth="xl">
        <Movies />
      </Container>
    </ThemeProvider>
  );
};

export default App;
