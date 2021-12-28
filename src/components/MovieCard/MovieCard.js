import React from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Card,
  CardContent,
  Chip,
  colors,
  Stack,
  Typography,
} from '@mui/material';

const MovieCard = ({ movie }) => {
  return (
    <Card sx={{ height: '100%' }}>
      <CardContent>
        <Typography fontWeight={600} color="secondary" pb={1} variant="h6">
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

        <Typography pt={1} pb={1} color={colors.grey[700]} variant="body2">
          {movie?.plot}
        </Typography>

        {movie?.released ? (
          <Typography variant="caption">
            Release date {movie.released?.split('T')[0]}
          </Typography>
        ) : (
          ''
        )}
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
  );
};

MovieCard.propTypes = {
  movie: PropTypes.object,
};

export default MovieCard;
