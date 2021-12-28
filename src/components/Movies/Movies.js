import { Alert, CircularProgress, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { getMovies } from '../../services/movieApis';
import { searchByMovileTitle } from '../../services/searchApis';
import PropTypes from 'prop-types';
import MovieCard from '../MovieCard/MovieCard';

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
              <MovieCard movie={movie} />
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
