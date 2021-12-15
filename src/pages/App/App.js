import React, { useState } from 'react';
import { Container } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../../utils/theme';
import Movies from '../../components/Movies/Movies';
import Header from '../../components/Header/Header';

const App = () => {
  const [title, setTitle] = useState('');

  const headerProps = {
    title,
    setTitle,
  };

  return (
    <ThemeProvider theme={theme}>
      <Header {...headerProps} />
      <Container maxWidth="xl">
        <Movies title={title} />
      </Container>
    </ThemeProvider>
  );
};

export default App;
