import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {TextField, Button, Box,Grid,Card,CardContent,CardActions, Container, Typography,
Paper,
} from '@mui/material';
import { green, blueGrey } from '@mui/material/colors';

const GardeningApp = () => {
  const [gardens, setGardens] = useState([]);
  const [formData, setFormData] = useState({ name: '', description: '' });
  const [editingGarden, setEditingGarden] = useState(null);

  useEffect(() => {
    setGardens(fakeFetchGardens());
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCreateGarden = (e) => {
    e.preventDefault();
    const newGarden = { id: Date.now(), ...formData };
    const updatedGardens = [...gardens, newGarden];
    setGardens(updatedGardens);
    localStorage.setItem('gardens', JSON.stringify(updatedGardens));
    setFormData({ name: '', description: '' });
  };

  const handleDeleteGarden = (id) => {
    const updatedGardens = gardens.filter((garden) => garden.id !== id);
    setGardens(updatedGardens);
    localStorage.setItem('gardens', JSON.stringify(updatedGardens));
  };

  const handleRetrieveGarden = (id) => {
    const selectedGarden = gardens.find((garden) => garden.id === id);
    console.log(selectedGarden);
  };

  const handleUpdateGarden = (id, updatedData) => {
    const updatedGardens = gardens.map((garden) =>
      garden.id === id ? { ...garden, ...updatedData } : garden
    );
    setGardens(updatedGardens);
    localStorage.setItem('gardens', JSON.stringify(updatedGardens));
    setEditingGarden(null); // Clear the editing state
  };

  return (
    <Container sx={{ marginTop: 4 }}>
      <Typography variant="h4" sx={{ color: blueGrey[900], marginBottom: 2 }}>
        Gardening App
      </Typography>
      <Paper elevation={3} sx={{ padding: 2, backgroundColor: green[50], marginBottom: 3 }}>
        <Box component="form" onSubmit={handleCreateGarden}>
          <TextField
            name="name"
            label="Garden Name"
            value={formData.name}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <TextField
            name="description"
            label="Garden Description"
            value={formData.description}
            onChange={handleInputChange}
            fullWidth
            multiline
            rows={4}
            margin="normal"
          />
          <Button
            type="submit"
            variant="contained"
            sx={{ backgroundColor: green[600], '&:hover': { backgroundColor: green[800] } }}
          >
            Add Garden
          </Button>
        </Box>
      </Paper>
      <Grid container spacing={2}>
        {gardens.map((garden) => (
          <Grid item xs={12} sm={6} md={4} key={garden.id}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  {editingGarden && editingGarden.id === garden.id ? (
                    <TextField
                      name="name"
                      value={editingGarden.name}
                      onChange={(e) =>
                        setEditingGarden({ ...editingGarden, name: e.target.value })
                      }
                    />
                  ) : (
                    garden.name
                  )}
                </Typography>
                <Typography>
                  {editingGarden && editingGarden.id === garden.id ? (
                    <TextField
                      name="description"
                      value={editingGarden.description}
                      onChange={(e) =>
                        setEditingGarden({
                          ...editingGarden,
                          description: e.target.value,
                        })
                      }
                    />
                  ) : (
                    garden.description
                  )}
                </Typography>
              </CardContent>
              <CardActions>
                {editingGarden && editingGarden.id === garden.id ? (
                  <Button
                    size="small"
                    onClick={() => handleUpdateGarden(garden.id, editingGarden)}
                    sx={{ color: green[800] }}
                  >
                    Save
                  </Button>
                ) : (
                  <>
                    <Button
                      size="small"
                      onClick={() => setEditingGarden({ ...garden })}
                      sx={{ color: green[800] }}
                    >
                      Edit
                    </Button>
                    <Button
                      size="small"
                      onClick={() => handleDeleteGarden(garden.id)}
                      sx={{ color: green[800] }}
                    >
                      Delete
                    </Button>
                    <Button
                      size="small"
                      onClick={() => handleRetrieveGarden(garden.id)}
                      sx={{ color: green[800] }}
                    >
                      Retrieve
                    </Button>
                  </>
                )}
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

const fakeFetchGardens = () => {
  return [
    { id: 1, name: 'Rose Garden', description: 'A beautiful collection of various types of roses.' },
    { id: 2, name: 'Lavender Garden', description: 'A serene garden filled with fragrant lavender.' },
    { id: 3, name: 'Herb Garden', description: 'A practical garden of aromatic herbs used for cooking.' },
    { id: 4, name: 'Vegetable Garden', description: 'A garden full of fresh and healthy vegetables.' },
    { id: 5, name: 'Tropical Garden', description: 'A lush, vibrant garden with tropical plants.' },
    { id: 6, name: 'Japanese Zen Garden', description: 'A peaceful and minimalist garden inspired by Japanese Zen.' },
    { id: 7, name: 'Butterfly Garden', description: 'A colorful garden designed to attract butterflies.' },
    { id: 8, name: 'Succulent Garden', description: 'A diverse garden of hardy and water-efficient succulents.' },
    { id: 9, name: 'Rock Garden', description: 'A rugged landscape featuring various types of rocks and alpine plants.' },
    { id: 10, name: 'Cottage Garden', description: 'A charming and informal garden filled with a mix of flowers.' },
    { id: 11, name: 'Rain Garden', description: 'A garden designed to absorb rainwater and support wetland plants.' },
    { id: 12, name: 'Wildflower Garden', description: 'A vibrant garden showcasing the beauty of wildflowers.' },
    { id: 13, name: 'Woodland Garden', description: 'A shady garden under the canopy of trees, with woodland plants.' },
    { id: 14, name: 'Orchid Garden', description: 'An exotic garden dedicated to the cultivation of orchids.' },
    { id: 15, name: 'Fern Garden', description: 'A lush garden featuring a variety of ferns.' },
    { id: 16, name: 'Cacti Garden', description: 'A striking garden filled with various cacti species.' },
    { id: 17, name: 'Bamboo Garden', description: 'A garden showcasing the versatility and beauty of bamboo.' },
    { id: 18, name: 'Mediterranean Garden', description: 'A garden inspired by the Mediterranean landscape with drought-tolerant plants.' },
    { id: 19, name: 'Perennial Garden', description: 'A garden that comes back year after year with perennial plants.' },
    { id: 20, name: 'Water Garden', description: 'A tranquil garden featuring water elements like ponds and waterfalls.' },
    { id: 21, name: 'Formal Garden', description: 'A meticulously designed garden with symmetrical patterns.' }
  ];
};

export default GardeningApp;
