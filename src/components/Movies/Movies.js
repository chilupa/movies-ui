import {
  Box,
  Card,
  CardContent,
  Chip,
  colors,
  Grid,
  Stack,
  Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { searchByMovileTitle } from '../../services/searchApis';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  useEffect(async () => {
    const response = await searchByMovileTitle('black');
    if (response.data) {
      setMovies(response.data);
    } else {
      setMovies([]);
    }
  }, []);
  return (
    <Grid container spacing={2}>
      {movies?.map((movie, index) => (
        <Grid item key={index} lg={3}>
          <Card sx={{ height: 280 }}>
            <CardContent>
              <Typography color="primary" pb={1} variant="h6">
                {movie.title}
              </Typography>
              <Stack direction="row" spacing={1}>
                {movie.genres.map((genre, index) => (
                  <Chip
                    sx={{ borderRadius: '5%' }}
                    key={index}
                    variant="outlined"
                    label={genre}
                  />
                ))}
              </Stack>

              <Typography pt={1} color={colors.grey[700]} variant="body2">
                {movie.plot}
              </Typography>

              <Box pt={1} display="flex" gap={1}>
                <Typography variant="caption">
                  IMDb <strong>{movie?.imdb.rating}</strong>
                </Typography>
                {movie.tomatoes?.viewer && (
                  <Typography variant="caption">
                    Tomatoes <strong>{movie.tomatoes?.viewer.rating}</strong>
                  </Typography>
                )}
              </Box>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Movies;
