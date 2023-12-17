import React, { useState } from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

const GardeningApp = () => {
  const [gardens, setGardens] = useState([
    { id: 1, name: 'Vegetable Garden', description: 'A garden for growing vegetables' },
    { id: 2, name: 'Flower Garden', description: 'A garden filled with beautiful flowers' },
  ]);

  const [formData, setFormData] = useState({
    name: '',
    description: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleCreateGarden = () => {
    if (formData.name && formData.description) {
      const newGarden = {
        id: gardens.length + 1,
        name: formData.name,
        description: formData.description,
      };
      setGardens((prevGardens) => [...prevGardens, newGarden]);
      setFormData({ name: '', description: '' });
    }
  };

  const handleDeleteGarden = (id) => {
    setGardens((prevGardens) => prevGardens.filter((garden) => garden.id !== id));
  };

  const handleRetrieveGarden = (id) => {
    const selectedGarden = gardens.find((garden) => garden.id === id);
    console.log(selectedGarden);
  };

  const handleUpdateGarden = (id, updatedData) => {
    setGardens((prevGardens) =>
      prevGardens.map((garden) => (garden.id === id ? { ...garden, ...updatedData } : garden))
    );
  };

  return (
    <div style={styles.appContainer}>
      <h1 style={styles.appTitle}>Gardening App</h1>
      <div style={styles.createGardenContainer}>
        <h2>Create Garden</h2>
        <form>
          <label style={styles.label}>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              style={styles.input}
            />
          </label>
          <br />
          <label style={styles.label}>
            Description:
            <input
              type="text"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              style={styles.input}
            />
          </label>
          <br />
          <button type="button" onClick={handleCreateGarden} style={styles.button}>
            Create Garden
          </button>
        </form>
      </div>
      <div style={styles.gardensListContainer}>
        <h2>Gardens</h2>
        <ul style={styles.gardenList}>
          {gardens.map((garden) => (
            <li key={garden.id} style={styles.gardenItem}>
              {garden.name} - {garden.description}
              <button type="button" onClick={() => handleDeleteGarden(garden.id)} style={styles.deleteButton}>
                Delete
              </button>
              <button
                type="button"
                onClick={() => handleRetrieveGarden(garden.id)}
                style={styles.retrieveButton}
              >
                Retrieve
              </button>
              <button
                type="button"
                onClick={() => handleUpdateGarden(garden.id, { name: 'Updated Garden' })}
                style={styles.updateButton}
              >
                Update
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <GardeningApp />
  </StrictMode>
);

const styles = {
  appContainer: {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f5f5f5',
    padding: '20px',
    textAlign: 'center',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  appTitle: {
    color: '#4CAF50',
  },
  createGardenContainer: {
    marginBottom: '20px',
  },
  label: {
    display: 'block',
    marginBottom: '10px',
    color: '#4CAF50',
  },
  input: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    boxSizing: 'border-box',
    marginBottom: '15px',
  },
  button: {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '12px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
  },
  gardensListContainer: {},
  gardenList: {
    listStyle: 'none',
    padding: '0',
  },
  gardenItem: {
    margin: '10px 0',
    padding: '20px',
    backgroundColor: '#ffffff',
    border: '1px solid #ddd',
    borderRadius: '5px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  deleteButton: {
    backgroundColor: '#ff5555',
    color: '#fff',
    padding: '8px',
    margin: '0 5px',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  retrieveButton: {
    backgroundColor: '#4285f4',
    color: '#fff',
    padding: '8px',
    margin: '0 5px',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  updateButton: {
    backgroundColor: '#4CAF50',
    color: '#fff',
    padding: '8px',
    margin: '0 5px',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};
