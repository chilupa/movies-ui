import React from 'react';
import { Box, colors, Typography } from '@mui/material';

const Header = () => {
  return (
    <Box
      pl={3}
      pt={2}
      pb={2}
      mb={2}
      data-testid="header"
      sx={{
        display: 'flex',
        alignItems: 'center',
        backgroundColor: colors.grey[100],
      }}
    >
      <Typography variant="h4" fontWeight={600}>
        Movies
      </Typography>
      <Box ml="auto" pr={3}>
        search bar
      </Box>
    </Box>
  );
};

export default Header;
