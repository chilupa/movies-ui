import {
  Alert,
  Box,
  Card,
  CardContent,
  Chip,
  CircularProgress,
  colors,
  Grid,
  Stack,
  Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { getMovies } from '../../services/movieApis';
import { searchByMovileTitle } from '../../services/searchApis';
import PropTypes from 'prop-types';

const Movies = ({ title }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [resultEmpty, setResultEmpty] = useState(false);

  useEffect(async () => {
    setLoading(true);
    if (title) {
      const response = await searchByMovileTitle(title);

      if (response.data) {
        setLoading(false);
        setMovies(response.data);
        response.data.length === 0
          ? setResultEmpty(true)
          : setResultEmpty(false);
      } else {
        setLoading(false);
        setMovies([]);
      }
    } else {
      const response = await getMovies();

      if (response.data) {
        setLoading(false);
        setMovies(response.data);
        response.data.length === 0
          ? setResultEmpty(true)
          : setResultEmpty(false);
      } else {
        setLoading(false);
        setMovies([]);
      }
    }
  }, [title]);

  return (
    <>
      {resultEmpty && <Alert severity="info">No movies found</Alert>}
      <Grid container spacing={2}>
        {loading ? (
          <CircularProgress sx={{ marginLeft: 1, marginTop: 3 }} />
        ) : (
          movies?.map((movie, index) => (
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

                  <Typography
                    pt={1}
                    pb={1}
                    color={colors.grey[700]}
                    variant="body2"
                  >
                    {movie.plot}
                  </Typography>

                  <Typography variant="caption">
                    Release date {movie.released}
                  </Typography>

                  <Box pt={1} display="flex" gap={1}>
                    <Typography variant="caption">
                      IMDb <strong>{movie?.imdb.rating}</strong>
                    </Typography>
                    {movie.tomatoes?.viewer && (
                      <Typography variant="caption">
                        Tomatoes{' '}
                        <strong>{movie.tomatoes?.viewer.rating}</strong>
                      </Typography>
                    )}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))
        )}
      </Grid>
    </>
  );
};

Movies.propTypes = {
  title: PropTypes.string,
};
export default Movies;
