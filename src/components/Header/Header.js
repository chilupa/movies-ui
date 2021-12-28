import React from 'react';
import { Box, Button, colors, TextField, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { useFormik } from 'formik';

const Header = ({ title, setTitle }) => {
  const formik = useFormik({
    initialValues: {
      title: '',
    },
    onSubmit: (values) => {
      setTitle(values.title);
    },
  });

  const handleReset = () => {
    setTitle('');
    formik.values.title = '';
  };

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
        backgroundColor: colors.green[300],
      }}
    >
      <Typography variant="h4" fontWeight={600}>
        Movies
      </Typography>
      <Box ml="auto" pr={3} display="flex" alignItems="center" gap={1}>
        <form onSubmit={formik.handleSubmit}>
          <TextField
            sx={{ width: '400px' }}
            id="title"
            name="title"
            //  color="primary"
            label="Search by movie title"
            value={formik.values.title}
            onChange={formik.handleChange}
            error={formik.touched.title && Boolean(formik.errors.title)}
            helperText={formik.touched.title && formik.errors.title}
          />
        </form>

        <Box>{title && <Button onClick={handleReset}>Reset</Button>}</Box>
      </Box>
    </Box>
  );
};

Header.propTypes = {
  title: PropTypes.string,
  setTitle: PropTypes.func,
};

export default Header;
