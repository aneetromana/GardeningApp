import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Container, Typography } from '@mui/material';
import { fakeFetchGardens, fakeFetchGardenDetails } from './api';

const GardenDetails = () => {
  const { gardenId } = useParams();
  const [garden, setGarden] = useState(null);

  useEffect(() => {
  
    setGarden(fakeFetchGardenDetails(gardenId));
  }, [gardenId]);

  return (
    <Container>
      {garden ? (
        <>
          <Typography variant="h5">{garden.name}</Typography>
          <Typography>{garden.description}</Typography>
        </>
      ) : (
        <Typography>Loading...</Typography>
      )}
    </Container>
  );
};

export default GardenDetails;
